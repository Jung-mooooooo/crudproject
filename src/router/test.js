import Mbti from "@/views/test/Mbti.vue";
import Stress from "@/views/test/Stress.vue";
import Depression from "@/views/test/Depression.vue";

const test = [
  {
    path: "/",
    name: "testLayout",
    component: () => import("../components/layouts/DefaultLayout.vue"),
    children: [
      {
        path: "/test/mbti",
        name: "Mbti",
        component: Mbti,
      },
      {
        path: "/test/stress",
        name: "Stress",
        component: Stress,
      },
      {
        path: "/test/depression",
        name: "Depression",
        component: Depression,
      },
    ],
  },
];

export default test;
