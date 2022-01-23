import axios from 'axios';

export async function fetchQuickView() {
  const response = await axios.get('/api/payments/quick-view');
  return response.data;
}

export async function fetchPayments() {
  const response = await axios.get('/api/payments');
  return response.data;
}

export async function savePayment(payment) {
  let url = '/api/payments';

  if (payment._id !== undefined) {
    url += `/${payment._id}`;
  }

  const response = await axios.post(url, payment);
  return response.data;
}
