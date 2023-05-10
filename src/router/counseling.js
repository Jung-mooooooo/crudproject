import Chatting from "@/views/counseling/Chatting.vue";
import Chatbot from "@/views/counseling/Chatbot.vue";
import ChattingList from "@/views/counseling/ChattingList.vue";

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
      {
        path: "/counseling/chattinglist",
        name: "ChattingList",
        component: ChattingList,
      },
    ],
  },
];

export default counseling;
