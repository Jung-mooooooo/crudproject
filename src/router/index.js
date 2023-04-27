import { createRouter, createWebHistory } from "vue-router";

// import Vue from 'vue'
// import VueRouter from 'vue-router'
import admin from './admin.js'
import member from './member.js'

import PageHome from "@/views/home/PageHome.vue";
import PageHomeLogin from "@/views/home/PageHomeLogin.vue";

import BoardList from "@/views/board/BoardList.vue";
import BoardDetail from "@/views/board/BoardDetail.vue";
import BoardWrite from "@/views/board/BoardWrite.vue";

import Cs from "@/views/cs/Cs.vue";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Vue.use(VueRouter)

const routes = [

    {
      path: '/',
      name: 'defaultLayout',
      component: () => import('../components/layouts/DefaultLayout.vue'),
      children: [
        {
          path: "/",
          name: "PageHome",
          component: PageHome,
        },
        {
          path: "/about",
          name: "About",
          component: () => import("../views/home/PageAbout.vue"),
        },

        {
          path: "/login",
          name: "PageHomeLogin",
          component: PageHomeLogin,
        },

        {
          path: "/board/list",
          name: "BoardList",
          component: BoardList,
        },
        {
          path: "/board/detail",
          name: "BoardDetail",
          component: BoardDetail,
        },
        {
          path: "/board/write",
          name: "BoardWrite",
          component: BoardWrite,
        },
        {
          path: "/cs",
          name: "Cs",
          component: Cs,
        },
      ],
    },

    {
      path: '/',
      name: 'NoNavLayout',
      component: () => import('../components/layouts/NoNavLayout.vue'),
      children: [
        {
          path: '/special/',
          name: 'SpecialHome',
          component: () => import('../views/special/SpecialHome.vue'),
        },
        {
          path: '/special/speech',
          name: 'SpecialSpeech',
          component: () => import('../views/special/SpecialSpeech.vue'),
        },
        {
          path: '/special/music',
          name: 'SpecialMusic',
          component: () => import('../views/special/SpecialMusic.vue'),
        },
      ]
    },
  ];

  const baseRoutes = [
    routes,
    ...admin,
    ...member
  ];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: baseRoutes
});

export default router
