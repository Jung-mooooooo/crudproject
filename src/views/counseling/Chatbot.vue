<!-- PageAbout.vue -->
<template>
  <br />
  <br />
  <br />
  <div class="chat_header">베베 챗봇 서비스</div>
  <div class="chat_body">
    <div class="user u1">
      <div class="name">베베</div>
      <div class="text">00님 안녕하세요?</div>
    </div>
    <div class="user u2">
      <div class="text">안녕 베베</div>
      <div class="name">00 님</div>
    </div>
  </div>
  <div class="send_msg">
    <div>어떤 고민이 있으신가요?</div>
    <button>보내기</button>
  </div>
  <br /><br /><br />
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Chatbot",
  components: {
    // HelloWorld,
  },
};
</script>

<style scoped>
/* h1 {
  color: green;
} */

.chat_header {
  width: 50%;
  height: 60px;
  border: 1px solid #3a99db;
  background: #3a99db;
  color: white;
  border-radius: 15px;
  margin: auto;
  font-size: 40px;
  line-height: 60px;
}

.chat_body {
  position: relative;
  top: 10px;
  width: 50%;
  height: 500px;
  margin: auto;
  border: 2px solid #3a99db;
  border-radius: 15px;
}

.chat_body > div {
  width: 50%;
  height: 200px;

  display: flex;
}

.u2 {
  position: relative;
  right: -50%;
  top: 30px;
}

.chat_body > div div {
  border-radius: 10px;
  position: relative;
  top: 20px;
}

.chat_body > div .name {
  width: 20%;
  height: 40%;
  border-radius: 50%;
  border: 1px solid #ffc000;
  background: rgb(255, 192, 0);
  line-height: 75px;
  font-size: 25px;
  font-weight: bold;
  color: white;
}
.chat_body > div .text {
  width: 80%;
  height: 100px;
  line-height: 100px;
  font-size: 20px;
  font-weight: bold;
  border: 1px solid rgba(255, 192, 0, 0.3);
  background: rgba(255, 192, 0, 0.3);
}

.send_msg {
  position: relative;
  top: 15px;
  margin: auto;
  width: 50%;
  height: 60px;
  border: 2px solid #3a99db;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
}

.send_msg > div {
  position: relative;
  left: 30px;
  line-height: 60px;
  font-size: 35px;
  color: gray;
}

.send_msg button {
  position: relative;
  right: 30px;
  top: 4px;
  border: 2px solid #3a99db;
  background: #3a99db;
  width: 15%;
  border-radius: 8px;
  height: 50px;
}
</style>
