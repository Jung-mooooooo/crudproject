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
          v-model="userId"
        />
        <label for="floatingInput">I D</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
          v-model="userPw"
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
// export default {};
// export default {};
//   import { reactive, toRefs } from '@vue/reactivity'
//   import axios from 'axios'
//   import { useRouter } from 'vue-router';

//   export default{
//       name: 'MemberLogin',
//       // @click="handleLogin"
//       setup () {
//     const router = useRouter();

//     const state = reactive({
//         userId:'',
//         userPw:'',
//     });
//     const handleLogin = async() => {
//         const url = `/member/login`;
//         // const headers = {"Content-Type":"application/json"};
//         const body = {
//             user_id : state.userId,
//             user_pw : state.userPw,
//             // role    : 'CUSTOMER'
//         }
//         const {data} = await axios.post(url, body);
//         console.log(data);

//         if(data.status == 200){
//             sessionStorage.setItem("token", data.result);
//             router.push({path:'/'});
//         }
//       };

//         return {
//         state,
//         ...toRefs(state),
//         handleLogin
//     }

//   }
// };

import axios from "axios";

export default {
  data() {
    return {
      name: "MemberLogin",
      loginSuccess: false,
      loginError: false,
      userId: "",
      userPw: "",
      // error: false
    };
  },
  //     methods: {
  //       login() {
  //       let apiUrl = "/member/login";
  //       this.form = {
  //       user_id: this.userId,
  //       user_pw: this.userPw,
  //     };

  //     axios
  //       .post(apiUrl, this.form)
  //       .then((res) => console.log(res))
  //       .catch((error) => console.log(error));
  //     }
  //   }
  // };

  methods: {
    login() {
      console.log("this.userId " + this.userId);
      console.log("this.userPw " + this.userPw);

      axios
        .post("/member/login/", {
          user_id: this.userId,
          user_pw: this.userPw,
        })
        .then((res) => {
          console.log(res)
          if (res.status == 200) {
            console.log(res)
            this.loginSuccess = true;
          }
        })

        .catch((err) => {
          console.log(err)
          err.loginError = true;
        });
    },
  },
};

// @submit.prevent="login()"
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



<!-- <template>
  <form @submit.prevent="fireSignin">
    <table>
			<tr>
				<td>아이디</td>
				<td><input type="text" v-model="user_id"></td>
			</tr>
			<tr>
				<td>비밀번호</td>
				<td><input type="password" v-model="user_pw"></td>
			</tr>
			<tr>
				<td colspan="2" align="center"><button type="submit">로그인</button></td>
			</tr>
		</table>
  </form>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'SigninForm',
  emits: ['sign-in'],
  setup(props, context) {
    //컴포넌트 데이터 정의
    const user_id = ref('')
    const user_pw = ref('')

    //입력한 사용자 아이디와 비밀번호와 함께 상위 컴포넌트에 sign-in 이벤트를 발생시킨다.
    const fireSignin = () => {
      context.emit('sign-in', {
        user_id: user_id.value,
        user_pw: user_pw.value 
      })
    }

    return {
      user_id,
      user_pw,
      fireSignin,
    }
  },
}
</script> -->
