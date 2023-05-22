<template>
  <div id="app">  
    <router-view />
  </div>
  </template>

<script>
import store from "@/store";

export default {
  name: 'App',
  components: {

  },
  data() {
    return{
      id: ''
    }
  },
  created() {
    const id = sessionStorage.getItem('id');
    const auth = sessionStorage.getItem('auth');

    if(id) {
      store.commit('setUser', id);
      store.commit('setUser', auth);
    }
  }
}
</script>

<style>
#app {
  text-align: center;
}

</style>
