<script setup>
import ChildComponent from './components/ChildComponent.vue';
</script>

<template>
  <h1>slots</h1>

  <h2>Este es el componente  padre</h2>
  
  <ChildComponent>
    <h3>Contenido desde el componente padre como slot</h3>

  </ChildComponent>
  
  <ChildComponent>
    <p>Lorem ipsum dolor sit amet.</p>
    <p>Lorem, ipsum dolor.</p>
  </ChildComponent>

  <ChildComponent></ChildComponent>
</template>

<style scoped></style>