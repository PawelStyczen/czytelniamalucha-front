const apiBase = process.env.CHECKOUT_API_BASE;
const allowedRedirectHosts = (process.env.CHECKOUT_ALLOWED_REDIRECT_HOSTS ??
  "secure.payu.com,secure.snd.payu.com")
  .split(",")
  .map((host) => host.trim().toLowerCase())
  .filter(Boolean);

const jsonHeaders = {
  "Content-Type": "application/json",
  "Cache-Control": "no-store",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const productIdPattern = /^[a-z0-9][a-z0-9-_]{0,63}$/i;

function response(statusCode, body, extraHeaders = {}) {
  return {
    statusCode,
    headers: {
      ...jsonHeaders,
      ...extraHeaders,
    },
    body: JSON.stringify(body),
  };
}

function normalizeApiBase(value) {
  const url = new URL(value);
  return url.toString().replace(/\/$/, "");
}

function parsePayload(rawBody) {
  if (!rawBody) return null;

  try {
    return JSON.parse(rawBody);
  } catch {
    return null;
  }
}

function validatePayload(payload) {
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return "Nieprawidlowe dane zamowienia.";
  }

  const email =
    typeof payload.email === "string" ? payload.email.trim().toLowerCase() : "";
  const productId =
    typeof payload.productId === "string" ? payload.productId.trim() : "";

  if (!email || email.length > 254 || !emailPattern.test(email)) {
    return "Podaj poprawny adres e-mail.";
  }

  if (!productId || !productIdPattern.test(productId)) {
    return "Nieprawidlowy identyfikator produktu.";
  }

  return { email, productId };
}

function sanitizeCheckoutResponse(data) {
  if (!data || typeof data !== "object" || Array.isArray(data)) return null;
  if (typeof data.redirectUri !== "string") return null;

  let redirectUrl;
  try {
    redirectUrl = new URL(data.redirectUri);
  } catch {
    return null;
  }

  const host = redirectUrl.host.toLowerCase();
  const isAllowedHost = allowedRedirectHosts.includes(host);
  const isLocalhost =
    redirectUrl.protocol === "http:" &&
    (host === "localhost" ||
      host.startsWith("localhost:") ||
      host === "127.0.0.1" ||
      host.startsWith("127.0.0.1:"));

  if (!isAllowedHost && !isLocalhost) return null;

  const sanitized = {
    redirectUri: redirectUrl.toString(),
  };

  if (typeof data.sessionId === "string" && data.sessionId.length <= 200) {
    sanitized.sessionId = data.sessionId;
  }

  if (typeof data.payuOrderId === "string" && data.payuOrderId.length <= 200) {
    sanitized.payuOrderId = data.payuOrderId;
  }

  return sanitized;
}

export default async (request) => {
  if (request.httpMethod !== "POST") {
    return response(405, { message: "Method Not Allowed" }, { Allow: "POST" });
  }

  if (!apiBase) {
    return response(500, {
      message: "Checkout jest chwilowo niedostepny. Sprobuj ponownie pozniej.",
    });
  }

  const payload = parsePayload(request.body);
  if (payload === null) {
    return response(400, {
      message: "Nieprawidlowy format danych.",
    });
  }

  const validatedPayload = validatePayload(payload);
  if (typeof validatedPayload === "string") {
    return response(400, {
      message: validatedPayload,
    });
  }

  try {
    const upstreamUrl = new URL("/api/checkout", normalizeApiBase(apiBase));
    const upstream = await fetch(upstreamUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(validatedPayload),
    });

    if (!upstream.ok) {
      return response(upstream.status >= 500 ? 502 : 400, {
        message:
          "Nie udalo sie rozpoczac platnosci. Sprawdz dane i sprobuj ponownie.",
      });
    }

    const upstreamData = await upstream.json().catch(() => null);
    const sanitizedResponse = sanitizeCheckoutResponse(upstreamData);

    if (!sanitizedResponse) {
      return response(502, {
        message: "Otrzymalismy nieprawidlowy adres platnosci.",
      });
    }

    return response(200, sanitizedResponse);
  } catch (error) {
    console.error("Checkout proxy error", error);
    return response(502, {
      message: "Checkout jest chwilowo niedostepny. Sprobuj ponownie pozniej.",
    });
  }
};
