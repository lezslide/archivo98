const FALLBACK_SUPABASE_URL = "https://qttxcfbgyfmvyglzwxct.supabase.co";
const FALLBACK_SUPABASE_PUBLISHABLE_KEY = "sb_publishable_8zeUhO0eNbsQddb7koQZ1w_VwuK8FjO";

function sendJson(response, body, status = 200) {
  response.status(status).setHeader("Cache-Control", "no-store");
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.send(JSON.stringify(body));
}

function normalizeMessage(row) {
  return {
    id: row.id || "",
    user_id: row.user_id || "",
    username: row.username || "Anon",
    content: row.content || "",
    created_at: row.created_at || "",
  };
}

export default async function handler(request, response) {
  if (request.method !== "GET") {
    return sendJson(response, { error: "Method not allowed" }, 405);
  }

  const supabaseUrl = process.env.SUPABASE_URL || FALLBACK_SUPABASE_URL;
  const publishableKey = process.env.SUPABASE_ANON_KEY
    || process.env.SUPABASE_PUBLISHABLE_KEY
    || FALLBACK_SUPABASE_PUBLISHABLE_KEY;

  try {
    const supabaseResponse = await fetch(
      `${supabaseUrl}/rest/v1/messages?room=eq.global&select=id,user_id,username,content,created_at&order=created_at.asc&limit=60`,
      {
        headers: {
          apikey: publishableKey,
          Authorization: `Bearer ${publishableKey}`,
          "Content-Type": "application/json",
        },
      },
    );

    if (!supabaseResponse.ok) {
      const detail = await supabaseResponse.text();
      return sendJson(response, { error: "No pude cargar el chat global.", detail }, supabaseResponse.status);
    }

    const rows = await supabaseResponse.json();
    return sendJson(response, { messages: (rows || []).map(normalizeMessage) });
  } catch (error) {
    console.error(error);
    return sendJson(response, { error: "No pude cargar el chat global." }, 500);
  }
}
