<script setup>
import store from './store';
import { useQueryProvider } from 'vue-query';
import NavBar from './components/NavBar.vue';
import QuickView from './components/QuickView.vue';
import PaymentsList from './components/PaymentsList.vue';
import PaymentModal from './components/PaymentModal.vue';

useQueryProvider();
</script>

<template>
  <NavBar />
  <QuickView />
  <PaymentsList />
  <PaymentModal v-if="store.state.paymentModalOpen" />
</template>
