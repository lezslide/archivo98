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

function parseKeywordRules(rawValue) {
  if (!rawValue) {
    return [
      {
        keyword: "precio",
        reply: "Gracias por comentar. Te mando la info por privado ahora mismo.",
      },
      {
        keyword: "info",
        reply: "Gracias por escribir. Te respondo por privado con mas detalles.",
      },
      {
        keyword: "link",
        reply: "Gracias. Te mando el link por privado.",
      },
    ];
  }

  try {
    const parsed = JSON.parse(rawValue);
    if (!Array.isArray(parsed)) return [];

    return parsed
      .map((rule) => ({
        keyword: String(rule?.keyword || "").trim().toLowerCase(),
        reply: String(rule?.reply || "").trim(),
      }))
      .filter((rule) => rule.keyword && rule.reply);
  } catch {
    return [];
  }
}

function getInstagramConfig() {
  const graphVersion = process.env.INSTAGRAM_GRAPH_VERSION || "v24.0";
  const graphBaseUrl = process.env.INSTAGRAM_GRAPH_BASE_URL || "https://graph.facebook.com";
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN || "";
  const appSecret = process.env.INSTAGRAM_APP_SECRET || "";
  const verifyToken = process.env.INSTAGRAM_VERIFY_TOKEN || "";
  const accountId = process.env.INSTAGRAM_ACCOUNT_ID || "";
  const rules = parseKeywordRules(process.env.INSTAGRAM_KEYWORD_RULES || "");

  return {
    graphVersion,
    graphBaseUrl,
    accessToken,
    appSecret,
    verifyToken,
    accountId,
    rules,
  };
}

async function instagramRequest(path, { method = "GET", body, query } = {}, config = getInstagramConfig()) {
  const normalizedPath = String(path || "").replace(/^\/+/, "");
  const url = new URL(`${config.graphBaseUrl}/${config.graphVersion}/${normalizedPath}`);

  if (query) {
    for (const [key, value] of Object.entries(query)) {
      if (value !== undefined && value !== null && value !== "") {
        url.searchParams.set(key, String(value));
      }
    }
  }

  if (config.accessToken) {
    url.searchParams.set("access_token", config.accessToken);
  }

  const response = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  const text = await response.text();
  let data = null;

  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = { raw: text };
  }

  if (!response.ok) {
    const detail = data?.error?.message || data?.raw || `Instagram request failed with ${response.status}`;
    throw new Error(detail);
  }

  return data;
}

function findMatchingRule(text, rules) {
  const normalized = String(text || "").toLowerCase();

  for (const rule of rules) {
    if (normalized.includes(rule.keyword)) {
      return rule;
    }
  }

  return null;
}

const recentCommentIds = new Map();

function rememberComment(commentId) {
  if (!commentId) return false;

  const now = Date.now();
  const ttlMs = 10 * 60 * 1000;

  for (const [savedId, savedAt] of recentCommentIds.entries()) {
    if (now - savedAt > ttlMs) {
      recentCommentIds.delete(savedId);
    }
  }

  if (recentCommentIds.has(commentId)) {
    return true;
  }

  recentCommentIds.set(commentId, now);
  return false;
}

export {
  findMatchingRule,
  getInstagramConfig,
  instagramRequest,
  readJsonBody,
  rememberComment,
  sendJson,
};
