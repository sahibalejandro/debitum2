import { reactive } from 'vue';

const store = {
  state: reactive({
    payment: {
      amount: 0,
    },
    paymentModalOpen: false,
  }),

  setPayment(payment) {
    this.state.payment = payment;
  },

  togglePaymentModal() {
    this.state.paymentModalOpen = !this.state.paymentModalOpen;
  }
};

export default store;
