import { createRouter, createWebHashHistory } from "vue-router";
import Options from "../views/Options.vue";

const routes = [
  {
    path: "/",
    name: "Options",
    component: Options,
  },
  {
    path: "/composition",
    name: "Composition",
    component: () => import(/* webpackChunkName: "composition" */ "../views/Composition.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
