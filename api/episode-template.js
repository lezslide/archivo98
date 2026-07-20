const ROOM_PREFIX = "episode-template";
const LEGACY_ROOM = "episode-template";
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
  const key = anonKey || serviceKey;
  return { supabaseUrl, key, serviceKey, anonKey, keys: [anonKey, serviceKey].filter(Boolean) };
}

function getBearerToken(request) {
  const header = request.headers.authorization || request.headers.Authorization || "";
  const match = String(header).match(/^Bearer\s+(.+)$/i);
  return match ? match[1].trim() : "";
}

function getEpisodeNumber(request) {
  try {
    const url = new URL(request.url || "", "https://user98.lezslide.com");
    const number = Number(url.searchParams.get("episode") || "1");
    return Number.isFinite(number) ? Math.max(1, Math.min(99, Math.round(number))) : 1;
  } catch (_error) {
    return 1;
  }
}

function getEpisodeRoom(episodeNumber) {
  return `${ROOM_PREFIX}-${episodeNumber}`;
}

async function verifyAdmin(request) {
  const accessToken = getBearerToken(request);
  if (!accessToken) return { ok: false, status: 401, body: { error: "Tenes que iniciar sesion." } };

  const { supabaseUrl, keys } = getSupabaseConfig();
  if (!supabaseUrl || !keys.length) return { ok: false, status: 500, body: { error: "Falta configurar Supabase." } };

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
      if (email !== ALLOWED_EMAIL) return { ok: false, status: 403, body: { error: "Usuario sin permiso." } };
      return { ok: true, user: body };
    }
  }
  return { ok: false, status: 401, body: { error: "Sesion invalida.", detail: lastBody } };
}

async function verifyUser(request) {
  const accessToken = getBearerToken(request);
  if (!accessToken) return { ok: false, status: 401, body: { error: "Tenes que iniciar sesion." } };

  const { supabaseUrl, keys } = getSupabaseConfig();
  if (!supabaseUrl || !keys.length) return { ok: false, status: 500, body: { error: "Falta configurar Supabase." } };

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
    if (authResponse.ok) return { ok: true, user: body, accessToken };
  }
  return { ok: false, status: 401, body: { error: "Sesion invalida.", detail: lastBody } };
}

async function supabaseRequest(path, options = {}) {
  const { accessToken, ...fetchOptions } = options;
  const { supabaseUrl, key, serviceKey } = getSupabaseConfig();
  if (!supabaseUrl || !key) return { ok: false, status: 500, body: { error: "Falta configurar Supabase." } };
  const supabaseResponse = await fetch(`${supabaseUrl}/rest/v1/${path}`, {
    ...fetchOptions,
    headers: {
      apikey: key,
      Authorization: `Bearer ${accessToken || serviceKey || key}`,
      "Content-Type": "application/json",
      Prefer: "return=representation",
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
  return { ok: supabaseResponse.ok, status: supabaseResponse.status, body };
}

function parseTemplate(row) {
  if (!row?.content) return null;
  try {
    const parsed = JSON.parse(row.content);
    return parsed?.type === "episode-template" ? parsed.template || null : null;
  } catch (_error) {
    return null;
  }
}

function isDirectByRequest(request) {
  try {
    const url = new URL(request.url || "", "https://user98.lezslide.com");
    return url.searchParams.get("directBy") === "1";
  } catch (_error) {
    return false;
  }
}

function serializeDirectByEpisode(episode, userId) {
  return {
    user_id: userId,
    title: String(episode?.titulo || episode?.title || "Sin titulo"),
    days: Array.isArray(episode?.dias) ? episode.dias.length : 1,
    hook: "",
    notes: JSON.stringify({
      episodio: Number(episode?.episodio || 1),
      tomasEpisodio: Array.isArray(episode?.tomasEpisodio) ? episode.tomasEpisodio : [],
    }),
    emotions: Array.isArray(episode?.dias) ? episode.dias : [],
    day_status: Array.isArray(episode?.dias) ? episode.dias.map((day) => (day.bloques || []).every((block) => block.estado === "Terminado")) : [],
    updated_at: new Date().toISOString(),
  };
}

function directByEpisodeNumber(row) {
  try {
    return Number(JSON.parse(row?.notes || "{}").episodio || 1);
  } catch (_error) {
    return 1;
  }
}

async function deleteDirectByEpisodeRows(rows, auth) {
  let deleted = 0;
  for (const row of rows) {
    const result = await supabaseRequest(`direct_by_episodes?id=eq.${encodeURIComponent(row.id)}&user_id=eq.${encodeURIComponent(auth.user.id)}`, {
      method: "DELETE",
      accessToken: auth.accessToken,
    });
    if (!result.ok) return { ok: false, status: result.status, body: result.body, deleted };
    deleted += 1;
  }
  return { ok: true, deleted };
}

async function handleDirectByEpisodes(request, response) {
  const auth = await verifyUser(request);
  if (!auth.ok) return sendJson(response, auth.body, auth.status);

  if (request.method === "GET") {
    const result = await supabaseRequest(`direct_by_episodes?select=*&user_id=eq.${encodeURIComponent(auth.user.id)}&order=updated_at.desc`, {
      accessToken: auth.accessToken,
    });
    if (!result.ok) return sendJson(response, { error: "No pude cargar episodios.", detail: result.body }, result.status);
    return sendJson(response, { episodes: Array.isArray(result.body) ? result.body : [] });
  }

  if (request.method === "POST") {
    const payload = typeof request.body === "string" ? JSON.parse(request.body || "{}") : request.body || {};
    const episode = payload.episode || null;
    if (!episode?.dias?.length) return sendJson(response, { error: "Falta episode.dias." }, 400);

    let replaced = 0;
    if (payload.replaceEpisode) {
      const episodeNumber = Number(episode.episodio || 1);
      const current = await supabaseRequest(`direct_by_episodes?select=id,notes&user_id=eq.${encodeURIComponent(auth.user.id)}`, {
        accessToken: auth.accessToken,
      });
      if (!current.ok) return sendJson(response, { error: "No pude buscar episodios para reemplazar.", detail: current.body }, current.status);
      const rows = (Array.isArray(current.body) ? current.body : []).filter((row) => directByEpisodeNumber(row) === episodeNumber && row.id !== episode.id);
      const deletion = await deleteDirectByEpisodeRows(rows, auth);
      if (!deletion.ok) return sendJson(response, { error: "No pude borrar episodios anteriores.", detail: deletion.body }, deletion.status);
      replaced = deletion.deleted;
      episode.remote = false;
      delete episode.id;
    }

    const dbPayload = serializeDirectByEpisode(episode, auth.user.id);
    const result = episode.remote && episode.id
      ? await supabaseRequest(`direct_by_episodes?id=eq.${encodeURIComponent(episode.id)}&user_id=eq.${encodeURIComponent(auth.user.id)}&select=*`, {
          method: "PATCH",
          accessToken: auth.accessToken,
          body: JSON.stringify(dbPayload),
        })
      : await supabaseRequest("direct_by_episodes?select=*", {
          method: "POST",
          accessToken: auth.accessToken,
          body: JSON.stringify(dbPayload),
        });

    if (!result.ok) return sendJson(response, { error: "No pude guardar episodio.", detail: result.body }, result.status);
    const row = Array.isArray(result.body) ? result.body[0] : result.body;
    return sendJson(response, { ok: true, episode: row, replaced });
  }

  return sendJson(response, { error: "Method not allowed" }, 405);
}

export default async function handler(request, response) {
  if (isDirectByRequest(request)) return handleDirectByEpisodes(request, response);

  const episodeNumber = getEpisodeNumber(request);
  const room = getEpisodeRoom(episodeNumber);

  if (request.method === "GET") {
    const result = await supabaseRequest(`messages?select=id,content,created_at&room=eq.${room}&order=created_at.desc&limit=1`);
    if (!result.ok) return sendJson(response, { template: null, error: "No pude cargar la plantilla publicada.", detail: result.body }, result.status);
    let row = Array.isArray(result.body) ? result.body[0] : null;
    if (!row && episodeNumber === 1) {
      const legacyResult = await supabaseRequest(`messages?select=id,content,created_at&room=eq.${LEGACY_ROOM}&order=created_at.desc&limit=1`);
      if (legacyResult.ok) row = Array.isArray(legacyResult.body) ? legacyResult.body[0] : null;
    }
    return sendJson(response, { episode: episodeNumber, template: parseTemplate(row), publishedAt: row?.created_at || null });
  }

  if (request.method === "POST") {
    const auth = await verifyAdmin(request);
    if (!auth.ok) return sendJson(response, auth.body, auth.status);

    const payload = typeof request.body === "string" ? JSON.parse(request.body || "{}") : request.body || {};
    if (!payload.template?.days?.length) return sendJson(response, { error: "Falta template.days." }, 400);

    const result = await supabaseRequest("messages", {
      method: "POST",
      body: JSON.stringify({
        room,
        user_id: auth.user.id,
        username: auth.user.email,
        content: JSON.stringify({
          type: "episode-template",
          episode: episodeNumber,
          template: payload.template,
          publishedAt: new Date().toISOString(),
        }),
      }),
    });
    if (!result.ok) return sendJson(response, { error: "No pude publicar la plantilla.", detail: result.body }, result.status);
    return sendJson(response, { ok: true });
  }

  return sendJson(response, { error: "Method not allowed" }, 405);
}
