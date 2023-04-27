<!-- PageAbout.vue -->
<template>
  <br />
  <br />
  <div class="before_test">
    <div>MBTI 4가지 선호 경향</div>
    <div>
      <img class="home_img" alt="Vue homelogo" src="@/assets/mbti.png" />
    </div>
    <button v-on:click="toMbti">MBTI 검사하러 가기 😉</button>
  </div>
  <br />
  <br />
  <div class="before_test">
    <div>스트레스 측정 검사</div>
    <div>
      <img class="home_img" alt="Vue homelogo" src="@/assets/stress.png" />
    </div>
    <button v-on:click="toStress">스트레스 측정하러 가기 🧐</button>
  </div>
  <br />
  <br />
  <div class="before_test">
    <div>우울증 자가진단</div>
    <div>
      <img class="home_img" alt="Vue homelogo" src="@/assets/depression.png" />
    </div>
    <button v-on:click="toDepression">우울증 자가진단하러 가기 🧐</button>
  </div>
  <br /><br /><br />
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "test",
  components: {
    // HelloWorld,
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
