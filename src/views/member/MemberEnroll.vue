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
              required
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
              required
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
              @change="pwRegexp"
              type="password"
              class="form-control"
              id="userPw"
              required
            />
          </div>
          <p class="errorBox">{{ validate.valid_userPw }} {{ error_pw }}</p>
        </div>

        <div class="col-sm-2">
          <div class="input-group has-validation">
            <span class="input-group-text">비밀번호 확인</span>
          </div>
        </div>

        <div class="col-sm-8">
          <div class="input-group has-validation">
            <input
              id="userPwch"
              type="password"
              class="form-control"
              required
              @change="userPwCk"
            />
          </div>
          <p class="errorBox">{{ error_pwch }}</p>
        </div>

        <div class="col-sm-2">
          <div class="input-group has-validation">
            <!-- <button
              type="button"
              @click="userPwCk"
              class="btn btn-secondary"
              required
            >
              비밀번호확인
            </button> -->
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
              @change="phoneRegexp"
              required
            />
          </div>
          <p class="errorBox">{{ error_phone }} {{ validate.valid_phone }}</p>
        </div>

        <div class="col-sm-2">
          <div class="input-group has-validation">
            <button
              type="button"
              class="btn btn-secondary"
              @click="phoneAuth"
              required
            >
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
              id="phoneAuthNumber"
              required
              placeholder="인증번호를 입력해 주세요."
            />
          </div>
          <p class="errorBox">{{ error_phoneck }}</p>
        </div>

        <div class="col-sm-2">
          <div class="input-group has-validation">
            <button
              type="button"
              class="btn btn-secondary"
              @click="phoneAuthCheck"
              required
            >
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
              @change="emailRegexp"
              type="email"
              class="form-control"
              id="email"
              required
              placeholder="이메일을 입력해주세요."
            />
          </div>
          <p class="errorBox">{{ error_email }}{{ validate.valid_email }}</p>
        </div>

        <div class="col-sm-2">
          <div class="input-group has-validation">
            <button
              type="button"
              @click="emailAuth"
              class="btn btn-secondary"
              required
            >
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
              id="eamilAuthNumber"
              required
              placeholder="인증번호를 입력해 주세요."
            />
          </div>
          <p class="errorBox">{{ error_emailck }}</p>
        </div>

        <div class="col-sm-2">
          <div class="input-group has-validation">
            <button
              type="button"
              @click="emailAuthCheck"
              class="btn btn-secondary"
              required
            >
              인증코드확인
            </button>
          </div>
        </div>
      </div>
      <br />

      <div>
        <button
          id="submitBtn"
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
  </div>
</template>

<script>
import axios from "axios";
let emailCode = null;
let phoneCode = null;
export default {
  name: "MemberEnroll",
  data() {
    return {
      userId: "",
      userPw: "",
      userName: "",
      phone: "",
      email: "",
      validate: {},
      error_pw: "",
      error_pwch: "",
      error_phone: "",
      error_phoneck: "",
      error_email: "",
      error_emailck: "",
    };
  },

  mounted() {},

  methods: {
    joinForm() {
      let errorcheck = document.getElementsByClassName("errorBox");
      let apiUrl = "/enroll";
      this.form = {
        user_id: this.userId,
        user_pw: this.userPw,
        user_name: this.userName,
        phone: this.phone,
        email: this.email,
      };

      axios
        .post(apiUrl, this.form)
        .then((res) => {
          console.log(res);
          this.validate = res.data;
          // status: 200
          // if (
          //   errorcheck.value == null ||
          //   (errorcheck.value == "" && res.data == "saveOk")
          // ) {
          //   this.$router.push({ name: "MemberLogin" });
          // } else {
          //   alert("필수조건을 충족하여 회원가입을 진행해주세요.");
          // }
        })
        .catch((error) => console.log(error));
    },

    // checkAll() {
    //   if(!checkId(form.userId.value)){
    //     return false;
    //   }else if(!checkPw(form.userid.value, form.userPw.value, form.userPwch.value)){
    //     return false;
    //   }else if(!checkName(form.userName.value)){
    //     return false;
    //   }else if(!check)
    // },

    //패스워드 정규식 체크
    pwRegexp() {
      const validatePw = /^(?=.*\w)(?=.*[$@!_%*#)&_])[\w$@!_%*#)&_]{4,8}$/;
      if (!validatePw.test(this.userPw) || !this.userPw) {
        this.error_pw =
          "비밀번호는 4~8자리수여야 합니다. 영문자, 숫자, 특수문자를 1개 이상 포함해야 합니다.";
        console.log(this.userPw);
        return false;
      } else {
        this.error_pw = "";
        console.log(this.userPw);
        return true;
      }
    },

    //패스워드 확인 메소드
    userPwCk() {
      let pw = document.getElementById("userPw");
      let pw2 = document.getElementById("userPwch");
      let p = document.getElementById("phone");
      if (pw.value !== pw2.value) {
        console.log(pw.value);
        console.log(pw2.value);
        this.error_pwch = "비밀번호가 일치하지 않습니다. 다시 입력해주세요.";
        pw2.focus();
        return false;
      } else {
        console.log(pw.value);
        console.log(pw2.value);
        this.error_pwch = "";
        p.focus();
        return true;
      }
    },

    //핸드폰 정규식 체크
    phoneRegexp() {
      const validatePhone =
        /^(?:(010\d{4})|(070\d{4})|(01[1|6|7|8|9]\d{3,4}))(\d{4})$/;
      if (!validatePhone.test(this.phone) || !this.phone) {
        this.error_phone = "올바른 형식의 핸드폰 번호여야 합니다.[-제외]";
        console.log(this.phone);
        return false;
      } else {
        this.error_phone = "";
        console.log(this.phone);
        return true;
      }
    },

    //핸드폰 인증
    phoneAuth() {
      let p = document.getElementById("phoneAuthNumber");
      let apiUrl = "/enroll/phone";
      console.log("핸드폰 인증 : " + this.phone);
      axios
        .get(apiUrl, {
          params: {
            phone: this.phone,
          },
        })
        .then(function (res) {
          console.log(res);
          console.log(res.data);
          phoneCode = res.data;
          p.focus(); //성공시,
          return true;
        })
        .catch(function (err) {
          console.log(err);
          return false;
        });
    },

    //핸드폰 인증코드 체크
    phoneAuthCheck() {
      let userCode = document.getElementById("phoneAuthNumber");
      if (userCode.value != phoneCode) {
        console.log("유저입력 : " + userCode);
        console.log("핸드폰 전송온 : " + phoneCode);
        this.error_phoneck = "인증코드가 일치하지 않습니다. 다시 입력해주세요.";
        userCode.focus();
        return false;
      } else {
        console.log(userCode.value);
        console.log(phoneCode);
        this.error_phoneck = "";
        return true;
      }
    },

    //이메일 정규식 체크
    emailRegexp() {
      const validateEmail = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
      if (!validateEmail.test(this.email) || !this.email) {
        this.error_email = "올바른 형식의 이메일 주소여야 합니다.";
        console.log(this.email);
        return false;
      } else {
        this.error_email = "";
        console.log(this.email);
        return true;
      }
    },

    //이메일 인증
    emailAuth() {
      let e = document.getElementById("eamilAuthNumber");
      let apiUrl = "/enroll/email";
      console.log("이메일 인증 : " + this.email);
      axios
        .get(apiUrl, {
          params: {
            email: this.email,
          },
        })
        .then(function (res) {
          console.log(res);
          console.log(res.data);
          emailCode = res.data;
          e.focus();
          return true;
        })
        .catch(function (err) {
          console.log(err);
          return false;
        });
    },
    //이메일 인증코드 체크
    emailAuthCheck() {
      let userCode = document.getElementById("eamilAuthNumber");
      if (userCode.value !== emailCode) {
        console.log("유저입력 : " + userCode.value);
        console.log("메일로 전송온 : " + emailCode);
        this.error_emailck = "인증코드가 일치하지 않습니다. 다시 입력해주세요.";
        userCode.focus();
        return false;
      } else {
        console.log(userCode.value);
        console.log(emailCode);
        this.error_emailck = "";
        return true;
      }
    },
  },
};
</script>

<style>
.errorBox {
  color: red;
}
</style>
