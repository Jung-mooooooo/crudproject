// import { createRouter, createWebHistory } from "vue-router";




const welfareProgram = [{

    path: '/',
    name: 'welfareProgramLayout',
    component: () => import('../components/layouts/DefaultLayout.vue'),
    children: [

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
            path: "/welfareProgram/counsellingCenterMap",
            name: "CounsellingCenterMap",
            component: () => import("../views/welfareProgram/CounsellingCenterMap.vue"),
          },
          {
            path: "/welfareProgram/hospitalMap",
            name: "HospitalMap",
            component: () => import("../views/welfareProgram/HospitalMap.vue"),
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

    ]}
    ];

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes,
// });

export default welfareProgram;