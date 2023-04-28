<template>
  <div class="chat_list">
    <br />
    <h1>오늘 함께 이야기를 나누고 싶은 분을 수락해주세요.</h1>
    <div class="todayEmotion">
      <div class="todayEmotion_header">오늘 나의 기분</div>
      <div class="todayEmotion_body">😀</div>
    </div>
    <div class="chat_list_header">랜덤채팅 가능 유저 목록</div>
    <br />
    <div class="chat_list_body">
      <li>
        유저1
        <div></div>
        <button v-on:click="this.$router.push('/counseling/chatting')">
          수락</button
        ><button>거절</button>
      </li>
      <li>
        유저2
        <div></div>
        <button v-on:click="this.$router.push('/counseling/chatting')">
          수락</button
        ><button>거절</button>
      </li>
      <li>
        유저3
        <div></div>
        <button v-on:click="this.$router.push('/counseling/chatting')">
          수락</button
        ><button>거절</button>
      </li>
      <li>
        유저4
        <div></div>
        <button v-on:click="this.$router.push('/counseling/chatting')">
          수락</button
        ><button>거절</button>
      </li>
      <li>
        유저5
        <div></div>
        <button v-on:click="this.$router.push('/counseling/chatting')">
          수락</button
        ><button>거절</button>
      </li>
      <li>
        유저6
        <div class="n"></div>
        <button>수락</button><button>거절</button>
      </li>
      <li>
        유저7
        <div class="n"></div>
        <button>수락</button><button>거절</button>
      </li>
      <li>
        유저8
        <div class="n"></div>
        <button>수락</button><button>거절</button>
      </li>
      <li>
        유저9
        <div class="n"></div>
        <button>수락</button><button>거절</button>
      </li>
      <li>
        유저n
        <div class="n"></div>
        <button>수락</button><button>거절</button>
      </li>
    </div>
  </div>
</template>
<script></script>
<style scoped>
h1 {
  margin: auto;
  height: 80px;
  line-height: 80px;
  font-size: 50px;
}

.chat_list {
  width: 60%;
  height: 1100px;
  margin: auto;
}

.chat_list > div {
  position: relative;
  top: 50px;
}

.todayEmotion {
  height: 200px;
  width: 30%;
  margin: auto;
}

.todayEmotion_header {
  width: 50%;
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
  top: -5px;
  margin: auto;
}

.todayEmotion_body {
  margin: auto;
  width: 50%;
  height: 120px;
  border: 2px solid #3a99db;
  font-size: 80px;
  font-weight: bold;
  border-radius: 10px;
  text-align: center;
  line-height: 120px;
}

.chat_list_header {
  margin: auto;
  width: 600px;
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
  margin: auto;
  width: 500px;
  height: 500px;
  border: 2px solid #3a99db;
  border-radius: 20px;
}

.chat_list_body li {
  display: flex;
  justify-content: space-around;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #3a99db;
  font-size: 30px;
  font-weight: bold;
  color: #3a99db;
}

.chat_list_body li div {
  border: none;
  background: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: relative;
  top: 10px;
  left: 50px;
}
.chat_list_body li div:not(.n) {
  border: 2px solid orange;
  background: orange;
}

button {
  width: 100px;
  height: 40px;
  border-radius: 10px;
  border: 2px solid #3a99db;
  background: #3a99db;
  color: white;
  font-size: 25px;
  font-weight: bold;
  line-height: 40px;
  position: relative;
  top: 5px;
}

li > :nth-child(n + 2) {
  position: relative;
  left: 50px;
}

li > :nth-child(n + 3) {
  position: relative;
  left: 10px;
}

.chat_list_body li:last-child {
  border-bottom: none;
}
</style>
