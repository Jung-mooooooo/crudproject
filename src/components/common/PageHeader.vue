// Vue PageHeader = new Vuew(); => 이런식으로 객체 생성되는 개념.
<!-- PageHeader.vue -->
<template>
  <div class="container">
    <header>
      <div class="tap_box">
          <ul>
            <div class="logoimg" v-if="!$store.state.token">
              <router-link to="/">
                <img class="home_img" alt="Vue homelogo" src="@/assets/home.jpg"/>
              </router-link>
            </div>
            <div class="logoimg" v-else>
              <router-link to="/loginhome">
                <img class="home_img" alt="Vue homelogo" src="@/assets/home.jpg"/>
              </router-link>
            </div>
          </ul>
          <li>
            <div>
              심리/고민 상담
              <ul class="list">
                <li>
                  <router-link to="/welfareProgram/counsellingCenterMap">상담센터 찾기</router-link>
                </li>
                <li>
                  <router-link to="/counseling/chattinglist">1대1 채팅</router-link>
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
                <router-link to="/welfareProgram/touristSpot"
                  >힐링 관광 명소</router-link
                >
              </li>
              <li>
                <router-link to="/welfareProgram/welfareFacility"
                  >사회복지시설</router-link
                >
              </li>
              <li>
                <router-link to="/welfareProgram/hobby"
                  >취미활동</router-link
                >
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div>
            고객센터
            <ul class="list">
              <li>
                <router-link to="/cs/Notice">공지사항</router-link>
              </li>
              <li><router-link to="/cs/FAQ">FAQ</router-link></li>
              <li><router-link to="/cs/QnA">QNA</router-link></li>
            </ul>
          </div>
        </li>
        <div v-if="!$store.state.token">
          <li class="s_tap">
            <router-link to="/member/login">로그인</router-link>
          </li>
          <li class="s_tap">
            <router-link to="/member/enroll">회원가입</router-link>
          </li>
        </div>
        <div v-else>
          <li class="s_tap">
            <button type="button" @click="logout()">로그아웃</button>
          </li>
        </div>
      </div>
    </header>
  </div>
  <hr />
</template>
<script>
import store from "@/store";
import router from "@/router/index";

export default {
  methods: {
    logout(){
      store.commit('setToken', null);
      sessionStorage.removeItem('accessToken');
      sessionStorage.clear();
      localStorage.clear();
      alert('로그아웃 하셨습니다.');
      router.push({path: '/'})
    }
  }
}




// export default {
//   data(){
//     return{
//       aa: "",
//     }
//   },
//   watch: {
//     '$route'() {
//         this.getlocation();
//     }
//   },
//   mounted(){
//     this.getlocation();
//   },
//   methods: {
//     getlocation(){
//       if(localStorage.getItem("token") !== 'undefined' ){
//         this.aa = 0;
//       }else{ 
//         this.aa = 1;
//       }
//     },

//     removeItem(){
//       localStorage.clear();
//       // this.$router.go(0);
//       this.$router.push({
//         name: "PageHome"
//       });
//     },
//   },
// };
</script>

<style scoped>
.container {
  /* max-width: 100%;
  width: 1300px;
  margin-left: auto;
  margin-right: auto; */
}
header {
  display: flex;
  max-width: 100%;
  width: 1500px;
}

.home_img {
  width: 200px;
  height: 200px;
  position: relative;
  left: -80px;
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
  font-size: 15pt;
  font-weight: 600;
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
  display: block;
}

.list {
  margin: auto;
  position: relative;
  top: -55px;
}

.list li {
  width: 150px;
  visibility: hidden;
  height: 40px;
  line-height: 40px;
  position: relative;
  left: -40px;
  border: 1px solid rgba(128, 128, 128, 0.3);
  background: rgba(128, 128, 128, 0.3);
}

.tap_box li {
  position: relative;
  top: 55px;
}

.tap_box li div:hover {
  .list li {
    visibility: visible;
  }
}

.list li a {
  color: white;
}
</style>
