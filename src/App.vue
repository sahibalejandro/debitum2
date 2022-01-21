<script setup>
import { useQueryProvider } from 'vue-query';
import NavBar from './components/NavBar.vue';
import QuickView from './components/QuickView.vue';
useQueryProvider();
</script>

<template>
  <NavBar />
  <QuickView />
</template>
