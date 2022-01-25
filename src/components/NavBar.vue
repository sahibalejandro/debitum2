<template>
  <div>
    <button type="button" @click="openNewPaymentModal">Add Payment</button>
  </div>
</template>

<script setup>
import store from '../store';

function openNewPaymentModal() {
  store.unsetPaymentToEdit();
  store.togglePaymentModal();
}
</script>
