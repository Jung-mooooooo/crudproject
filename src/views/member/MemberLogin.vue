<!-- Login.vue -->
<template>
  <div>
    <img alt="LoginLogo" src="@/assets/loginlogo.png" />
  </div>
  <div class="col-md-10 mx-auto col-lg-5">
    <div class="protected" v-if="loginSuccess">
      <h1>
        <b-badge variant="success"
          >보안 사이트에 대한 액세스가 허용되었습니다</b-badge
        >
      </h1>
      <h5>로그인 성공!</h5>
    </div>
    <div class="unprotected" v-else-if="loginError">
      <h1>
        <b-badge variant="danger"
          >이 페이지에 대한 접근 권한이 없습니다.</b-badge
        >
      </h1>
      <h5>로그인 실패!</h5>
    </div>
    <div class="unprotected" v-else>
      <h1>
        <b-badge variant="info">로그인해주세요</b-badge>
      </h1>
      <h5>로그인 하지 않았습니다. 로그인을 해주세요</h5>
    </div>
    <form
      class="p-4 p-md-5 border rounded-3 bg-light"
      @submit.prevent="login()"
    >
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          placeholder="I D"
          v-model="memberId"
        />
        <label for="floatingInput">I D</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
          v-model="memberPw"
        />
        <label for="floatingPassword">Password</label>
      </div>
      <div class="checkbox mb-3">
        <router-link
          style="text-decoration: none; color: black"
          to="/member/findid"
          >아이디 찾기</router-link
        >
        |
        <router-link
          style="text-decoration: none; color: black"
          to="/member/findpw"
        >
          비밀번호 찾기</router-link
        >
      </div>
      <button class="w-100 btn btn-lg btn-primary" type="submit">
        <!-- @click="handleLogin" -->
        Sign up
      </button>
      <div>
        <br />
        <button class="lologin">
          <img
            class="kakaoLogin"
            alt="kakaoLogin"
            src="@/assets/kakaologin.png"
          />
        </button>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <button class="lologin">
          <img class="naverLogin" alt="naverLogin" src="@/assets/btnG.png" />
        </button>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <button class="lologin">
          <img
            class="googleLogin"
            alt="googleLogin"
            src="@/assets/googlelogin.png"
          />
        </button>
      </div>
      <hr class="my-4" />
      <small class="text-muted">Better then talk 😊</small>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import store from "@/store";
// import router from "@/router/index";

// export default{
//   date(){
//     return {
//       userId: "",
//       userPw: "",
//     };
//   },
//   methods: {
    
//     login() {
//       let apiUrl = "/member/login";
//       // const loginForm = {
//       // user_id: this.userId,
//       // user_pw: this.userPw
//       // }
//       this.form = {
//       user_id: this.userId,
//       user_pw: this.userPw
//       };
//       console.log("this.userId " + this.userId);
//       console.log("this.userPw " + this.userPw);

//       axios
//       .post(apiUrl, this.form)
//       .then((res) => {
//         console.log(res);
//         if(res.status === 200){
//           store.commit('setToken', res.data)
//           sessionStorage.setItem('accessToken', res.data);
//           window.alert('로그인 하였습니다.');
//           router.push({path: '/loginhome'});
//         }
//       }).catch(() => {
//         window.alert('로그인에 실패하였습니다.')
//       })
//     }
//   }
// }





export default {
  data() {
    return {
      name: "MemberLogin",
      loginSuccess: false,
      loginError: false,
      memberId: "",
      memberPw: "",
      userId: "",
      userPw: "",
      requestBody: {}
      
    };
  },
  methods: {
    changepage(){
      this.$router.push({
        path: '/loginhome'
      });
    },
    loginok(){
      if(this.userId !== undefined){
        this.$axios.get("/member/myinfo/" + this.userId)
        .then((res) => {
          store.commit('setToken', res.data)
          store.commit('setUserCode', res.data)
          sessionStorage.setItem('accessToken', res.data);
          // console.log(JSON.parse(res.data));
          // console.log(JSON.parse(this.sessionStorage));
          // console.log(JSON.parse(this.localStorage));

          
          window.alert('로그인 하였습니다.');

          console.log(this.store);
          console.log(this.sessionStorage);
          console.log(store.commit('setToken', res.data));
          // this.requestBody = res.data
          // if(this.userPw == this.requestBody.user_pw && this.userId == this.requestBody.user_id){
          // console.log(this.requestBody)
          // localStorage.setItem('userCode', this.requestBody.userCode)
          // localStorage.setItem('auth', this.requestBody.auth)
          this.changepage();
        // }else if(this.userPw != this.requestBody.user_pw || this.userId != this.requestBody.user_id){
        //   alert("아이디와 비밀번호가 일치하지 않습니다. 다시 입력해주세요.");
          // this.$router.go(0);
          console.log(res);
        // }
        })
        .catch((err) => {
          console.log(err)
        });
      }
    },
    login() {
      console.log("this.userId " + this.memberId);
      console.log("this.userPw " + this.memberPw);
      let apiUrl = "/member/login/";
      axios
        .post(apiUrl, {
          userId: this.memberId,
          userPw: this.memberPw,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'token',
          }
        }
        )
        .then((res) => {
          // console.log(res)
          if (res.status == 200) {
            console.log(res)
            this.loginSuccess = true
            // store.commit('setToken', res.data)
            // sessionStorage.setItem('accessToken', res.data);
            // window.alert('로그인 하였습니다.');
            localStorage.setItem('token', res.data.token);
            sessionStorage.setItem('token', res.data.token);
            console.log(localStorage);
            console.log(sessionStorage);
            // this.$router.push({name: 'PageHomeLogin'})
            this.userId = this.memberId
            this.loginok();

          }
        })

        .catch((err) => {
          console.log(err)
          err.loginError = true;
          window.alert('로그인에 실패하였습니다.')
        });
    }
  },
};
</script>

<style scoped>
.kakaoLogin {
  height: 62px;
}

.naverLogin {
  height: 50px;
}

.googleLogin {
  height: 57px;
}

.lologin {
  border-width: 0px;
  padding: 0px 0px;
}
</style>