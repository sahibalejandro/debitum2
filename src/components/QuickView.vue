<template>
  <div>
    Payments for this month: {{payments.length}}
  </div>
</template>

<script>
export default {
  props: ['payments'],
};
</script>
