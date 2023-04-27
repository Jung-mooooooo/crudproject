// import { createRouter, createWebHistory } from "vue-router";



const admin = [{

    path: '/',
    name: 'adminLayout',
    component: () => import('../components/layouts/AdminLayout.vue'),
    children: [
        {
            path: "/admin",
            name: "admin",
            component: () => import("@/views/admin/AdminHome.vue"),
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
            path: "/admin/AdminNotice",
            name: "AdminNotice",
            component: () => import("../views/admin/AdminNotice.vue"),
        },
        {
            path: "/admin/AdminNoticeDetail",
            name: "AdminNoticeDetail",
            component: () => import("../views/admin/AdminNoticeDetail.vue"),
        },
        {
            path: "/admin/AdminNoticeWrite",
            name: "AdminNoticeWrite",
            component: () => import("../views/admin/AdminNoticeWrite.vue"),
        },
        {
            path: "/admin/AdminQnA",
            name: "AdminQnA",
            component: () => import("../views/admin/AdminQnA.vue"),
        },
        {
            path: "/admin/AdminQnADetail",
            name: "AdminQnADetail",
            component: () => import("../views/admin/AdminQnADetail.vue"),
        },
        {
            path: "/admin/AdminQnAWrite",
            name: "AdminQnAWrite",
            component: () => import("../views/admin/AdminQnAWrite.vue"),
        },
        {
            path: "/admin/AdminFAQ",
            name: "AdminFAQ",
            component: () => import("../views/admin/AdminFAQ.vue"),
        },
        {
            path: "/admin/AdminMemberManage",
            name: "AdminMemberManage",
            component: () => import("../views/admin/AdminMemberManage.vue"),
        },

    ]
}
]

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   admin,
// });

export default admin;