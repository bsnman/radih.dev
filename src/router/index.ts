import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: () => import("../pages/Home.vue") },
    {
      path: "/projects",
      name: "Projects",
      component: () => import("../pages/Projects.vue"),
    },
    {
      path: "/experience",
      name: "Experience",
      component: () => import("../pages/Experience.vue"),
    },
    {
      path: "/resume",
      name: "Resume",
      component: () => import("../pages/Resume.vue"),
    },
    {
      path: "/contact",
      name: "Contact",
      component: () => import("../pages/Contact.vue"),
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
