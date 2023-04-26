import { createRouter, createWebHistory } from "vue-router";
import PageHome from "@/views/home/PageHome.vue";
import PageHomeLogin from "@/views/home/PageHomeLogin.vue";
import Mypage from "@/views/member/Mypage.vue";
import PopUpdate from "@/views/member/popupToUpdate.vue";
import PopDelete from "@/views/member/popupToDelete.vue";
import BoardList from "@/views/board/BoardList.vue";
import BoardDetail from "@/views/board/BoardDetail.vue";
import BoardWrite from "@/views/board/BoardWrite.vue";
import Counseling from "@/views/counseling/Counseling.vue";
import Chatting from "@/views/counseling/Chatting.vue";
import Chatbot from "@/views/counseling/Chatbot.vue";
import Test from "@/views/test/Test.vue";
// import Mbti from "@/views/test/Mbti.vue";
// import Stress from "@/views/test/Stress.vue";
// import Depression from "@/views/test/Depression.vue";
import Welfare from "@/views/welfare/Welfare.vue";
import Healing from "@/views/welfare/Healing.vue";
import Center from "@/views/welfare/Center.vue";
import Oneday from "@/views/welfare/Oneday.vue";
import Cs from "@/views/cs/Cs.vue";
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
    path: "/mypage/popupU",
    name: "PopUpdate",
    component: PopUpdate,
  },
  {
    path: "/mypage/popupD",
    name: "PopDelete",
    component: PopDelete,
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
  {
    path: "/counseling",
    name: "Counseling",
    component: Counseling,
  },
  {
    path: "/counseling/chatting",
    name: "Chatting",
    component: Chatting,
  },
  {
    path: "/counseling/chatbot",
    name: "Chatbot",
    component: Chatbot,
  },
  {
    path: "/test",
    name: "Test",
    component: Test,
  },
  // {
  //   path: "/test/mbti",
  //   name: "Mbti",
  //   component: Mbti,
  // },
  // {
  //   path: "/test/stress",
  //   name: "Stress",
  //   component: Stress,
  // },
  // {
  //   path: "/test/depression",
  //   name: "Depression",
  //   component: Depression,
  // },
  {
    path: "/welfare",
    name: "Welfare",
    component: Welfare,
  },
  {
    path: "/welfare/healing",
    name: "Healing",
    component: Healing,
  },
  {
    path: "/welfare/center",
    name: "Center",
    component: Center,
  },
  {
    path: "/welfare/oneday",
    name: "Oneday",
    component: Oneday,
  },
  {
    path: "/cs",
    name: "Cs",
    component: Cs,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
