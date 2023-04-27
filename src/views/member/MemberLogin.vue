<!-- Login.vue -->
<template>
  <div>
    <img alt="LoginLogo" src="@/assets/loginlogo.png">
  </div>
<div class="col-md-10 mx-auto col-lg-5">
        <form class="p-4 p-md-5 border rounded-3 bg-light">
          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingInput" placeholder="I D">
            <label for="floatingInput">I D</label>
          </div>
          <div class="form-floating mb-3">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
            <label for="floatingPassword">Password</label>
          </div>
          <div class="checkbox mb-3">
            <a ref="/">아이디 찾기</a>
            <a ref="/"> | 비밀번호 찾기</a>
          </div>
          <button class="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
          <hr class="my-4">
          <small class="text-muted">Better then talk 😊</small>
        </form>
      </div>
</template>
  
  <script>
export default {

}
  </script>

<style>


</style>