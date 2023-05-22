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
            path: "/welfareProgram/seaMap",
            name: "SeaMap",
            component: () => import("../views/welfareProgram/SeaMap.vue"),
          },
          {
            path: "/welfareProgram/activityMap",
            name: "ActivityMap",
            component: () => import("../views/welfareProgram/ActivityMap.vue"),
          },
          {
            path: "/welfareProgram/campingMap",
            name: "CampingMap",
            component: () => import("../views/welfareProgram/CampingMap.vue"),
          },
          {
            path: "/welfareProgram/forestMap",
            name: "ForestMap",
            component: () => import("../views/welfareProgram/ForestMap.vue"),
          },
          {
            path: "/welfareProgram/galleryMap",
            name: "GalleryMap",
            component: () => import("../views/welfareProgram/GalleryMap.vue"),
          },
          {
            path: "/welfareProgram/museumMap",
            name: "MuseumMap",
            component: () => import("../views/welfareProgram/MuseumMap.vue"),
          },
          {
            path: "/welfareProgram/parkMap",
            name: "ParkMap",
            component: () => import("../views/welfareProgram/ParkMap.vue"),
          },
          {
            path: "/welfareProgram/hobbyMap",
            name: "hobbyMap",
            component: () => import("../views/welfareProgram/HobbyMap.vue"),
          },
          {
            path: "/welfareProgram/artMap",
            name: "ArtMap",
            component: () => import("../views/welfareProgram/ArtMap.vue"),
          },
          {
            path: "/welfareProgram/danceMap",
            name: "DanceMap",
            component: () => import("../views/welfareProgram/DanceMap.vue"),
          },
          {
            path: "/welfareProgram/languageMap",
            name: "LanguageMap",
            component: () => import("../views/welfareProgram/LanguageMap.vue"),
          },
          {
            path: "/welfareProgram/musicMap",
            name: "MusicMap",
            component: () => import("../views/welfareProgram/MusicMap.vue"),
          },

    ]}
    ];

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes,
// });

export default welfareProgram;