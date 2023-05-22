<!-- PageAbout.vue -->
<template>
  <br />
  <br />
  <br />
  <div class="chating_box">
    <div>
      <div class="chat_header">{{}} 님과 1대 1 채팅</div>
      <div class="chat_body">
        <div class="user u1">
          <div class="name">
            {{ userName1 }}
          </div>
          <div class="text">
            {{ content1 }}
          </div>
        </div>
        <div class="user u2">
          <div class="text">{{ content2 }}</div>
          <div class="name">{{ userName2 }}</div>
        </div>
      </div>
      <div class="send_msg">
        <input v-model="content" type="text" />
        <button type="button">보내기</button>
      </div>
    </div>

    <div class="chat_list">
      <div class="todayEmotion">
        <div class="todayEmotion_header">오늘 나의 기분</div>
        <div class="todayEmotion_body">😀</div>
      </div>
      <div class="chat_list_header">랜덤채팅 가능 유저 목록</div>
      <div class="chat_list_body">
        <li>
          유저1
          <div></div>
          <button>수락</button><button>거절</button>
        </li>
        <li>
          유저2
          <div></div>
          <button>수락</button><button>거절</button>
        </li>
        <li>
          유저3
          <div></div>
          <button>수락</button><button>거절</button>
        </li>
        <li>
          유저4
          <div></div>
          <button>수락</button><button>거절</button>
        </li>
        <li>
          유저5
          <div></div>
          <button>수락</button><button>거절</button>
        </li>
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
  width: 1800px;
  height: 800px;
}

.chating_box > div {
  margin: auto;
}

.chating_box > div:first-child {
  width: 1200px;
  position: relative;
  right: -100px;
}

.todayEmotion {
  height: 200px;
}

.todayEmotion_header {
  width: 300px;
  height: 60px;
  border: 1px solid #3a99db;
  background: #3a99db;
  font-size: 20px;
  font-weight: bold;
  color: white;
  border-radius: 10px;
  text-align: center;
  line-height: 60px;
  position: relative;
  top: -100px;
  margin: auto;
}

.todayEmotion_body {
  position: relative;
  top: -95px;
  margin: auto;
  width: 300px;
  height: 120px;
  border: 2px solid #3a99db;
  font-size: 80px;
  font-weight: bold;
  border-radius: 10px;
  text-align: center;
  line-height: 120px;
}

.chating_box > div:last-child {
  width: 300px;
  height: 580px;
  position: relative;
  right: 180px;
}

.chat_list_header {
  height: 50px;
  position: relative;
  top: -90px;
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
  position: relative;
  top: -80px;
  border: 2px solid #3a99db;
  /* background: #3a99db; */
  border-radius: 20px;
}

.chat_list_body li div {
  border: 2px solid orange;
  background: orange;
  width: 10%;
  height: 50%;
  border-radius: 50%;
  position: relative;
  top: 10px;
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
  width: 800px;
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
  width: 800px;
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
  width: 800px;
  /* height: 60px;
  border: 2px solid #3a99db; */
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
}

.send_msg > input {
  position: relative;
  width: 80%;
  border: 2px solid #3a99db;
  border-radius: 15px;
  left: 30px;
  line-height: 60px;
  font-size: 35px;
  color: gray;
}

.send_msg > button {
  position: relative;
  top: 4px;
  border: 2px solid #3a99db;
  background: #3a99db;
  width: 15%;
  border-radius: 8px;
  height: 50px;
  color: white;
  font-size: 25px;
  line-height: 50px;
}
</style>
