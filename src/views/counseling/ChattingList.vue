<template>
  <div class="chat_list">
    <br />
    <h1>오늘 함께 이야기를 나누고 싶은 분을 수락해주세요.</h1>
    <div class="todayEmotion">
      <div class="todayEmotion_header">오늘 나의 기분</div>
      <div class="todayEmotion_body">
        {{ emotion }}
      </div>
    </div>
    <div class="chat_list_header">랜덤채팅 가능 유저 목록</div>
    <br />
    <table class="chat_list_body" border="2">
      <tr>
        <th>유저이름</th>
        <th>채팅요청</th>
      </tr>

      <tr v-if="!user || (Array.isArray(users) && users.length === 0)">
        <td>현재 채팅 가능한 회원이 없습니다.</td>
      </tr>

      <tr v-else v-for="user in users" :key="user">
        <td align="center">{{ user.userName }}</td>
        <td align="center"><button type="button">요청</button></td>

        <!-- <tr>
        <td align="center">user02</td>
        <td align="center"><button type="button">요청</button></td>
      </tr>
      <tr>
        <td align="center">user03</td>
        <td align="center"><button type="button">요청</button></td>
      </tr> -->
      </tr>
    </table>
  </div>
</template>
<script>
import axios from "axios";
import store from "@/store";
let userCode = sessionStorage.getItem("userCode");
let userName = sessionStorage.getItem("userName");
let emotion = null;
export default {
  name: "ChattingList",
  data() {
    return {
      userCode: "",
      userName: "",
      emotion: "",
      users: {},
    };
  },
  created() {
    this.chatUserSave();
  },
  mounted() {
    this.viewEmotion();
    this.chatUserList();
  },
  beforeRouteLeave(to, from, next) {
    if (this.canLeaveSite) next();
    else if (confirm("채팅 대기실에서 나가시겠습니까?")) {
      next();
      console.log("나갔니?");
      //리스트에서 삭제?
      this.chatUserDel();
    }
  },
  methods: {
    //유저 입장
    chatUserSave() {
      let apiUrl = "/chatuser";
      this.form = {
        //토큰에서 받아온 usercode를 저장하기.
        userCode: sessionStorage.getItem("userCode"),
        userName: sessionStorage.getItem("userName"),
      };

      axios
        .post(apiUrl, this.form)
        .then((res) => {
          this.user = res.data;
          console.log(this.user);
        })
        .catch((err) => console.log(err));
    },
    //유저 퇴장
    chatUserDel() {
      let apiUrl = "/chatuser/delete/" + userCode;
      alert(sessionStorage.getItem("userCode"));
      axios
        .delete(apiUrl, {})
        .then(() => {
          console.log("유저리스트에서 삭제");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //유저 채팅 리스트 출력
    chatUserList() {
      let apiUrl = "/chatuser/list";
      axios
        .get(apiUrl)
        .then((res) => {
          this.users = res.data;
          console.log(this.users);
        })
        .catch((err) => console.log(err));
    },

    //유저 공통 감정현황 출력
    viewEmotion() {
      console.log("viewEmotion userCode : " + this.userCode);
      console.log(
        "viewEmotion userCode - session : " + sessionStorage.getItem("userCode")
      );
      axios
        .get("/emotion/" + sessionStorage.getItem("userCode"))
        .then((res) => {
          console.log(res.data);
          this.users = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
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
  position: relative;
  top: 30px;
  margin: auto;
  width: 500px;
  /* height: 500px; */
  border: 2px solid #3a99db;
}

/* .chat_list_body li {
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
} */

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
}
/* 
li > :nth-child(n + 2) {
  position: relative;
  left: 50px;
}

li > :nth-child(n + 3) {
  position: relative;
  left: 10px;
} */

th,
td {
  width: 250px;
  border: 2px solid #3a99db;
  height: 50px;
}

/* .chat_list_body li:last-child {
  border-bottom: none;
} */
</style>
