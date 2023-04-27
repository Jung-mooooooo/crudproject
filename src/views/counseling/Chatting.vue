<!-- PageAbout.vue -->
<template>
  <br />
  <br />
  <br />
  <div class="chating_box">
    <div>
      <div class="chat_header">000 님과 1대 1 채팅</div>
      <div class="chat_body">
        <div class="user u1">
          <div class="name">00 님</div>
          <div class="text">안녕하세요?</div>
        </div>
        <div class="user u2">
          <div class="text">반가워요!</div>
          <div class="name">ㅁㅁ 님</div>
        </div>
      </div>
      <div class="send_msg">
        <div>메세지를 입력해주세요.</div>
        <button>보내기</button>
      </div>
    </div>
    <div class="chat_list">
      <div class="chat_list_header">랜덤채팅 가능 유저 목록</div>
      <div class="chat_list_body">
        <li>유저1<button>수락</button><button>거절</button></li>
        <li>유저2<button>수락</button><button>거절</button></li>
        <li>유저3<button>수락</button><button>거절</button></li>
        <li>유저4<button>수락</button><button>거절</button></li>
        <li>유저5<button>수락</button><button>거절</button></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </div>
    </div>
  </div>
  <br /><br /><br />
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "ChatTing",
  components: {
    // HelloWorld,
  },
};
</script>

<style scoped>
/* h1 {
  color: green;
} */
.chating_box {
  margin: auto;
  display: flex;
  justify-content: center;
  width: 90%;
}

.chating_box > div {
  margin: auto;
}

.chating_box > div:first-child {
  width: 80%;
  position: relative;
  right: -100px;
}

.chating_box > div:last-child {
  width: 20%;
  height: 580px;
  position: relative;
  right: 180px;
}

.chat_list_header {
  height: 50px;
  position: relative;
  top: -10px;
  border: 1px solid #3a99db;
  background: #3a99db;
  border-radius: 10px;
  line-height: 50px;
  font-size: 20px;
  font-weight: bold;
  color: white;
}
.chat_list_body {
  height: 500px;
  border: 2px solid #3a99db;
  /* background: #3a99db; */
  border-radius: 20px;
}
.chating_box > div:last-child li {
  height: 50px;
  line-height: 50px;
  border-bottom: 2px solid #3a99db;
  color: #3a99db;
  font-weight: bold;
  font-size: 20px;
  list-style: none;
  display: flex;
  justify-content: space-around;
}

.chating_box > div:last-child li button {
  width: 25%;
  height: 30px;
  line-height: 30px;
  border: 1px solid white;
  background: #3a99db;
  color: white;
  position: relative;
  top: 10px;
}

.chating_box > div:last-child li button:first-child {
  position: relative;
  right: -20px;
}

.chating_box > div:last-child li:last-child {
  border-bottom: none;
}

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
