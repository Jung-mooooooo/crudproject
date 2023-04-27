// import { createRouter, createWebHistory } from "vue-router";

import Test from "@/views/test/Test.vue";
// import Mbti from "@/views/test/Mbti.vue";
// import Stress from "@/views/test/Stress.vue";
// import Depression from "@/views/test/Depression.vue";


const test = [{

    path: '/',
    name: 'testLayout',
    component: () => import('../components/layouts/DefaultLayout.vue'),
    children: [
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



    ]}
];

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes,
// });

export default test;