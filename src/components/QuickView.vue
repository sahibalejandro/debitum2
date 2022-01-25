<template>
  <div v-if="isSuccess">
    Month total: <Currency :number="monthTotal" />
  </div>
</template>

<script setup>
import { computed, toRefs } from 'vue';

import store from '../store';
import Currency from './Currency.vue';

const { isSuccess, data } = toRefs(store.state.paymentsQuery);
const monthTotal = computed(() => data.value?.payments.reduce( (sum, p) => sum + p.amount, 0));
</script>
