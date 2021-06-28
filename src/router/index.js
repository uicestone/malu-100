import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/join",
    name: "Join",
    component: () => import("../views/Join.vue"),
  },
  {
    path: "/countdown",
    name: "CountDown",
    component: () => import("../views/CountDown.vue"),
  },
  {
    path: "/rule",
    name: "Rule",
    component: () => import("../views/Rule.vue"),
  },
  {
    path: "/my",
    name: "My",
    component: () => import("../views/My.vue"),
  },
  {
    path: "/map",
    name: "Map",
    component: () => import("../views/Map.vue"),
  },
  {
    path: "/text",
    name: "Text",
    component: () => import("../views/Text.vue"),
  },
  {
    path: "/photo",
    name: "Photo",
    component: () => import("../views/Photo.vue"),
  },
  {
    path: "/video",
    name: "Video",
    component: () => import("../views/Video.vue"),
  },
  {
    path: "/qa",
    name: "Qa",
    component: () => import("../views/Qa.vue"),
  },
  {
    path: "/voice",
    name: "Voice",
    component: () => import("../views/Voice.vue"),
  },
  {
    path: "/achievement",
    name: "Achievement",
    component: () => import("../views/Achievement.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
