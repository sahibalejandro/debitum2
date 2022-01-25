import { reactive } from 'vue';

const defaultPaymentData = {
  title: 'New payment',
  amount: 100,
};

const store = {
  state: reactive({
    payment: {...defaultPaymentData},
    paymentModalOpen: false,
    paymentsQuery: {},
  }),

  setPaymentsQuery(paymentsQuery) {
    this.state.paymentsQuery = paymentsQuery;
  },

  setPaymentToEdit(payment) {
    this.state.payment = payment;
  },

  unsetPaymentToEdit() {
    this.state.payment = {...defaultPaymentData};
  },

  togglePaymentModal() {
    this.state.paymentModalOpen = !this.state.paymentModalOpen;
  }
};

export default store;
