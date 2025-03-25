<script setup>
import { ref } from 'vue';

const myValue = ref("some value");
</script>

<template>
  <h1>{{ myValue }}</h1>
  <input type="text" v-model="myValue">
</template>

<style scoped></style>