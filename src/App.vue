<script setup>
import { ref } from 'vue';

  let number = ref(0);

  setInterval(() => {
    number.value++;
  }, 1000);
</script>

<template>
  <h1>Hello World</h1>
  <h2>{{ number }}</h2>
</template>

<style scoped></style>