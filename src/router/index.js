import { createRouter, createWebHistory } from "vue-router";
import PageHome from "@/views/home/PageHome.vue";
import BoardList from "@/views/board/BoardList.vue";
import BoardDetail from "@/views/board/BoardDetail.vue";
import BoardWrite from "@/views/board/BoardWrite.vue";

const routes = [
  {
    path: "/",
    name: "PageHome",
    component: PageHome,
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("../views/admin/AdminHome.vue"),
  },
  {
    path: "/admin/counselling",
    name: "Counselling",
    component: () => import("../views/admin/AdminCounselling.vue"),
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
