import {
  findMatchingRule,
  getInstagramConfig,
  instagramRequest,
  rememberComment,
  sendJson,
} from "./_instagram.js";

function collectChanges(body) {
  const directField = String(body?.field || "").trim();
  if (directField) {
    return [
      {
        field: directField,
        value: body?.value || {},
      },
    ];
  }

  const entries = Array.isArray(body?.entry) ? body.entry : [];
  const changes = [];

  for (const entry of entries) {
    const entryChanges = Array.isArray(entry?.changes) ? entry.changes : [];
    changes.push(...entryChanges);
  }

  return changes;
}

async function handleCommentChange(change, config) {
  const value = change?.value || {};
  const commentId = String(value.id || "").trim();
  const text = String(value.text || "").trim();

  if (!commentId || !text) {
    return { skipped: true, reason: "missing-comment-data" };
  }

  if (rememberComment(commentId)) {
    return { skipped: true, reason: "duplicate-event", comment_id: commentId };
  }

  const rule = findMatchingRule(text, config.rules);
  if (!rule) {
    return { skipped: true, reason: "no-keyword-match", comment_id: commentId };
  }

  const reply = await instagramRequest(
    `${commentId}/private_replies`,
    {
      method: "POST",
      body: { message: rule.reply },
    },
    config,
  );

  return {
    ok: true,
    comment_id: commentId,
    keyword: rule.keyword,
    reply_id: reply?.id || null,
    text,
  };
}

export default async function handler(request, response) {
  const config = getInstagramConfig();

  if (request.method === "GET") {
    const mode = request.query["hub.mode"];
    const token = request.query["hub.verify_token"];
    const challenge = request.query["hub.challenge"];

    if (mode === "subscribe" && token && token === config.verifyToken) {
      response.status(200).send(challenge);
      return;
    }

    response.status(403).send("Webhook verification failed");
    return;
  }

  if (request.method !== "POST") {
    return sendJson(response, { error: "Method not allowed" }, 405);
  }

  if (!config.accessToken) {
    return sendJson(response, { error: "Missing INSTAGRAM_ACCESS_TOKEN" }, 500);
  }

  try {
    const changes = collectChanges(request.body);
    const results = [];
    const debug = {
      object: request.body?.object || null,
      entry_count: Array.isArray(request.body?.entry) ? request.body.entry.length : 0,
      change_count: changes.length,
      direct_field: request.body?.field || null,
    };

    for (const change of changes) {
      if (change?.field !== "comments") {
        results.push({ skipped: true, reason: "unsupported-field", field: change?.field || null });
        continue;
      }

      const outcome = await handleCommentChange(change, config);
      results.push(outcome);
    }

    console.log(
      JSON.stringify({
        route: "instagram-webhook",
        ok: true,
        debug,
        processed: results,
      }),
    );

    return sendJson(response, {
      ok: true,
      debug,
      processed: results,
    });
  } catch (error) {
    return sendJson(
      response,
      {
        ok: false,
        error: "Webhook processing failed",
        detail: String(error.message || error),
        debug: {
          object: request.body?.object || null,
          entry_count: Array.isArray(request.body?.entry) ? request.body.entry.length : 0,
          direct_field: request.body?.field || null,
        },
      },
      500,
    );
  }
}
