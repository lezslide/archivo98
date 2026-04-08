function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}

function makeCodeValue() {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "RX-";
  for (let index = 0; index < 8; index += 1) {
    code += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  return code;
}

async function supabaseRequest(path, { method = "GET", body, serviceRoleKey, supabaseUrl } = {}) {
  const response = await fetch(`${supabaseUrl}/rest/v1/${path}`, {
    method,
    headers: {
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || `Supabase request failed: ${response.status}`);
  }

  if (response.status === 204) return null;
  return response.json();
}

async function findExistingDelivery({ campaignKey, igUserId, serviceRoleKey, supabaseUrl }) {
  const query = [
    "instagram_comment_codes",
    `?ig_user_id=eq.${encodeURIComponent(igUserId)}`,
    `&campaign_key=eq.${encodeURIComponent(campaignKey)}`,
    "&select=id,ig_user_id,ig_username,campaign_key,promo_code_id,code:promo_codes(code,credits_amount)",
    "&limit=1",
  ].join("");

  const rows = await supabaseRequest(query, { serviceRoleKey, supabaseUrl });
  return rows?.[0] || null;
}

async function insertPromoCode({ campaignKey, creditsAmount, igUserId, serviceRoleKey, supabaseUrl }) {
  for (let attempt = 0; attempt < 5; attempt += 1) {
    const payload = {
      code: makeCodeValue(),
      credits_amount: creditsAmount,
      source: `manychat_link_${campaignKey}_${igUserId}`,
    };

    try {
      const rows = await supabaseRequest("promo_codes", {
        method: "POST",
        body: payload,
        serviceRoleKey,
        supabaseUrl,
      });
      return rows?.[0] || null;
    } catch (error) {
      if (!String(error.message || "").includes("duplicate key")) throw error;
    }
  }

  throw new Error("No pude generar un codigo unico luego de varios intentos.");
}

async function insertDelivery({ campaignKey, igUserId, igUsername, promoCodeId, serviceRoleKey, supabaseUrl }) {
  const rows = await supabaseRequest("instagram_comment_codes", {
    method: "POST",
    body: {
      ig_user_id: igUserId,
      ig_username: igUsername || "",
      campaign_key: campaignKey,
      promo_code_id: promoCodeId,
    },
    serviceRoleKey,
    supabaseUrl,
  });

  return rows?.[0] || null;
}

export default async function handler(request) {
  if (request.method !== "POST") {
    return json({ error: "Method not allowed" }, 405);
  }

  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";
  const supabaseUrl = process.env.SUPABASE_URL || "";

  if (!serviceRoleKey || !supabaseUrl) {
    return json({ error: "Missing server environment variables" }, 500);
  }

  try {
    const payload = await request.json();
    const igUserId = String(payload.ig_user_id || payload.user_id || "").trim();
    const igUsername = String(payload.ig_username || payload.username || "").trim();
    const campaignKey = String(payload.campaign_key || "recarga-creditos").trim().toLowerCase();
    const creditsAmount = Math.max(1, Number(payload.credits_amount || 10));

    if (!igUserId) {
      return json({ error: "Missing ig_user_id" }, 400);
    }

    const existing = await findExistingDelivery({
      campaignKey,
      igUserId,
      serviceRoleKey,
      supabaseUrl,
    });

    if (existing?.code?.code) {
      return json({
        ok: true,
        code: existing.code.code,
        credits_amount: existing.code.credits_amount || creditsAmount,
        is_existing: true,
        campaign_key: campaignKey,
        ig_username: igUsername,
        message: `Tu codigo de user98 es ${existing.code.code}`,
      });
    }

    const promoCode = await insertPromoCode({
      campaignKey,
      creditsAmount,
      igUserId,
      serviceRoleKey,
      supabaseUrl,
    });

    if (!promoCode?.id || !promoCode?.code) {
      throw new Error("No pude crear el promo code.");
    }

    await insertDelivery({
      campaignKey,
      igUserId,
      igUsername,
      promoCodeId: promoCode.id,
      serviceRoleKey,
      supabaseUrl,
    });

    return json({
      ok: true,
      code: promoCode.code,
      credits_amount: promoCode.credits_amount || creditsAmount,
      is_existing: false,
      campaign_key: campaignKey,
      ig_username: igUsername,
      message: `Tu codigo de user98 es ${promoCode.code}`,
    });
  } catch (error) {
    return json({
      error: "ManyChat link code generation failed",
      detail: String(error.message || error),
    }, 500);
  }
}
