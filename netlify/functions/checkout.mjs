const apiBase = process.env.CHECKOUT_API_BASE;

export default async (request) => {
  if (request.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: {
        Allow: "POST",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  }

  if (!apiBase) {
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: "Missing CHECKOUT_API_BASE server environment variable.",
      }),
    };
  }

  try {
    const upstream = await fetch(`${apiBase}/api/checkout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: request.body,
    });

    const text = await upstream.text();

    return {
      statusCode: upstream.status,
      headers: {
        "Content-Type":
          upstream.headers.get("content-type") ?? "application/json",
      },
      body: text,
    };
  } catch (error) {
    return {
      statusCode: 502,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: "Checkout upstream is unavailable.",
        detail: error instanceof Error ? error.message : String(error),
      }),
    };
  }
};
