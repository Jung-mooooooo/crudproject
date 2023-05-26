<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: "App",
  components: {},
  data() {
    return {
      id: "",
    };
  },
  created() {
    const id = sessionStorage.getItem("id");
    const auth = sessionStorage.getItem("auth");
    const userCode = sessionStorage.getItem("userCode");
    const userName = sessionStorage.getItem("userName");
    if (id) {
      store.commit("setUser", id);
      store.commit("setUser", auth);
      store.commit("setUser", userCode);
      store.commit("setUser", userName);
    }
  },
};
</script>

<style>
#app {
  text-align: center;
}
</style>
