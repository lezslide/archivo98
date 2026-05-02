import { getInstagramConfig, readJsonBody, instagramRequest, sendJson } from "./_instagram.js";

export default async function handler(request, response) {
  if (request.method !== "POST") {
    return sendJson(response, { error: "Method not allowed" }, 405);
  }

  const config = getInstagramConfig();
  if (!config.accessToken) {
    return sendJson(response, { error: "Missing INSTAGRAM_ACCESS_TOKEN" }, 500);
  }

  const body = readJsonBody(request);
  const commentId = String(body.comment_id || "").trim();
  const message = String(body.message || "").trim();

  if (!commentId || !message) {
    return sendJson(response, { error: "comment_id and message are required" }, 400);
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
      reply,
    });
  } catch (error) {
    return sendJson(
      response,
      {
        ok: false,
        error: "Private reply failed",
        detail: String(error.message || error),
      },
      500,
    );
  }
}
