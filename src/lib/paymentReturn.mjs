const failureMarker = /(error|failure|failed|cancel(?:led|ed)?)/i;

export function hasPaymentFailure(search) {
  const params =
    search instanceof URLSearchParams ? search : new URLSearchParams(search);

  return [...params].some(
    ([key, value]) => failureMarker.test(key) || failureMarker.test(value),
  );
}
