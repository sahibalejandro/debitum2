<template>
  ${{number[0]}}.<small>{{number[1]}}</small>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({ number: Number });
const number = computed(() => (props.number / 100).toFixed(2).toString().split('.'));
</script>
