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
    path: "/admin/welfareProgram",
    name: "welfareProgram",
    component: () => import("../views/admin/AdminWelfareProgram.vue"),
  },
  {
    path: "/admin/counsellingCenter",
    name: "counsellingCenter",
    component: () => import("../views/admin/AdminCounsellingCenter.vue"),
  },
  {
    path: "/admin/speechRecognitionHelper",
    name: "speechRecognitionHelper",
    component: () => import("../views/admin/AdminSpeechRecognitionHelper.vue"),
  },
  {
    path: "/admin/AdminWelfareFacility",
    name: "AdminWelfareFacility",
    component: () => import("../views/admin/AdminWelfareFacility.vue"),
  },
  {
    path: "/admin/AdminTouristSpot",
    name: "AdminTouristSpot",
    component: () => import("../views/admin/AdminTouristSpot.vue"),
  },
  {
    path: "/admin/AdminHobby",
    name: "AdminHobby",
    component: () => import("../views/admin/AdminHobby.vue"),
  },
  {
    path: "/welfareProgram/welfareFacility",
    name: "WelfareFacility",
    component: () => import("../views/welfareProgram/WelfareFacility.vue"),
  },
  {
    path: "/welfareProgram/touristSpot",
    name: "TouristSpot",
    component: () => import("../views/welfareProgram/TouristSpot.vue"),
  },
  {
    path: "/welfareProgram/hobby",
    name: "HobbyMain",
    component: () => import("../views/welfareProgram/HobbyMain.vue"),
  },
  {
    path: "/welfareProgram/welfareFacilityMap",
    name: "WelfareFacilityMap",
    component: () => import("../views/welfareProgram/WelfareFacilityMap.vue"),
  },
  {
    path: "/welfareProgram/touristSpotMap",
    name: "TouristSpotMap",
    component: () => import("../views/welfareProgram/TouristSpotMap.vue"),
  },
  {
    path: "/welfareProgram/hobbyMap",
    name: "hobbyMap",
    component: () => import("../views/welfareProgram/HobbyMap.vue"),
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