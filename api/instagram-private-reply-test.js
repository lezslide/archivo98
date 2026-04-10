import { getInstagramConfig, instagramRequest, readJsonBody, sendJson } from "./_instagram.js";

export default async function handler(request, response) {
  if (request.method !== "POST") {
    return sendJson(response, { error: "Method not allowed" }, 405);
  }

  const config = getInstagramConfig();
  const body = readJsonBody(request);
  const commentId = String(body.comment_id || "").trim();
  const message = String(body.message || "").trim();

  if (!config.accessToken) {
    return sendJson(response, { ok: false, error: "Missing INSTAGRAM_ACCESS_TOKEN" }, 500);
  }

  if (!commentId || !message) {
    return sendJson(
      response,
      {
        ok: false,
        error: "comment_id and message are required",
      },
      400,
    );
  }

  try {
    const reply = await instagramRequest(
      `${commentId}/private_replies`,
      {
        method: "POST",
        body: { message },
      },
      config,
    );

    return sendJson(response, {
      ok: true,
      graph_base_url: config.graphBaseUrl,
      graph_version: config.graphVersion,
      comment_id: commentId,
      reply,
    });
  } catch (error) {
    return sendJson(
      response,
      {
        ok: false,
        graph_base_url: config.graphBaseUrl,
        graph_version: config.graphVersion,
        comment_id: commentId,
        error: "Private reply test failed",
        detail: String(error.message || error),
      },
      500,
    );
  }
}
