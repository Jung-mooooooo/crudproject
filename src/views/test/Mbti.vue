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
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Mbti",
  components: {
    // HelloWorld,
  },
  methods: {
    toMbti() {
      location.href =
        "https://www.16personalities.com/ko/%EB%AC%B4%EB%A3%8C-%EC%84%B1%EA%B2%A9-%EC%9C%A0%ED%98%95-%EA%B2%80%EC%82%AC";
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
