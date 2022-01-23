<template>
  <div v-if="isSuccess">
    <div v-for="payment in data.payments" :key="payment._id">
      {{payment.title}} - <Currency :number="payment.amount" />
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

const { isSuccess, data } = useQuery('payments', fetchPayments);

function editPayment(payment) {
  store.setPayment(payment);
  store.togglePaymentModal();
}
</script>
