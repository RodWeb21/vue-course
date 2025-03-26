<script setup>
const movies = ["Lord of the Rings", "Star Wars", "Dune"];

const animals = [
  {
    id: 1,
    name: "dog",
    img: "https://nypost.com/wp-content/uploads/sites/2/2022/12/worlds-cutest-dog-comp-1.jpg",
  },
  {
    id: 2,
    name: "cat",
    img: "https://img.freepik.com/foto-gratis/lindo-gatito-domestico-sienta-ventana-mirando-fuera-ia-generativa_188544-12519.jpg",
  },
  {
    id: 3,
    name: "bird",
    img: "https://media.cnn.com/api/v1/images/stellar/prod/190414090035-01-cassowary.jpg",
  },
];
</script>

<template>
  <h1>Renderizado de listas | v-for</h1>
  <div>
    <p v-for="(movie, index) in movies" :key="movie">
      {{ index + 1 }} - {{ movie }}
    </p>
  </div>

  <ul>
    <li v-for="animal in animals" :key="animal.id">
      {{ animal.name }}
      <img :src="animal.img" alt="" width="200">
    </li>
  </ul>
</template>

<style scoped></style>