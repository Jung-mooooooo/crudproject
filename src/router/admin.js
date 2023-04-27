// import { createRouter, createWebHistory } from "vue-router";



const admin = [{

    path: '/',
    name: 'defaultLayout',
    component: () => import('../components/layouts/DefaultLayout.vue'),
    children: [

        {
            path: "/admin",
            name: "Admin",
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

    ]
}
];

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   admin,
// });

export default admin;