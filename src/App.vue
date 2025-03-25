<script setup>
import { ref } from 'vue';

const myId = "patata";

const myValue = ref("some value");
</script>

<template>
  <h1 :id="myId">Hello World</h1>

  <input type="text" :value="myValue">
</template>

<style scoped></style>