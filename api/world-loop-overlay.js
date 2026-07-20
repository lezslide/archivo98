const PROGRESS_ROOM = "world-progress";
const MAX_KM = 40075;

function sendJson(response, body, status = 200) {
  response.status(status).setHeader("Cache-Control", "no-store");
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.send(JSON.stringify(body));
}

function getSupabaseConfig() {
  const supabaseUrl = process.env.SUPABASE_URL || "";
  const serviceKey = process.env.SUPABASE_ROLE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY || "";
  const anonKey = process.env.SUPABASE_ANON_KEY || process.env.SUPABASE_PUBLISHABLE_KEY || "";
  return { supabaseUrl, keys: [serviceKey, anonKey].filter(Boolean) };
}

function parseProgressMessage(row) {
  try {
    const payload = typeof row.content === "string" ? JSON.parse(row.content) : row.content;
    if (!payload || payload.type !== "km-update") return null;
    const deltaKm = Math.max(0, Number(payload.deltaKm) || 0);
    if (!deltaKm) return null;
    return {
      id: row.id,
      deltaKm,
      displayName: String(payload.displayName || row.username || "Archivo98"),
      note: String(payload.note || ""),
      createdAt: row.created_at || new Date().toISOString(),
    };
  } catch (_error) {
    return null;
  }
}

export default async function handler(request, response) {
  if (request.method !== "GET") {
    return sendJson(response, { error: "Method not allowed" }, 405);
  }

  const { supabaseUrl, keys } = getSupabaseConfig();
  if (!supabaseUrl || !keys.length) {
    return sendJson(response, { error: "Falta configurar Supabase en Vercel." }, 500);
  }

  const select = "select=id,username,content,created_at";
  const path = `messages?${select}&room=eq.${encodeURIComponent(PROGRESS_ROOM)}&order=created_at.asc&limit=1000`;

  try {
    let lastResult = null;
    for (const key of keys) {
      const supabaseResponse = await fetch(`${supabaseUrl}/rest/v1/${path}`, {
        headers: {
          apikey: key,
          Authorization: `Bearer ${key}`,
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
      if (supabaseResponse.ok || !message.toLowerCase().includes("invalid api key")) break;
    }

    if (!lastResult?.ok) {
      return sendJson(response, { error: "No pude cargar World Loop.", detail: lastResult?.body }, lastResult?.status || 500);
    }

    const updates = (Array.isArray(lastResult.body) ? lastResult.body : [])
      .map(parseProgressMessage)
      .filter(Boolean);
    const totalKm = Math.min(MAX_KM, updates.reduce((sum, update) => sum + update.deltaKm, 0));
    const lastUpdate = updates[updates.length - 1] || null;

    return sendJson(response, {
      world: {
        totalKm,
        goalKm: MAX_KM,
        updates: updates.slice(-8).reverse(),
        lastUpdate,
        updatedAt: lastUpdate?.createdAt || new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error(error);
    return sendJson(response, { error: "No pude cargar World Loop." }, 500);
  }
}
