import { createRouter, createWebHistory } from "vue-router";
import PageHome from "@/views/home/PageHome.vue";
import PageHomeLogin from "@/views/home/PageHomeLogin.vue";
import Mypage from "@/views/member/Mypage.vue";
import BoardList from "@/views/board/BoardList.vue";
import BoardDetail from "@/views/board/BoardDetail.vue";
import BoardWrite from "@/views/board/BoardWrite.vue";
// import Counseling from "@/views/counseling/Counseling.vue";
// import Test from "@/views/test/Test.vue";
// import Welfare from "@/views/welfare/Welfare.vue";
// import Cs from "@/views/cs/Cs.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const routes = [
  {
    path: "/",
    name: "PageHome",
    component: PageHome,
  },
  {
    path: "/login",
    name: "PageHomeLogin",
    component: PageHomeLogin,
  },
  {
    path: "/mypage",
    name: "Mypage",
    component: Mypage,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/home/PageAbout.vue"),
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
  // {
  //   path: "/counseling",
  //   name: "Counseling",
  //   component: Consulting,
  // },
  // {
  //   path: "/test",
  //   name: "Test",
  //   component: Test,
  // },
  // {
  //   path: "/welfare",
  //   name: "Welfare",
  //   component: Welfare,
  // },
  // {
  //   path: "/cs",
  //   name: "Cs",
  //   component: Cs,
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
