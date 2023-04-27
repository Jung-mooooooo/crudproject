<!-- PageHome.vue -->
<template>
  <br /><br />
  <div class="home">
    <div class="logo_box">
      <img alt="Vue logo" src="@/assets/logo.jpg" />
    </div>
  </div>
  <br /><br /><br /><br />
  <div class="emotion_text">요즘 당신의 기분이 궁금해요</div>
  <br /><br /><br />
  <div class="emotion_text2">가장 가까운 단어를 선택해주세요</div>

  <br /><br /><br /><br />
  <div class="container">
    <div class="eBox">
      <div v-on:click="toGo">답답해요</div>
      <div>불안해요</div>
      <div>걱정돼요</div>
    </div>
    <div class="eBox">
      <div>괴로워요</div>
      <div>무서워요</div>
      <div>무기력해요</div>
    </div>
    <div class="eBox">
      <div>외로워요</div>
      <div>심심해요</div>
      <div>화가나요</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "PageHome",
  components: {
    // HelloWorld,
  },

  methods: {
    toGo() {
      location.href = "/emotion";
    },
  },
};
</script>
<style scoped>
.logo_box {
  margin: auto;
  width: 95%;
  border: 2px solid black;
  border-radius: 35px;
}

img {
  width: 90%;
}

.emotion_text {
  border: 1px solid black;
  border-radius: 20px;
  width: 60%;
  height: 100px;
  font-size: 50px;
  font-style: oblique;
  line-height: 100px;
  position: relative;
  left: 50px;
}

.emotion_text2 {
  border: 1px solid black;
  border-radius: 20px;
  width: 60%;
  height: 100px;
  font-size: 50px;
  font-style: oblique;
  line-height: 100px;
  position: relative;
  left: 500px;
}

.eBox {
  width: 90%;
  margin: auto;
  height: 420px;
  display: flex;
}

.eBox div {
  width: 30%;
  border-radius: 20px;
  border: 1px solid rgba(128, 128, 128, 0.5);
  height: 400px;
  margin: auto;
  line-height: 400px;
  font-size: 50px;
  color: rgba(244, 182, 57, 0.8);
}

.eBox div:hover {
  background: #ffe4af;
  color: white;
}
</style>
