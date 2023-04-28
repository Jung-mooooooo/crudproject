// import { createRouter, createWebHistory } from "vue-router";


const cs = [{

    path: '/',
    name: 'csLayout',
    component: () => import('../components/layouts/DefaultLayout.vue'),
    children: [

        {
            path: "/cs/Notice",
            name: "Notice",
            component: () => import("../views/cs/Notice.vue"),
        },
        {
            path: "/cs/FAQ",
            name: "FAQ",
            component: () => import("../views/cs/FAQ.vue"),
        }, 
        {
            path: "/cs/QnA",
            name: "QnA",
            component: () => import("../views/cs/QnA.vue"),
        },
        {
            path: "/cs/NoticeDetail",
            name: "NoticeDetail",
            component: () => import("../views/cs/NoticeDetail.vue"),
        }, 
        {
            path: "/cs/QnADetail",
            name: "QnADetail",
            component: () => import("../views/cs/QnADetail.vue"),
        },
        {
            path: "/cs/QnAWrite",
            name: "QnAWrite",
            component: () => import("../views/cs/QnAWrite.vue"),
        }, 
    ]}
    ];

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes,
// });

export default cs;