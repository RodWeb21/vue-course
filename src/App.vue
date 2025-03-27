<script setup>
import { ref } from 'vue';
import ChildComponent from './components/ChildComponent.vue';

const displayName = ref("");

const setName = (e) => {
  displayName.value = e;
};
</script>

<template>
  <h1>Component events | Comunicación hijo-Padre</h1>

  <h2>Hola {{ displayName }}</h2>
  
  <ChildComponent @login="setName"></ChildComponent>
</template>

<style scoped></style>