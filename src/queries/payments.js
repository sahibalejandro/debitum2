export async function fetchQuickView() {
  const response = await fetch('/api/payments/quick-view');
  return await response.json();
}

export async function fetchPayments() {
  const response = await fetch('/api/payments');
  return await response.json();
}
