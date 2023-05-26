<!-- PageAbout.vue -->
<template>
    <div class="col-md-7 col-lg-8">
      <div class="d-flex gap-2 justify-content-center py-5">
    <button class="btn btn-light rounded-pill px-3" 
    type="button" 
    v-on:click="this.$router.push('/member/myinfo')" 
    style="font-size: 40px;">
      내정보보기
    </button>
    <button
      class="btn btn-light rounded-pill px-3" 
      v-on:click="this.$router.push('/mypage/popupU')"
      type="button"
      style="font-size: 40px;"
    >
      내정보수정
    </button>
    <button
      class="btn btn-light rounded-pill px-3"
      v-on:click="this.$router.push('/mypage/popupD')"
      type="button"
      style="font-size: 40px;"
    >
      회원탈퇴
    </button>
  </div>

        <form class="needs-validation" novalidate="" @submit.prevent="memberupdate()">
          <div class="row g-3">

            <div class="col-sm-2">
              <div class="input-group has-validation">  
                <span class="input-group-text">&nbsp; 이 &nbsp; &nbsp; 름 &nbsp;</span>
              </div>
            </div>

            <div class="col-sm-10">
                <div class="input-group has-validation">
                    <input type="text" 
                    class="form-control" 
                    :value="member.userName"
                    readonly
                    />
                </div>
            </div>

            <div class="col-sm-2">
              <div class="input-group has-validation">  
                <span class="input-group-text">&nbsp; 아 이 디 &nbsp;</span>
              </div>
            </div>

            <div class="col-sm-10">
              <div class="input-group has-validation">
                    <input type="text" 
                    class="form-control" 
                    :value="member.userId"
                    readonly
                    />
              </div>
            </div>

            <div class="col-sm-2">
              <div class="input-group has-validation">  
                <span class="input-group-text">&nbsp; 비밀번호 &nbsp;</span>
              </div>
            </div>

            <div class="col-sm-10">
              <div class="input-group has-validation">
                <input 
                type="password" 
                class="form-control" 
                id="userpw" 
                v-model="userPw"
                @change="pwRegexp"
                required
                >
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
                type="password" 
                class="form-control" 
                id="userpwck"
                v-model="userPwck"
                required
                >
              </div>
              <p class="errorBox">{{ error_pwch }}</p>
            </div>

            <div class="col-sm-2">
              <div class="input-group has-validation">
                <button
                  type="button"
                  @click="passwordck"
                  class="btn btn-secondary"
                  required
                >
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
                id="userphone1"
                v-model="phone"
                @change="phoneRegexp"
                required
                >
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
                >
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
              <div class="input-group has-validation">          
              </div>
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
          <br>
          
          <div>
            <button class="btn btn-primary1" type="submit" style="font-weight: 600; background-color: #ffc000; border: solid #ffc000">수정하기</button>
            &nbsp; &nbsp; &nbsp;
            <button class="btn btn-primary1" type="button" onclick="window.history.back()" style="font-weight: 600; background-color: #ffc000; border: solid #ffc000">취 &nbsp; &nbsp; 소</button>
          </div>
          <hr class="my-4">
        </form>
      </div>
</template>
  

  <script>
  import axios from "axios";
  let emailCode = null;
let phoneCode = null;
    export default {
      data(){
        return{
          requestBody: this.$route.query,
          member: {},
          validate: {},
          error_pw: "",
          error_pwch: "",
          error_phone: "",
          error_phoneck: "",
          error_email: "",
          error_emailck: "",
          userPw: "",
          userPwck: "",
          email: "",
          phone: "",
        };
      },
      mounted(){
        this.memberup()
      },
      methods:{
        home(){
          this.$router.push({
          path: '/'
        });
        },
        memberupdate(){
          axios
          .patch("/member/update", {
            userCode: sessionStorage.getItem("userCode"),
            userId: sessionStorage.getItem("userId"),
            userPw: this.userPw,
            phone: this.phone,
            email: this.email,
          })
          .then((res) => {
            console.log(res);
            window.alert("정보수정 성공");
            this.home();
          })
          .catch((err) => {
            console.log(err)
            window.alert("정보수정 실패");
          })

        },

            //핸드폰 정규식 체크
    phoneRegexp() {
      const validatePhone =
        /^(?:(010\d{4})|(070\d{4})|(01[1|6|7|8|9]\d{3,4}))(\d{4})$/;
      if (!validatePhone.test(this.phone) || !this.phone) {
        this.error_phone = "올바른 형식의 핸드폰 번호여야 합니다.[-제외]";
        console.log(this.phone);
        // return false;
      } else {
        this.error_phone = "";
        console.log(this.phone);
        // return true;
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
          // return true;
        })
        .catch(function (err) {
          console.log(err);
          // return false;
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
        // return false;
      } else {
        console.log(userCode.value);
        console.log(phoneCode);
        this.error_phoneck = "";
        window.alert("핸드폰 인증 성공");
        // return true;
      }
    },

    //이메일 정규식 체크
    emailRegexp() {
      const validateEmail = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
      if (!validateEmail.test(this.email) || !this.email) {
        this.error_email = "올바른 형식의 이메일 주소여야 합니다.";
        console.log(this.email);
        // return false;
      } else {
        this.error_email = "";
        console.log(this.email);
        // return true;
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
        this.error_emailck = "인증코드가 일치하지 않습니다. 다시 입력해주세요.";
        userCode.focus();
        // return false;
      } else {
        console.log(userCode.value);
        console.log(emailCode);
        this.error_emailck = "";
        window.alert("이메일 인증 성공");
        // return true;
      }
    },
        pwRegexp() {
      const validatePw = /^(?=.*\w)(?=.*[$@!_%*#)&_])[\w$@!_%*#)&_]{4,8}$/;
      if (!validatePw.test(this.userPw) || !this.userPw) {
        this.error_pw =
          "비밀번호는 4~8자리수여야 합니다. 영문자, 숫자, 특수문자를 1개 이상 포함해야 합니다.";
        console.log(this.userPw);
        // return false;
      } else {
        this.error_pw = "";
        console.log(this.userPw);
        // return true;
      }
    },
        passwordck(){
          if(this.userPw == this.userPwck){
            window.alert("비밀번호가 일치 합니다.");
            this.error_pwch = "";
          } else{
            window.alert("비밀번호가 일치하지 않습니다.");
            this.error_pwch = "비밀번호가 일치하지 않습니다. 다시 입력해주세요.";
          }
        },

      memberup(){
        this.$axios
        .get("/member/update/" + sessionStorage.getItem("userCode"), {
          params: this.requestBody,
        })
        .then((res) => {
          this.member.userId = res.data.userId;
          this.member.userName = res.data.userName;
        })
        .catch((err) => {
          console.log(err)
          alert("회원정보 조회에 실패하였습니다.");
        });
      }
    }
  }
  </script>

<style scoped>
.col-md-7{
    margin: 0 auto;
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