import assert from "node:assert/strict";
import test from "node:test";

process.env.API_BASE_URL = "https://api.example.test";

const { default: checkout } = await import(
  "../netlify/functions/checkout.mjs?checkout-function-test"
);

test("returns a standards-based Response for unsupported methods", async () => {
  const result = await checkout(new Request("https://site.example/api/checkout"));

  assert.ok(result instanceof Response);
  assert.equal(result.status, 405);
  assert.equal(result.headers.get("Allow"), "POST");
  assert.deepEqual(await result.json(), { message: "Method Not Allowed" });
});

test("returns 400 for malformed JSON", async () => {
  const request = new Request("https://site.example/api/checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: "{",
  });

  const result = await checkout(request);

  assert.ok(result instanceof Response);
  assert.equal(result.status, 400);
  assert.deepEqual(await result.json(), {
    message: "Nieprawidlowy format danych.",
  });
});

test("proxies a valid checkout and returns a sanitized Response", async () => {
  const originalFetch = globalThis.fetch;
  let upstreamRequest;

  globalThis.fetch = async (url, init) => {
    upstreamRequest = { url: url.toString(), init };
    return Response.json({
      redirectUri: "https://secure.payu.com/order/example",
      sessionId: "session-123",
      payuOrderId: "payu-123",
      ignored: "secret",
    });
  };

  try {
    const request = new Request("https://site.example/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: " Buyer@Example.com ",
        productId: "product-1",
      }),
    });

    const result = await checkout(request);

    assert.ok(result instanceof Response);
    assert.equal(result.status, 200);
    assert.deepEqual(await result.json(), {
      redirectUri: "https://secure.payu.com/order/example",
      sessionId: "session-123",
      payuOrderId: "payu-123",
    });
    assert.equal(upstreamRequest.url, "https://api.example.test/api/checkout");
    assert.deepEqual(JSON.parse(upstreamRequest.init.body), {
      email: "buyer@example.com",
      productId: "product-1",
    });
  } finally {
    globalThis.fetch = originalFetch;
  }
});
