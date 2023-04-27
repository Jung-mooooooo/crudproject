// Vue PageHeader = new Vuew(); => 이런식으로 객체 생성되는 개념.
<!-- PageHeader.vue -->
<template>
  <div class="container">
    <header>
      <router-link to="/"
        ><img class="home_img" alt="Vue homelogo" src="@/assets/home.jpg"
      /></router-link>
      <div class="tap_box">
        <li>
          <div>
            심리/고민 상담
            <ul class="list">
              <li>
                <router-link to="/welfareProgram/welfareFacilityMap">상담센터 찾기</router-link>
              </li>
              <li>
                <router-link to="/counseling/chatting">1대1 채팅</router-link>
              </li>
              <li>
                <router-link to="/counseling/chatbot"
                  >챗봇 상담하기</router-link
                >
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div>
            자기분석 테스트
            <ul class="list">
              <li><router-link to="/test/mbti">MBTI</router-link></li>
              <li>
                <router-link to="/test/stress">스트레스 검사</router-link>
              </li>
              <li>
                <router-link to="/test/depression">우울증 검사</router-link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div>
            복지 프로그램
            <ul class="list">
              <li>
                <router-link to="/welfareProgram/touristSpot">힐링 관광 명소</router-link>
              </li>
              <li>
                <router-link to="/welfareProgram/welfareFacility"
                  >사회복지시설 연계</router-link
                >
              </li>
              <li>
                <router-link to="/welfareProgram/hobby">원데이클래스</router-link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div>
            고객센터
            <ul class="list">
              <li><router-link to="/admin/AdminNotice">공지사항</router-link></li>
              <li><router-link to="/admin/AdminFAQ">FAQ</router-link></li>
              <li><router-link to="/admin/AdminQnA">QNA</router-link></li>
            </ul>
          </div>
        </li>
        <li class="s_tap"><router-link to="/member/login">로그인</router-link></li>
        <li class="s_tap"><router-link to="/member/enroll">회원가입</router-link></li>
      </div>
    </header>
  </div>
  <hr />
</template>
<script>
export default {
  methods: {
    // toMbti() {
    //   location.href =
    //     "https://www.16personalities.com/ko/%EB%AC%B4%EB%A3%8C-%EC%84%B1%EA%B2%A9-%EC%9C%A0%ED%98%95-%EA%B2%80%EC%82%AC";
    // },
    // toStress() {
    //   location.href = "https://www.wonju.go.kr/health/contents.do?key=2409&";
    // },
    // toDepression() {
    //   location.href = "https://www.wonju.go.kr/health/contents.do?key=1694&";
    // },
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
  visibility: hidden;
  height: 40px;
  line-height: 40px;
  position: relative;
  left: -40px;
  border: 1px solid rgba(128, 128, 128, 0.3);
  background: rgba(128, 128, 128, 0.3);
}

.tap_box li div:hover {
  .list li {
    visibility: visible;
  }
}

/* .list li:hover {
  visibility: visible;
} */

.list li a {
  color: white;
}

/* .tap_box > li {
  
} */

/* $('.list').on("click"),
function() {
  .list {
    visibility: visible;
  }
} */
</style>
