<!-- PageAbout.vue -->
<template>
  <div class="col-md-7 col-lg-6">
    <div>
      <h1>I D 찾기</h1>
    </div>
    <br />
    <div class="dididid">
      <button
        class="btn btn-outline-secondary d-inline-flex align-items-center"
        type="button"
        onclick="location.href='/member/findid'"
      >
        &nbsp; &nbsp; I D 찾기 &nbsp; &nbsp;
      </button>
      &nbsp; &nbsp; &nbsp; &nbsp;
      <button
        class="btn btn-outline-secondary d-inline-flex align-items-center"
        type="button"
        onclick="location.href='/member/findpw'"
      >
        &nbsp; &nbsp; P W 찾기 &nbsp; &nbsp;
      </button>
    </div>
    <br />
    <hr style="border: 5px solid gray" />
    <br />
    <form
      class="needs-validation"
      novalidate=""
      @submit.prevent="findForPhone"
      accept-charset="utf-8"
    >
      <div class="row g-3">
        <p class="h2">
          <span class="badge bg-primary1">&nbsp; 핸드폰으로 찾기 &nbsp;</span>
        </p>
        <div class="col-sm-2">
          <div class="input-group has-validation">
            <span class="input-group-text">
              &nbsp; &nbsp; 이 &nbsp; &nbsp; 름 &nbsp; &nbsp;</span
            >
          </div>
        </div>

        <div class="col-10">
          <div class="input-group has-validation">
            <input
              type="text"
              class="form-control num"
              id="userName"
              v-model="userName"
              placeholder="이름을 입력해 주세요."
            />
          </div>
        </div>
        <div :style="{ visibility: isCommentVisible1 ? 'visible' : 'hidden' }">
          이름을 입력하세요.
        </div>

        <div class="col-sm-2">
          <div class="input-group has-validation">
            <span class="input-group-text"
              >&nbsp; &nbsp; 핸드폰번호 &nbsp; &nbsp;</span
            >
          </div>
        </div>

        <div class="col-sm-8">
          <div class="input-group has-validation">
            <input
              type="text"
              class="form-control num"
              id="phone"
              v-model="phone"
              placeholder="전화번호를 입력해 주세요."
            />
          </div>
        </div>

        <div class="col-sm-2">
          <div class="input-group has-validation">
            <button type="button" class="btn btn-secondary" @click="phoneAuth">
              인증코드발송
            </button>
          </div>
        </div>
        <div :style="{ visibility: isCommentVisible1 ? 'visible' : 'hidden' }">
          전화번호를 입력하세요.
        </div>

        <div class="col-sm-2">
          <div class="input-group has-validation"></div>
        </div>

        <div class="col-sm-8">
          <div class="input-group has-validation">
            <input
              type="text"
              class="form-control num"
              id="phoneAuthNumber"
              v-model="phoneAuthNumber"
              placeholder="인증번호를 입력해 주세요."
            />
          </div>
        </div>

        <div class="col-sm-2">
          <div class="input-group has-validation">
            <button
              type="button"
              class="btn btn-secondary"
              @click="phoneAuthCheck"
            >
              인증코드확인
            </button>
          </div>
        </div>
        <div :style="{ visibility: isCommentVisible1 ? 'visible' : 'hidden' }">
          인증코드를 입력하세요.
        </div>

        <div>
          <button
            class="btn btn-primary1"
            type="submit"
            style="
              font-weight: 600;
              background-color: #ffc000;
              border: solid #ffc000;
            "
          >
            확 &nbsp; &nbsp; 인
          </button>
          &nbsp; &nbsp; &nbsp;
          <button
            class="btn btn-primary1"
            type="button"
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
      </div>
    </form>
  </div>

  <br /><br />
  <div class="col-md-7 col-lg-6">
    <form
      class="needs-validation"
      @submit.prevent="findForEmail"
      novalidate=""
      accept-charset="utf-8"
    >
      <div class="row g-3">
        <p class="h2">
          <span class="badge bg-primary1">&nbsp; 이메일로 찾기 &nbsp;</span>
        </p>

        <div class="col-sm-2">
          <div class="input-group has-validation">
            <span class="input-group-text">
              &nbsp; &nbsp; 이 &nbsp; &nbsp; 름 &nbsp; &nbsp;</span
            >
          </div>
        </div>

        <div class="col-10">
          <div class="input-group has-validation">
            <input
              type="text"
              class="form-control num"
              id="userName"
              v-model="userName2"
              placeholder="이름을 입력해 주세요."
            />
          </div>
        </div>
        <div :style="{ visibility: isCommentVisible2 ? 'visible' : 'hidden' }">
          이름을 입력하세요.
        </div>

        <div class="col-sm-2">
          <div class="input-group has-validation">
            <span class="input-group-text"
              >&nbsp; &nbsp; 이 &nbsp; 메 &nbsp; 일 &nbsp; &nbsp;</span
            >
          </div>
        </div>

        <div class="col-sm-8">
          <div class="input-group has-validation">
            <input
              type="email"
              class="form-control"
              id="email"
              v-model="email"
              placeholder="이메일을 입력해주세요."
            />
          </div>
        </div>

        <div class="col-sm-2">
          <div class="input-group has-validation">
            <button type="button" @click="emailAuth" class="btn btn-secondary">
              인증코드발송
            </button>
          </div>
        </div>

        <div :style="{ visibility: isCommentVisible2 ? 'visible' : 'hidden' }">
          이메일을 입력하세요.
        </div>

        <div class="col-sm-2">
          <div class="input-group has-validation"></div>
        </div>

        <div class="col-sm-8">
          <div class="input-group has-validation">
            <input
              type="text"
              class="form-control"
              v-model="eamilAuthNumber"
              placeholder="인증번호를 입력해 주세요."
            />
          </div>
        </div>

        <div class="col-sm-2">
          <div class="input-group has-validation">
            <button
              type="button"
              @click="emailAuthCheck"
              class="btn btn-secondary"
            >
              인증코드확인
            </button>
          </div>
        </div>
        <div :style="{ visibility: isCommentVisible2 ? 'visible' : 'hidden' }">
          인증코드를 입력하세요.
        </div>

        <div>
          <button
            class="btn btn-primary1"
            type="button"
            style="
              font-weight: 600;
              background-color: #ffc000;
              border: solid #ffc000;
            "
            @click="findForEmail"
          >
            확 &nbsp; &nbsp; 인
          </button>
          &nbsp; &nbsp; &nbsp;
          <button
            class="btn btn-primary1"
            type="button"
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
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
let emailCode = null;
let phoneCode = null;
export default {
  name: "MemberFindId",
  data() {
    return {
      isCommentVisible1: false,
      isCommentVisible2: false,
      userName: "",
      userName2: "",
      phone: "",
      email: "",
      phoneAuthNumber: "",
      eamilAuthNumber: "",
    };
  },
  mounted() {},
  methods: {
    //핸드폰 인증
    phoneAuth() {
      //핸드폰번호 입력 확인
      let p = document.getElementById("phone");
      let apiUrl = "/enroll/phone";
      console.info(p.value);
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
        })
        .catch(function (err) {
          console.log(err);
          // return false;
        });
    },

    //핸드폰 인증코드 체크
    phoneAuthCheck() {
      //인증코드 입력 확인
      let userCode = document.getElementById("phoneAuthNumber");
      if (userCode.value != null) {
        if (userCode.value != phoneCode) {
          console.log("유저입력 : " + userCode);
          console.log("핸드폰 전송온 : " + phoneCode);
          alert("인증코드가 일치하지 않습니다. 다시 입력해주세요.");
          // return false;
        } else {
          alert("확인되었습니다.");
          console.log(userCode.value);
          console.log(phoneCode);
          // return true;
        }
      } else {
        alert("인증코드를 입력하세요.");
      }
    },
    //데이터 입력 확인
    isEmpty1(data) {
      if (data === "" || data === null || data === undefined) {
        this.isCommentVisible1 = true;
        return true;
      } else {
        this.isCommentVisible1 = false;
        return false;
      }
    },

    findForPhone() {
      console.log(this.userName);
      console.log(this.phone);
      console.log(this.phoneAuthNumber);
      if (
        !this.isEmpty1(this.userName) == true &&
        !this.isEmpty1(this.phone) == true &&
        !this.isEmpty1(this.phoneAuthNumber) == true
      ) {
        console.log("핸드폰으로 아이디찾기 : " + this.phone);
        axios
          .get("/find/id/" + this.userName + "/phone/" + this.phone)
          .then(function (res) {
            console.log(res);
            console.log(res.data);
            alert("ID는 [" + res.data + "]입니다.");
          })
          .catch(function (err) {
            console.log(err);
            // return false;
          });
      } else {
        alert("빈칸을 모두 채워주세요.");
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
          // return true;
        })
        .catch(function (err) {
          console.log(err);
          // return false;
        });
    },
    //이메일 인증코드 체크
    emailAuthCheck() {
      let userCode = document.getElementById("eamilAuthNumber");
      if (userCode.value !== emailCode) {
        console.log("유저입력 : " + userCode.value);
        console.log("메일로 전송온 : " + emailCode);
        alert("인증코드가 일치하지 않습니다. 다시 입력해주세요.");
        // return false;
      } else {
        alert("확인되었습니다.");
        console.log(userCode.value);
        console.log(emailCode);
        this.error_emailck = "";
        // return true;
      }
    },

    isEmpty2(data) {
      if (data === "" || data === null || data === undefined) {
        this.isCommentVisible2 = true;
        return true;
      } else {
        this.isCommentVisible2 = false;
        return false;
      }
    },

    findForEmail() {
      console.log(this.userName2);
      console.log(this.email);
      console.log(this.eamilAuthNumber);
      if (
        !this.isEmpty2(this.userName2) == true &&
        !this.isEmpty2(this.email) == true &&
        !this.isEmpty2(this.eamilAuthNumber) == true
      ) {
        console.log("이메일로 아이디찾기 : " + this.email);
        axios
          .get("/find/id/" + this.userName2 + "/email/" + this.email)
          .then(function (res) {
            console.log(res);
            console.log(res.data);
            alert("ID는 [" + res.data + "]입니다.");
          })
          .catch(function (err) {
            console.log(err);
            // return false;
          });
      } else {
        alert("빈칸을 모두 채워주세요.");
      }
    },
  },
};
</script>

<style>
.col-md-7 {
  margin: 0 auto;
}
.badge {
  width: 290px;
  height: 40px;
}
.btn {
  --bs-btn-hover-bg: #0b5ed7;
}
.btn-primary1 {
  width: 100px;
  height: 40px;
  --bs-btn-color: #fff;
  --bs-btn-bg: #0d6efd;
  --bs-btn-border-color: #0d6efd;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #913012;
  --bs-btn-hover-border-color: #ab2221;
  --bs-btn-focus-shadow-rgb: 49, 132, 253;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #0a58ca;
  --bs-btn-active-border-color: #0a53be;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #fff;
  --bs-btn-disabled-bg: #0d6efd;
  --bs-btn-disabled-border-color: #0d6efd;
}
.bg-primary1 {
  --bs-bg-opacity: 1;
  background-color: #3a99db;
}
</style>
