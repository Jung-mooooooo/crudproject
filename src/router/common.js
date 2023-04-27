import Emotion from "@/components/common/EmotionPage.vue";

const common = [
  {
    path: "/",
    name: "commonLayout",
    component: () => import("../components/layouts/DefaultLayout.vue"),
    children: [
      {
        path: "/emotion",
        name: "Emotion",
        component: Emotion,
      },
    ],
  },
];

export default common;
