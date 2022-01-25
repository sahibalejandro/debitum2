<script setup>
import store from './store';
import { useQuery } from 'vue-query';

import NavBar from './components/NavBar.vue';
import QuickView from './components/QuickView.vue';
import PaymentsList from './components/PaymentsList.vue';
import PaymentModal from './components/PaymentModal.vue';

import { fetchPayments } from './queries/payments.js';

store.setPaymentsQuery(useQuery('payments', fetchPayments));
</script>

<template>
  <NavBar />
  <QuickView />
  <PaymentsList />
  <PaymentModal />
</template>
