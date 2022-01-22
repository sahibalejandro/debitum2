<template>
  <div v-if="quickViewQuery.isSuccess === true">
    Month total: <Currency :number="quickViewQuery.data.monthTotal" />
  </div>
  <div v-else>
    Skeleton
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useQuery } from 'vue-query';
import { fetchQuickView } from '../queries/payments.js';
import Currency from './Currency.vue';

const quickViewQuery = reactive(useQuery('quick-view', fetchQuickView));
</script>
