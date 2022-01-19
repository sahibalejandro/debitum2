<template>
  <div>
    Total payments: {{payments.length}}
  </div>
</template>

<script>
export default {
  props: ['payments'],
};
</script>
