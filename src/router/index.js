// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/components/NavigationMenu"),
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("@/views/HomePage"),
        // meta:{title:"home页"}
      },
      {
        path: "/onePage",
        name: "onePage",
        component: () => import("@/views/OnePage"),
        // meta:{title:"home页"}
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
