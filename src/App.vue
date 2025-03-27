<script setup>
import { computed, ref, watch } from 'vue';

const userName = ref("Adrián");

const setName = () => {
  userName.value = "María";
};

watch(
  userName,
  (newValue, oldValue) => {
    console.log("User Name modified", newValue, oldValue);
  },
  {
    immediate: true
  }
);
</script>

<template>
  <h1>Watch | Vigilancia de cambios</h1>

  <h2>Hola {{ userName }}</h2>

  <button @click="setName">Cambiar de usuario</button>
</template>

<style scoped></style>