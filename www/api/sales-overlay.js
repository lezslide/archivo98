const SALES_TABLE = "sales_daily_records";

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

export default async function handler(request, response) {
  if (request.method !== "GET") {
    return sendJson(response, { error: "Method not allowed" }, 405);
  }

  const { supabaseUrl, keys } = getSupabaseConfig();
  if (!supabaseUrl || !keys.length) {
    return sendJson(response, { error: "Falta configurar Supabase en Vercel." }, 500);
  }

  const date = String(request.query?.date || "").trim();
  const select = "select=date,money,money_goal,km,km_goal,sales,updated_at";
  const path = date
    ? `${SALES_TABLE}?${select}&date=eq.${encodeURIComponent(date)}&limit=1`
    : `${SALES_TABLE}?${select}&order=updated_at.desc&limit=1`;

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
      return sendJson(response, { error: "No pude cargar el overlay.", detail: lastResult?.body }, lastResult?.status || 500);
    }
    const record = Array.isArray(lastResult.body) ? lastResult.body[0] : null;
    return sendJson(response, { record: record ? normalizeRecord(record) : null });
  } catch (error) {
    console.error(error);
    return sendJson(response, { error: "No pude cargar el overlay." }, 500);
  }
}
