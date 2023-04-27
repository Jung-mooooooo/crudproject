<template>
  <!-- <PageHeader v-if="$route.name === 'PageHome'" />
  <PageHeaderToLogin v-if="$route.name !== 'PageHome'" /> -->
  <router-view />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

// import PageHeader from "./components/common/PageHeader.vue";
// import PageHeaderToLogin from "./components/common/PageHeaderToLogin.vue";
// import PageFooter from "./components/common/PageFooter.vue";

export default {
  name: "App",
  components: {
    // HelloWorld
    
    // PageHeader,
    // PageHeaderToLogin,
    // PageFooter,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
