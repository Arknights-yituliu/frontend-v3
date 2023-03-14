// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "root",
    component: () => import("@/views/HomePage"),
    // meta:{title:"home页"}
  },
  {
    path: "/stages",
    name: "bestStages",
    component: () => import("@/views/BestStages"),
    // meta:{title:"home页"}
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
