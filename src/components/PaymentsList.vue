<template>
  <div v-if="paymentsQuery.isSuccess">
    <div v-for="payment in paymentsQuery.data.payments" :key="payment._id">
      <Currency :number="payment.amount" />
      <button type="button" @click="editPayment(payment)">Edit</button>
    </div>
  </div>
  <div v-else>
    Skeleton
  </div>
</template>

<script setup>
import store from '../store';
import { reactive } from 'vue';
import { useQuery } from 'vue-query';
import Currency from './Currency.vue';
import { fetchPayments } from '../queries/payments.js';

const paymentsQuery = reactive(useQuery('payments', fetchPayments));

function editPayment(payment) {
  store.setPayment(payment);
  store.togglePaymentModal();
}
</script>
