<script setup>
import { ref } from 'vue';

const number = ref(0);

const addOne = () => {
  number.value++;
};
</script>

<template>
  <h1>Hello World</h1>
  <h2 @click="addOne">{{ number }}</h2>
</template>

<style scoped></style>