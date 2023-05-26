// import { createApp } from "vue";
import { createStore } from "vuex";

export default createStore({
  state: {
    token: null,
    userCode: "",
    userName: "",
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setUserCode(state, userCode) {
      state.userCode = userCode;
    },
    setUserName(state, userName) {
      state.userName = userName;
    },
  },
  getters: {
    getUserCode(state) {
      return state.userCode;
    },
    getUserName(state) {
      return state.userName;
    },
  },
});
