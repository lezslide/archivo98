function sendJson(response, body, status = 200) {
  response.status(status).setHeader("Cache-Control", "no-store");
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.send(JSON.stringify(body));
}

export default function handler(request, response) {
  if (request.method !== "GET") {
    return sendJson(response, { error: "Method not allowed" }, 405);
  }

  const supabaseUrl = process.env.SUPABASE_URL || "";
  const anonKey = process.env.SUPABASE_ANON_KEY || process.env.SUPABASE_PUBLISHABLE_KEY || "";

  if (!supabaseUrl || !anonKey) {
    return sendJson(response, { error: "Falta SUPABASE_URL o SUPABASE_ANON_KEY en Vercel." }, 500);
  }

  return sendJson(response, { supabaseUrl, anonKey });
}
