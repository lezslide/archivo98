const PROGRESS_ROOM = "world-progress";
const ALLOWED_EMAIL = "tumberjeremy@gmail.com";

function sendJson(response, body, status = 200) {
  response.status(status).setHeader("Cache-Control", "no-store");
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.send(JSON.stringify(body));
}

function getSupabaseConfig() {
  const supabaseUrl = process.env.SUPABASE_URL || "";
  const serviceKey = process.env.SUPABASE_ROLE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY || "";
  const anonKey = process.env.SUPABASE_ANON_KEY || process.env.SUPABASE_PUBLISHABLE_KEY || "";
  return { supabaseUrl, serviceKey, anonKey, keys: [serviceKey, anonKey].filter(Boolean) };
}

function getBearerToken(request) {
  const header = request.headers.authorization || request.headers.Authorization || "";
  const match = String(header).match(/^Bearer\s+(.+)$/i);
  return match ? match[1].trim() : "";
}

async function verifyAllowedUser(request) {
  const accessToken = getBearerToken(request);
  if (!accessToken) return { ok: false, status: 401, body: { error: "Tenes que iniciar sesion." } };

  const { supabaseUrl, keys } = getSupabaseConfig();
  if (!supabaseUrl || !keys.length) {
    return { ok: false, status: 500, body: { error: "Falta configurar Supabase en Vercel." } };
  }

  let lastBody = null;
  for (const key of keys) {
    const authResponse = await fetch(`${supabaseUrl}/auth/v1/user`, {
      headers: {
        apikey: key,
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const text = await authResponse.text();
    let body = null;
    try {
      body = text ? JSON.parse(text) : null;
    } catch (_error) {
      body = { detail: text };
    }
    lastBody = body;

    if (authResponse.ok) {
      const email = String(body?.email || "").trim().toLowerCase();
      if (email !== ALLOWED_EMAIL) {
        return { ok: false, status: 403, body: { error: "Usuario sin permiso." } };
      }
      return { ok: true, accessToken, user: body };
    }
  }

  return { ok: false, status: 401, body: { error: "Sesion invalida.", detail: lastBody } };
}

async function serviceRequest(path, options = {}) {
  const { supabaseUrl, serviceKey, anonKey } = getSupabaseConfig();
  const key = serviceKey || anonKey;
  if (!supabaseUrl || !key) {
    return { ok: false, status: 500, body: { error: "Falta configurar Supabase en Vercel." } };
  }

  const supabaseResponse = await fetch(`${supabaseUrl}/rest/v1/${path}`, {
    ...options,
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      Prefer: "return=representation",
      ...(options.headers || {}),
    },
  });
  const text = await supabaseResponse.text();
  let body = null;
  try {
    body = text ? JSON.parse(text) : null;
  } catch (_error) {
    body = { detail: text };
  }
  return { ok: supabaseResponse.ok, status: supabaseResponse.status, body };
}

function normalizeMessage(row) {
  return {
    id: row.id,
    username: row.username || "Archivo98",
    content: typeof row.content === "string" ? row.content : JSON.stringify(row.content || {}),
    created_at: row.created_at || new Date().toISOString(),
    user_id: row.user_id || null,
  };
}

export default async function handler(request, response) {
  const auth = await verifyAllowedUser(request);
  if (!auth.ok) return sendJson(response, auth.body, auth.status);

  if (request.method !== "POST") {
    return sendJson(response, { error: "Method not allowed" }, 405);
  }

  try {
    const payload = typeof request.body === "string" ? JSON.parse(request.body || "{}") : request.body || {};
    const deltaKm = Math.max(0, Number(payload.deltaKm) || 0);
    if (!deltaKm) return sendJson(response, { error: "Falta deltaKm." }, 400);

    const displayName = String(payload.displayName || auth.user?.user_metadata?.username || auth.user?.email?.split("@")[0] || "Archivo98");
    const messagePayload = {
      type: "km-update",
      deltaKm,
      displayName,
      note: String(payload.note || `${deltaKm} km agregados al manifiesto.`),
      clientId: String(payload.clientId || ""),
    };

    const result = await serviceRequest("messages", {
      method: "POST",
      body: JSON.stringify({
        room: PROGRESS_ROOM,
        user_id: auth.user.id,
        username: displayName,
        content: JSON.stringify(messagePayload),
      }),
    });

    if (!result.ok) {
      return sendJson(response, { error: "No pude registrar el tramo.", detail: result.body }, result.status);
    }

    const saved = Array.isArray(result.body) ? result.body[0] : result.body;
    return sendJson(response, { message: saved ? normalizeMessage(saved) : null });
  } catch (error) {
    console.error(error);
    return sendJson(response, { error: "No pude registrar el tramo." }, 500);
  }
}
