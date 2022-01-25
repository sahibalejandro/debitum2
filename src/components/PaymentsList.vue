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
import { toRefs } from 'vue';

import store from '../store';
import Currency from './Currency.vue';

const { isSuccess, data } = toRefs(store.state.paymentsQuery);

function editPayment(payment) {
  store.setPaymentToEdit({...payment});
  store.togglePaymentModal();
}
</script>
