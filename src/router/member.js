// import { createRouter, createWebHistory } from "vue-router";
import MemberLogin from "@/views/member/MemberLogin.vue";
import MemberEnroll from "@/views/member/MemberEnroll.vue";
import MemberFindId from "@/views/member/MemberFindId.vue";
import MemberFindPw from "@/views/member/MemberFindPw.vue";
import MemberMyinfo from "@/views/member/MemberMyinfo.vue";
import MemberUpdate from "@/views/member/MemberUpdate.vue";
import Mypage from "@/views/member/Mypage.vue";
import PopUpdate from "@/views/member/popupToUpdate.vue";
import PopDelete from "@/views/member/popupToDelete.vue";


const member = [{

    path: '/',
    name: 'memberLayout',
    component: () => import('../components/layouts/DefaultLayout.vue'),
    children: [
        {
            path: "/member/login",
            name: "MemberLogin",
            component: MemberLogin,
        },
        {
            path: "/member/enroll",
            name: "MemberEnroll",
            component: MemberEnroll,
        },
        {
            path: "/member/findid",
            name: "MemberFindId",
            component: MemberFindId,
        },
        {
            path: "/member/findpw",
            name: "MemberFindPw",
            component: MemberFindPw,
        },
        {
            path: "/member/myinfo",
            name: "MemberMyinfo",
            component: MemberMyinfo,
        },
        {
            path: "/member/update",
            name: "MemberUpdate",
            component: MemberUpdate,
        },
        {
            path: "/mypage",
            name: "Mypage",
            component: Mypage,
        },
        {
            path: "/mypage/popupU",
            name: "PopUpdate",
            component: PopUpdate,
        },
        {
            path: "/mypage/popupD",
            name: "PopDelete",
            component: PopDelete,
        },

    ]
}
]

//   const router = createRouter({
//     history: createWebHistory(process.env.BASE_URL),
//     routes,
//   });

export default member;