const SALES_TABLE = "sales_daily_records";
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
  const keys = [serviceKey, anonKey].filter(Boolean);
  return { supabaseUrl, keys };
}

function normalizeRecord(row) {
  return {
    date: row.date,
    money: Number(row.money || 0),
    moneyGoal: Number(row.money_goal || 50),
    km: Number(row.km || 0),
    kmGoal: Number(row.km_goal || 25),
    sales: Array.isArray(row.sales) ? row.sales : [],
    updatedAt: row.updated_at || new Date().toISOString(),
  };
}

async function supabaseRequest(path, options = {}) {
  const { supabaseUrl, keys } = getSupabaseConfig();
  if (!supabaseUrl || !keys.length) {
    return { ok: false, status: 500, body: { error: "Falta configurar Supabase en Vercel." } };
  }

  let lastResult = null;
  const { accessToken = "", ...fetchOptions } = options;
  for (const key of keys) {
    const supabaseResponse = await fetch(`${supabaseUrl}/rest/v1/${path}`, {
      ...fetchOptions,
      headers: {
        apikey: key,
        Authorization: `Bearer ${accessToken || key}`,
        "Content-Type": "application/json",
        Prefer: "return=representation,resolution=merge-duplicates",
        ...(fetchOptions.headers || {}),
      },
    });

    const text = await supabaseResponse.text();
    let body = null;
    try {
      body = text ? JSON.parse(text) : null;
    } catch (_error) {
      body = { detail: text };
    }

    lastResult = { ok: supabaseResponse.ok, status: supabaseResponse.status, body };
    const message = String(body?.message || body?.error || "");
    if (supabaseResponse.ok || !message.toLowerCase().includes("invalid api key")) {
      return lastResult;
    }
  }

  return lastResult;
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

export default async function handler(request, response) {
  const auth = await verifyAllowedUser(request);
  if (!auth.ok) return sendJson(response, auth.body, auth.status);

  if (request.method === "GET") {
    try {
      const result = await supabaseRequest(`${SALES_TABLE}?select=date,money,money_goal,km,km_goal,sales,updated_at&order=date.asc`);
      if (!result.ok) return sendJson(response, { error: "No pude cargar la memoria.", detail: result.body }, result.status);
      return sendJson(response, { records: (result.body || []).map(normalizeRecord) });
    } catch (error) {
      console.error(error);
      return sendJson(response, { error: "No pude cargar la memoria." }, 500);
    }
  }

  if (request.method === "POST") {
    try {
      const payload = typeof request.body === "string" ? JSON.parse(request.body || "{}") : request.body || {};
      const record = payload.record || {};
      if (!record.date) return sendJson(response, { error: "Falta date." }, 400);

      const result = await supabaseRequest(`${SALES_TABLE}?on_conflict=date`, {
        method: "POST",
        body: JSON.stringify({
          date: record.date,
          money: Math.max(0, Number(record.money) || 0),
          money_goal: Math.max(1, Number(record.moneyGoal) || 50),
          km: Math.max(0, Number(record.km) || 0),
          km_goal: Math.max(1, Number(record.kmGoal) || 25),
          sales: Array.isArray(record.sales) ? record.sales.slice(0, 20) : [],
          updated_at: record.updatedAt || new Date().toISOString(),
        }),
      });

      if (!result.ok) return sendJson(response, { error: "No pude guardar la memoria.", detail: result.body }, result.status);
      const saved = Array.isArray(result.body) ? result.body[0] : result.body;
      return sendJson(response, { record: saved ? normalizeRecord(saved) : null });
    } catch (error) {
      console.error(error);
      return sendJson(response, { error: "No pude guardar la memoria." }, 500);
    }
  }

  return sendJson(response, { error: "Method not allowed" }, 405);
}
