// Vue PageHeader = new Vuew(); => 이런식으로 객체 생성되는 개념.

<!-- PageHeader.vue -->
<template>
  <div class="container">
    <header>
      <router-link to="/"
        ><img class="home_img" alt="Vue homelogo" src="@/assets/home.jpg"
      /></router-link>
      <div class="tap_box">
        <li><router-link to="/">심리/고민 상담</router-link></li>
        <li><router-link to="/">자기분석 테스트</router-link></li>
        <li><router-link to="/">복지 프로그램</router-link></li>
        <li><router-link to="/">고객센터</router-link></li>
        <li class="s_tap"><router-link to="/">로그인</router-link></li>
        <li class="s_tap"><router-link to="/">회원가입</router-link></li>
      </div>
    </header>
  </div>
  <hr />
</template>

<script>
export default {};
</script>

<style scoped>
header {
  display: flex;
}

.home_img {
  width: 250px;
  height: 250px;
  position: relative;
  left: -200px;
}
.tap_box {
  display: flex;
  margin: auto;
}

li {
  line-height: 80px;
  list-style: none;
  width: 180px;
  height: 80px;
  border-radius: 10px;
  border: 1px solid black;
  margin: 10px;
  font-size: x-large;
}
.s_tap {
  width: 120px;
  height: 60px;
  line-height: 60px;
  margin-top: 20px;
}

a {
  text-decoration: none;
  color: black;
}
</style>
