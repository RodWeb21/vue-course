<script setup>
let myCondition = true;
</script>

<template>
  <!-- <h1 :class="myCondition ? 'hightlight' : 'red'">Hello World</h1> -->
  <h1 :class="{hightlight: myCondition, red: true}">Hello World</h1>
</template>

<style scoped>
.hightlight {
  background-color: black;
  color: yellow;
}

.red {
  color: red;
}
</style>