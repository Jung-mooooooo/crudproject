<!-- PageAbout.vue -->
<template>
  <br />
  <br />
  <div class="before_test">
    <div>우울증 자가진단</div>
    <div>
      <img class="home_img" alt="Vue homelogo" src="@/assets/depression.png" />
    </div>
    <button v-on:click="toDepression">우울증 자가진단하러 가기 🧐</button>
  </div>
  <br />
  <br />
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Depression",
  components: {
    // HelloWorld,
  },

  methods: {
    toDepression() {
      location.href = "https://www.wonju.go.kr/health/contents.do?key=1694&";
    },
  },
};
</script>

<style scoped>
.before_test {
  border: 2px solid rgb(128, 128, 128, 0.5);
  border-radius: 20px;
  width: 80%;
  height: 1100px;
  margin: auto;
}

.before_test > div:first-child {
  font-size: 50px;
  font-weight: 500;
  color: black;
  position: relative;
  top: 20px;
}

img {
  width: 80%;
  height: 800px;
  position: relative;
  top: 20px;
}

.before_test button {
  position: relative;
  top: 80px;
  width: 30%;
  height: 80px;
  border: 2px solid #3a99db;
  background: #3a99db;
  border-radius: 15px;
  font-size: 30px;
}
</style>
