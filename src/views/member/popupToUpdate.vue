<template>
  <div class="d-flex gap-2 justify-content-center py-5">
    <button class="btn btn-light rounded-pill px-3" 
    type="button" 
    v-on:click="this.$router.push('/member/myinfo')">
      내정보보기
    </button>
    <button
      class="btn btn-light rounded-pill px-3"
      v-on:click="this.$router.push('/mypage/popupU')"
      type="button"
    >
      내정보수정
    </button>
    <button
      class="btn btn-light rounded-pill px-3"
      v-on:click="this.$router.push('/mypage/popupD')"
      type="button"
    >
      회원탈퇴
    </button>
  </div>
  <form @submit.prevent="pwck()">
  <div class="pop_box">
    <div>내정보수정을 위해<br />000님 비밀번호를 입력해주세요</div>
    <br />
    <hr />
    <br />
        <div><input type="password" v-model="memberPw"/></div>
        <div><button type="submit">확 인</button></div>
  </div>
</form>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";
export default {
    data(){
      return {

      }
    },
    methods: {
      memberupdate(){
        this.$router.push({
          path: '/member/update'
        });
      },
      pwck(){
        var apiUrl = "/mypage/popupU/";
        axios
          .post(apiUrl, {
            userPw: this.memberPw,
            userId: sessionStorage.getItem("userId"),
          })
          .then((res) => {
            console.log(res)
            window.alert("비밀번호 확인 성공")

            this.memberupdate();
          })
          .catch((err) => {
            console.log(err)
            window.alert("비밀번호가 틀렸습니다.")
          })
      },
    },

}
</script>

<style scoped>
.btn {
  font-size: 40px;
}

.pop_box {
  width: 40%;
  height: 400px;
  border: 2px solid black;
  border-radius: 20px;
  background: rgba(255, 192, 0, 0.6);
  margin: auto;
}

.pop_box > * {
  position: relative;
  top: 80px;
}

.pop_box > div:first-child {
  margin: auto;
  width: 80%;
  height: 80px;
  font-size: 30px;
  font-weight: bold;
}

hr {
  margin: auto;
  border: 3px solid black;
  width: 80%;
}

.pop_box > form {
  margin: auto;
  width: 60%;
  height: 150px;
}
.pop_box > form div:first-child input {
  width: 100%;
  height: 80px;
  border-radius: 20px;
}

.pop_box > form div:last-child input {
  width: 40%;
  height: 60px;
  border-radius: 10px;
  position: relative;
  top: 20px;
  background: #3a99db;
}
</style>
