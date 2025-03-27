import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Movies from "../pages/Movies.vue";
import CreateMovie from "../pages/CreateMovie.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/movies",
      name: "movies",
      component: Movies
    },
    {
      path: "/create",
      name: "create",
      component: CreateMovie
    }
  ]
});

export default router;