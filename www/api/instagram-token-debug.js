import { getInstagramConfig, sendJson } from "./_instagram.js";

async function debugAccessToken(inputToken, appId, appSecret) {
  if (!inputToken || !appId || !appSecret) {
    return {
      ok: false,
      available: false,
      reason: "Missing app credentials for debug_token",
      missing: [
        !appId ? "INSTAGRAM_APP_ID or META_APP_ID" : null,
        !appSecret ? "INSTAGRAM_APP_SECRET" : null,
      ].filter(Boolean),
    };
  }

  const appAccessToken = `${appId}|${appSecret}`;
  const url = new URL("https://graph.facebook.com/debug_token");
  url.searchParams.set("input_token", inputToken);
  url.searchParams.set("access_token", appAccessToken);

  const response = await fetch(url);
  const text = await response.text();

  let data = null;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = { raw: text };
  }

  if (!response.ok) {
    return {
      ok: false,
      available: true,
      status: response.status,
      detail: data?.error?.message || data?.raw || "debug_token failed",
    };
  }

  return {
    ok: true,
    available: true,
    data: data?.data || null,
  };
}

export default async function handler(request, response) {
  if (request.method !== "GET") {
    return sendJson(response, { error: "Method not allowed" }, 405);
  }

  const config = getInstagramConfig();
  const appId = process.env.INSTAGRAM_APP_ID || process.env.META_APP_ID || "";
  const appSecret = process.env.INSTAGRAM_APP_SECRET || "";

  const tokenDebug = await debugAccessToken(config.accessToken, appId, appSecret);

  return sendJson(response, {
    ok: true,
    graph_base_url: config.graphBaseUrl,
    graph_version: config.graphVersion,
    account_id: config.accountId || null,
    rules_loaded: config.rules.length,
    token_diagnostic: config.accessToken
      ? {
          prefix: config.accessToken.slice(0, 8),
          suffix: config.accessToken.slice(-6),
          length: config.accessToken.length,
        }
      : null,
    app_credentials_present: {
      app_id: Boolean(appId),
      app_secret: Boolean(appSecret),
    },
    debug_token: tokenDebug,
  });
}
