<!-- PageAbout.vue -->
<template>
  <div class="col-md-7 col-lg-8">
    <img alt="Enrolllogo" src="@/assets/Enrolllogo.png" />
    <form
      @submit.prevent="joinForm"
      class="needs-validation"
      novalidate=""
      method="post"
    >
      <input
        type="hidden"
        th:name="${_csrf.parameterName}"
        th:value="${_csrf.token}"
      />
      <div class="row g-3">
        <div class="col-sm-2">
          <div class="input-group has-validation">
            <span class="input-group-text"
              >&nbsp; 이 &nbsp; &nbsp; 름 &nbsp;</span
            >
          </div>
        </div>

        <div class="col-sm-10">
          <div class="input-group has-validation">
            <input
              v-model="userName"
              type="text"
              class="form-control"
              id="userName"
              name="userName"
            />
          </div>
          <p class="errorBox">{{ validate.valid_userName }}</p>
        </div>

        <div class="col-sm-2">
          <div class="input-group has-validation">
            <span class="input-group-text">&nbsp; 아 이 디 &nbsp;</span>
          </div>
        </div>

        <div class="col-sm-10">
          <div class="input-group has-validation">
            <input
              v-model="userId"
              type="text"
              class="form-control"
              id="userId"
              name="userId"
            />
          </div>
          <p class="errorBox">{{ validate.valid_userId }}</p>
        </div>

        <div class="col-sm-2">
          <div class="input-group has-validation">
            <span class="input-group-text">&nbsp; 비밀번호 &nbsp;</span>
          </div>
        </div>

        <div class="col-sm-10">
          <div class="input-group has-validation">
            <input
              v-model="userPw"
              type="password"
              class="form-control"
              id="userPw"
              name="userPw"
            />
          </div>
          <p class="errorBox">{{ validate.valid_userPw }}</p>
        </div>

        <div class="col-sm-2">
          <div class="input-group has-validation">
            <span class="input-group-text">비밀번호 확인</span>
          </div>
        </div>

        <div class="col-sm-8">
          <div class="input-group has-validation">
            <input id="pwch" type="password" class="form-control" />
          </div>
          <p class="errorBox">{{ error_pwch }}</p>
        </div>

        <div class="col-sm-2">
          <div class="input-group has-validation">
            <button type="button" @click="userPwCk" class="btn btn-secondary">
              비밀번호확인
            </button>
          </div>
        </div>

        <div class="col-sm-2">
          <div class="input-group has-validation">
            <span class="input-group-text">핸드폰번호</span>
          </div>
        </div>

        <div class="col-sm-8">
          <div class="input-group has-validation">
            <input
              type="text"
              class="form-control"
              id="phone"
              v-model="phone"
            />
          </div>
          <p class="errorBox">{{ validate.valid_phone }}</p>
        </div>

        <div class="col-sm-2">
          <div class="input-group has-validation">
            <button type="submit" class="btn btn-secondary">
              인증코드발송
            </button>
          </div>
        </div>

        <div class="col-sm-2">
          <div class="input-group has-validation"></div>
        </div>

        <div class="col-sm-8">
          <div class="input-group has-validation">
            <input
              type="text"
              class="form-control"
              id="userphone4"
              placeholder="인증번호를 입력해 주세요."
            />
          </div>
          <p class="errorBox">{{ validate.valid_phone }}</p>
        </div>

        <div class="col-sm-2">
          <div class="input-group has-validation">
            <button type="submit" class="btn btn-secondary">
              인증코드확인
            </button>
          </div>
        </div>

        <div class="col-sm-2">
          <div class="input-group has-validation">
            <span class="input-group-text">&nbsp; 이 메 일 &nbsp;</span>
          </div>
        </div>

        <div class="col-sm-8">
          <div class="input-group has-validation">
            <input
              v-model="email"
              name="email"
              type="email"
              class="form-control"
              id="userphone4"
              placeholder="이메일을 입력해주세요."
            />
          </div>
          <p class="errorBox">{{ validate.valid_email }}</p>
        </div>

        <div class="col-sm-2">
          <div class="input-group has-validation">
            <button type="submit" class="btn btn-secondary">
              인증코드발송
            </button>
          </div>
        </div>

        <div class="col-sm-2">
          <div class="input-group has-validation"></div>
        </div>

        <div class="col-sm-8">
          <div class="input-group has-validation">
            <input
              type="text"
              class="form-control"
              id="userphone4"
              placeholder="인증번호를 입력해 주세요."
            />
          </div>
          <p class="errorBox">{{ validate.valid_email }}</p>
        </div>

        <div class="col-sm-2">
          <div class="input-group has-validation">
            <button type="submit" class="btn btn-secondary">
              인증코드확인
            </button>
          </div>
        </div>
      </div>
      <br />

      <div>
        <button
          class="btn btn-prmary1"
          type="submit"
          style="
            font-weight: 600;
            background-color: #ffc000;
            border: solid #ffc000;
          "
        >
          가입하기
        </button>
        &nbsp; &nbsp; &nbsp;
        <button
          class="btn btn-primary1"
          onclick="window.history.back()"
          style="
            font-weight: 600;
            background-color: #ffc000;
            border: solid #ffc000;
          "
        >
          취 &nbsp; &nbsp; 소
        </button>
      </div>
      <hr class="my-4" />
    </form>
    <!-- <button v-on:click="join">aa</button> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "MemberEnroll",
  data() {
    return {
      // requestBody: this.$route.query,
      // userName: "",
      userId: "",
      userPw: "",
      userName: "",
      phone: "",
      email: "",
      // form: {},
      validate: {},
      error_pwch: "",
      // isVisibleId: false,
      // isVisiblePhone: false,
      // isVisibleEmail: false,
    };
  },

  mounted() {},

  methods: {
    joinForm() {
      let apiUrl = "/enroll";
      this.form = {
        user_id: this.userId,
        user_pw: this.userPw,
        user_name: this.userName,
        phone: this.phone,
        email: this.email,
      };
      console.log(this.userId);
      console.log(this.userName);
      console.log(this.userPw);
      console.log(this.phone);
      console.log(this.email);

      axios
        .post(apiUrl, this.form)
        .then((res) => {
          console.log(res);
          this.validate = res.data;
        })
        .catch((error) => console.log(error));
    },

    //패스워드 확인 메소드
    userPwCk() {
      if (this.userPw !== this.userPwCk) {
        this.error_pwch = "비밀번호가 일치하지 않습니다. 다시 입력해주세요.";
        document.getElementById("pwch").focus();
      } else {
        this.error_pwch = "";
      }
    },

    // userIdValidate() {
    //   this.isVisibleId = true;
    //   let apiUrl = "/member/enroll";
    //   this.form = {
    //     // userName: this.userName,
    //     user_id: this.userId,
    //   };
    //   console.log("아이디 검사 : " + this.userId);

    //   axios
    //     .post(apiUrl, this.form)
    //     .then((res) => {
    //       console.log(res);
    //       this.validate = res.data;
    //     })
    //     .catch((error) => console.log(error));
    // },
    // userNameValidate() {
    //   let apiUrl = "/member/enroll";
    //   this.form = {
    //     // userName: this.userName,
    //     user_name: this.userName,
    //   };
    //   console.log("이름 검사 : " + this.userName);

    //   axios
    //     .post(apiUrl, this.form)
    //     .then((res) => {
    //       console.log(res);
    //       this.validate = res.data;
    //     })
    //     .catch((error) => console.log(error));
    // },

    // phoneValidate() {
    //   this.isVisiblePhone = true;
    //   let apiUrl = "/member/enroll";
    //   this.form = {
    //     // userName: this.userName,
    //     phone: this.phone,
    //   };
    //   console.log("전화번호 검사 : " + this.phone);

    //   axios
    //     .post(apiUrl, this.form)
    //     .then((res) => {
    //       console.log(res);
    //       this.validate = res.data;
    //     })
    //     .catch((error) => console.log(error));
    // },

    // emailValidate() {
    //   this.isVisibleEmail = true;
    //   let apiUrl = "/member/enroll";
    //   this.form = {
    //     // userName: this.userName,
    //     email: this.email,
    //   };
    //   console.log("이메일 검사 : " + this.email);

    //   axios
    //     .post(apiUrl, this.form)
    //     .then((res) => {
    //       console.log(res);
    //       this.validate = res.data;
    //     })
    //     .catch((error) => console.log(error));
    // },
  },
};
</script>

<style>
.errorBox {
  color: red;
}
</style>
