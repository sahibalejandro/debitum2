export async function fetchQuickView() {
  const response = await fetch('/api/payments/quick-view');
  return await response.json();
}
