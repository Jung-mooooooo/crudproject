// Vue PageHeader = new Vuew(); => 이런식으로 객체 생성되는 개념.

<!-- PageHeader.vue -->
<template>
  <div class="container">
    <header>
      <router-link to="/">
	<img class="home_img" alt="Vue homelogo" src="@/assets/home.jpg"/>
      </router-link>
      <div class="tap_box">
        <li>
          <router-link to="/counseling">
	회원관리
          </router-link>
        </li>
        <li>
	게시물관리
            <ul class="list">
              <li><router-link to="/admin/counselling">심리/고민상담</router-link></li>
              <li><router-link to="/admin/welfareProgram">복지프로그램</router-link></li>
            </ul>
        </li>
        <li>
        고객센터
            <ul class="list">
              <li><router-link to="/cs/notice">공지사항</router-link></li>
              <li><router-link to="/cs/faq">FAQ</router-link></li>
              <li><router-link to="/cs/qna">QNA</router-link></li>
            </ul>
        </li>
        <li class="s_tap"><router-link to="/">로그인</router-link></li>
        <li class="s_tap"><router-link to="/">회원가입</router-link></li>

      </div>
    </header>
  </div>
  <hr />
</template>

<script>
export default {
  methods: {
    toMbti() {
      location.href =
        "https://www.16personalities.com/ko/%EB%AC%B4%EB%A3%8C-%EC%84%B1%EA%B2%A9-%EC%9C%A0%ED%98%95-%EA%B2%80%EC%82%AC";
    },

    toStress() {
      location.href = "https://www.wonju.go.kr/health/contents.do?key=2409&";
    },

    toDepression() {
      location.href = "https://www.wonju.go.kr/health/contents.do?key=1694&";
    },
  },
};
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

.list {
  margin: auto;
}

.list li {
  visibility: visible;
  height: 40px;
  line-height: 40px;
  position: relative;
  left: -40px;
  border: 1px solid rgba(128, 128, 128, 0.3);
  background: rgba(128, 128, 128, 0.3);
}

.list li a {
  color: white;
}

/* $('.list').on("click"),
function() {
  .list {
    visibility: visible;
  }
} */
</style>
