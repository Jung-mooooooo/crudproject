// import { createApp } from "vue";
import { createStore } from "vuex";

export default createStore({
    state: {
        token: null,
        userCode: ""
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
        },
        setUserCode(state, userCode) {
            state.userCode = userCode;
        }
    },
    getters: {
        

    }
})

// const store = new Vuex.Store({
//     state: {
//        token: null
//     },
//     mutations: {
//         setToken(state, token) {
//             state.token = token;
//         }
//     }
// })

// export default store;