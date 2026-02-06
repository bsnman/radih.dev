import { createRouter, createWebHistory } from "vue-router";

export const routeImports = {
  "/": () => import("../pages/Home.vue"),
  "/projects": () => import("../pages/Projects.vue"),
  "/experience": () => import("../pages/Experience.vue"),
  "/resume": () => import("../pages/Resume.vue"),
  "/contact": () => import("../pages/Contact.vue"),
} as const;

export type RoutePath = keyof typeof routeImports;

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: routeImports["/"] },
    {
      path: "/projects",
      name: "Projects",
      component: routeImports["/projects"],
    },
    {
      path: "/experience",
      name: "Experience",
      component: routeImports["/experience"],
    },
    {
      path: "/resume",
      name: "Resume",
      component: routeImports["/resume"],
    },
    {
      path: "/contact",
      name: "Contact",
      component: routeImports["/contact"],
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
