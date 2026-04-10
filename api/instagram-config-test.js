import { getInstagramConfig, instagramRequest, sendJson } from "./_instagram.js";

export default async function handler(request, response) {
  if (request.method !== "GET") {
    return sendJson(response, { error: "Method not allowed" }, 405);
  }

  const config = getInstagramConfig();

  if (!config.accessToken || !config.accountId) {
    return sendJson(
      response,
      {
        ok: false,
        error: "Missing environment variables",
        missing: [
          !config.accessToken ? "INSTAGRAM_ACCESS_TOKEN" : null,
          !config.accountId ? "INSTAGRAM_ACCOUNT_ID" : null,
        ].filter(Boolean),
      },
      500,
    );
  }

  try {
    const account = await instagramRequest(
      config.accountId,
      {
        query: {
          fields: "id,username,followers_count,media_count",
        },
      },
      config,
    );

    return sendJson(response, {
      ok: true,
      account,
      graph_version: config.graphVersion,
      rules_loaded: config.rules.length,
      token_diagnostic: {
        prefix: config.accessToken.slice(0, 8),
        suffix: config.accessToken.slice(-6),
        length: config.accessToken.length,
      },
    });
  } catch (error) {
    return sendJson(
      response,
      {
        ok: false,
        error: "Instagram config test failed",
        detail: String(error.message || error),
        token_diagnostic: {
          prefix: config.accessToken.slice(0, 8),
          suffix: config.accessToken.slice(-6),
          length: config.accessToken.length,
        },
      },
      500,
    );
  }
}
