<script>
import NavBar from './components/NavBar.vue';
import QuickView from './components/QuickView.vue';
import PaymentsList from './components/PaymentsList.vue';

export default {
  components: {NavBar, QuickView, PaymentsList},

  data() {
    return { payments: [] };
  },

  created() {
    // load payments from API
  },
};
</script>

<template>
  <NavBar />
  <QuickView :payments="payments" />
  <PaymentsList :payments="payments" />
</template>

<style>
</style>
