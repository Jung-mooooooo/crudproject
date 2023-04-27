// import { createRouter, createWebHistory } from "vue-router";

import Counseling from "@/views/counseling/Counseling.vue";
import Chatting from "@/views/counseling/Chatting.vue";
import Chatbot from "@/views/counseling/Chatbot.vue";

const counseling = [
  {
    path: "/",
    name: "counselingLayout",
    component: () => import("../components/layouts/DefaultLayout.vue"),
    children: [
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
    ],
  },
];

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes,
// });

export default counseling;
