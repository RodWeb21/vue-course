<script setup>
</script>

<template>
  <div class="child">
    <h2>Este es un componente hijo</h2>

    <slot>
      <h4>Contendio por defecto por si desde el componente padre no se envía nada</h4>
    </slot>
  </div>
</template>

<style scoped>
.child {
  border: 5px solid black;
  margin: 10px;
  padding: 10px;
}
</style>