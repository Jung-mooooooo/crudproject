<!-- Login.vue -->
<template>
  <div>
    <img alt="LoginLogo" src="@/assets/loginlogo.png" />
  </div>
  <div class="col-md-10 mx-auto col-lg-5">
    <form class="p-4 p-md-5 border rounded-3 bg-light">
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          placeholder="I D"
        />
        <label for="floatingInput">I D</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
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
      <!-- <button
        class="w-100 btn btn-lg btn-primary"
        type="submit"
        onclick="location.href='"
      >
        Sign up
      </button> -->
      <router-link class="w-100 btn btn-lg btn-primary" to="/loginhome">
        Sign up</router-link
      >
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
export default {};
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
