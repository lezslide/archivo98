function sendJson(response, body, status = 200) {
  response.status(status).setHeader("Cache-Control", "no-store");
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.send(JSON.stringify(body));
}

function readJsonBody(request) {
  if (!request.body) return {};
  if (typeof request.body === "string") {
    try {
      return JSON.parse(request.body);
    } catch {
      return {};
    }
  }
  return request.body;
}

const DEFAULT_BOTS = [
  "emo.culture", "under.darkk", "velvet.error", "r0pa.negra", "sadclub.uy", "afterglow.ba",
  "feria.ghost", "playlist.rota", "glitch.monte", "cyber.feria", "kiosk.angel", "rare.talle",
  "blacktag", "bolsa.negra", "neo.barrio", "trash.luxe", "club.ansiedad", "campera.vieja",
  "flash.crudo", "sombra.market", "under.tienda", "microdrop",
];

function normalizeMessages(value) {
  return Array.isArray(value)
    ? value
      .map((item) => ({
        username: String(item?.username || "").slice(0, 40),
        text: String(item?.text || "").slice(0, 320),
      }))
      .filter((item) => item.username && item.text)
      .slice(-12)
    : [];
}

function extractJson(text) {
  const raw = String(text || "").trim();
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    const match = raw.match(/\[[\s\S]*\]/);
    if (!match) return null;
    try {
      return JSON.parse(match[0]);
    } catch {
      return null;
    }
  }
}

function sanitizeBotMessages(value, allowedBots) {
  const allowed = new Set(allowedBots);
  if (!Array.isArray(value)) return [];
  return value
    .map((item) => ({
      username: String(item?.username || "").trim(),
      text: String(item?.text || "").replace(/\s+/g, " ").trim(),
    }))
    .filter((item) => allowed.has(item.username) && item.text.length >= 3)
    .map((item) => ({
      username: item.username,
      text: item.text.slice(0, 220),
    }))
    .slice(0, 6);
}

export default async function handler(request, response) {
  if (request.method !== "POST") {
    return sendJson(response, { error: "Method not allowed" }, 405);
  }

  const apiKey = process.env.GEMINI_API_KEY || "";
  if (!apiKey) {
    return sendJson(response, { error: "Missing GEMINI_API_KEY" }, 500);
  }

  const body = readJsonBody(request);
  const allowedBots = Array.isArray(body.bots) && body.bots.length
    ? body.bots.map((bot) => String(bot).trim()).filter(Boolean).slice(0, 120)
    : DEFAULT_BOTS;
  const recentMessages = normalizeMessages(body.recentMessages);
  const userMessage = String(body.userMessage || "").slice(0, 280);
  const mode = userMessage ? "reply-to-user" : "ambient-thread";
  const modelCandidates = [
    process.env.GEMINI_MODEL || "",
    "gemini-2.5-flash",
    "gemini-2.0-flash",
    "gemini-1.5-flash",
  ].filter(Boolean);
  const count = userMessage
    ? 1 + Math.floor(Math.random() * 3)
    : 2 + Math.floor(Math.random() * 4);

  const systemPrompt = [
    "Sos el motor de una comunidad ficticia under/emo/ropa/musica para Archivo98.",
    "Genera mensajes cortos de chat entre usuarios ficticios, con usernames permitidos.",
    "Tono: fotolog/metroflog 2000s, rioplatense, medio emo, desprolijo, casual; no sonar a marketing ni coach.",
    "Que parezca chat humano viejo: mezcla mensajes de 1 palabra, simbolos raros, caritas, faltas de ortografia, frases cortadas y cambios de tema.",
    "No uses la misma longitud ni la misma estructura dos veces seguidas.",
    "Permitido y deseado: 'holaa', 'xD', '*.*', '^^', ':P', 'q', 'd', 'tmb', 're', 'nse', errores leves y minusculas.",
    "Algunos mensajes deben ser solo 'holaa', 'jaja', 'mal', 'q onda', '^^' o similar.",
    "Evita sonar a IA: no cierres cada idea prolija, no expliques demasiado, no hagas listas, no uses puntuacion perfecta.",
    "Temas posibles: ropa, looks, feria, noche, musica under, salidas, fotos, drops, ansiedad, referencias culturales.",
    "Pueden mencionar artistas reales como referencia cultural, pero nunca hacerse pasar por ellos.",
    "No uses insultos fuertes, datos privados, sexualizacion, odio ni promesas comerciales.",
    "Manten un hilo legible: que un mensaje responda al anterior.",
    "Devolve SOLO JSON valido: array de objetos {\"username\":\"...\",\"text\":\"...\"}.",
  ].join("\n");

  const prompt = {
    mode,
    allowedUsernames: allowedBots,
    recentMessages,
    userMessage,
    count,
  };

  try {
    let lastError = "";
    for (const model of modelCandidates) {
      const geminiResponse = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(apiKey)}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                role: "user",
                parts: [
                  { text: `${systemPrompt}\n\nContexto:\n${JSON.stringify(prompt)}` },
                ],
              },
            ],
            generationConfig: {
              temperature: 0.95,
              maxOutputTokens: 900,
              responseMimeType: "application/json",
            },
          }),
        }
      );

      const data = await geminiResponse.json();
      if (!geminiResponse.ok) {
        lastError = data?.error?.message || `Gemini error ${geminiResponse.status}`;
        continue;
      }

      const text = data?.candidates?.[0]?.content?.parts?.map((part) => part.text || "").join("") || "";
      const messages = sanitizeBotMessages(extractJson(text), allowedBots);
      return sendJson(response, { messages, model });
    }
    return sendJson(response, { error: lastError || "Gemini request failed" }, 502);
  } catch (error) {
    return sendJson(response, { error: error.message || "Gemini request failed" }, 500);
  }
}
