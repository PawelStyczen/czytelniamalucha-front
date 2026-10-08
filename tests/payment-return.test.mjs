import assert from "node:assert/strict";
import test from "node:test";

import { hasPaymentFailure } from "../src/lib/paymentReturn.mjs";

test("does not mark an empty or successful PayU return as failed", () => {
  assert.equal(hasPaymentFailure(""), false);
  assert.equal(hasPaymentFailure("?statusCode=SUCCESS"), false);
});

test("recognizes PayU error and failure return parameters", () => {
  assert.equal(hasPaymentFailure("?error=payment_rejected"), true);
  assert.equal(hasPaymentFailure("?status=FAILED"), true);
  assert.equal(hasPaymentFailure("?result=cancelled"), true);
  assert.equal(hasPaymentFailure("?Failure=1"), true);
});
