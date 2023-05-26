<!-- PageHome.vue -->
<template>
  <div class="home">
    <div class="user_box">
      <div class="emotion_box">
        <div class="emotion_text">오늘 나의 기분</div>
        <div class="emotions">
          <!-- <span @click="selectEmotion('neutral')">🙂</span> -->
          <span @click="selectEmotion(1)">😡</span>
          <span @click="selectEmotion(2)">😔</span>
          <span @click="selectEmotion(3)">😆</span>
          <span @click="selectEmotion(4)">😍</span>
        </div>
        <div class="emotions">
          <span @click="selectEmotion(5)">🤕</span>
          <span @click="selectEmotion(6)">😥</span>
          <span @click="selectEmotion(7)">😨</span>
          <span @click="selectEmotion(8)">🥱</span>
        </div>
        <!-- <div
      class="Comment"
      :style="{ visibility: isCommentVisible ? 'visible' : 'hidden' }"
    ></div> -->
      </div>

      <div class="text_box">
        <div>내가 쓴 글</div>
        <div>
          <div>2</div>
          <div>개</div>
        </div>
      </div>
      <div v-on:click="this.$router.push('/mypage')" class="mypage">
        my page
      </div>
    </div>
  </div>

  <div class="container px-4 py-5" id="custom-cards">
    <h2 class="pb-2 border-bottom">털어놓고 싶은 순간</h2>

    <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
      <div class="col">
        <div
          class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
          style="background-image: url('unsplash-photo-1.jpg')"
        >
          <div
            v-on:click="this.$router.push('/welfareProgram/welfareFacility')"
            class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1"
          >
            <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">상담센터 찾기</h3>
          </div>
        </div>
      </div>

      <div class="col">
        <div
          class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
          style="background-image: url('unsplash-photo-2.jpg')"
        >
          <div
            v-on:click="this.$router.push('/counseling/chatting')"
            class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1"
          >
            <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">1대1 채팅</h3>
          </div>
        </div>
      </div>

      <div class="col">
        <div
          class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
          style="background-image: url('unsplash-photo-3.jpg')"
        >
          <div
            v-on:click="this.$router.push('/counseling/chatbot')"
            class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1"
          >
            <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">챗봇(베베)</h3>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container px-4 py-5" id="custom-cards">
    <h2 class="pb-2 border-bottom">나를 더 자세히 알고싶다면</h2>

    <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
      <div class="col">
        <div
          class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
          style="background-image: url('unsplash-photo-1.jpg')"
        >
          <div
            v-on:click="this.$router.push('/test/mbti')"
            class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1"
          >
            <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">MBTI</h3>
          </div>
        </div>
      </div>

      <div class="col">
        <div
          class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
          style="background-image: url('unsplash-photo-2.jpg')"
        >
          <div
            v-on:click="this.$router.push('/test/stress')"
            class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1"
          >
            <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">스트레스 검사</h3>
          </div>
        </div>
      </div>

      <div class="col">
        <div
          class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
          style="background-image: url('unsplash-photo-3.jpg')"
        >
          <div
            v-on:click="this.$router.push('/test/depression')"
            class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1"
          >
            <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">우울증 검사</h3>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container px-4 py-5" id="custom-cards">
    <h2 class="pb-2 border-bottom">도움이 필요해</h2>

    <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
      <div class="col">
        <div
          class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
          style="background-image: url('unsplash-photo-1.jpg')"
        >
          <div
            v-on:click="this.$router.push('/welfareProgram/touristSpot')"
            class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1"
          >
            <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">힐링 관광명소</h3>
          </div>
        </div>
      </div>

      <div class="col">
        <div
          class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
          style="background-image: url('unsplash-photo-2.jpg')"
        >
          <div
            v-on:click="this.$router.push('/welfareProgram/welfareFacility')"
            class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1"
          >
            <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">사회복지시설</h3>
          </div>
        </div>
      </div>

      <div class="col">
        <div
          class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
          style="background-image: url('unsplash-photo-3.jpg')"
        >
          <div
            v-on:click="this.$router.push('/welfareProgram/hobby')"
            class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1"
          >
            <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">원데이클래스</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "PageHomeLogin",
  data() {
    return {
      isCommentVisible: false,
      emotionCat: "",
      userCode: "",
    };
  },
  methods: {
    // popComment() {
    //   this.isCommentVisible = !this.isCommentVisible;
    // },

    selectEmotion(emo) {
      let apiUrl = "/emotion";
      let emotionCat = null;
      if (emo == 1) {
        emotionCat = "angry";
      } else if (emo == 2) {
        emotionCat = "anxious";
      } else if (emo == 3) {
        emotionCat = "excited";
      } else if (emo == 4) {
        emotionCat = "happy";
      } else if (emo == 5) {
        emotionCat = "lonely";
      } else if (emo == 6) {
        emotionCat = "sad";
      } else if (emo == 7) {
        emotionCat = "scary";
      } else if (emo == 8) {
        emotionCat = "tired";
      } else {
        emotionCat = "neutral";
      }
      console.log(emo);

      this.form = {
        emotionCat: emotionCat,
        userCode: sessionStorage.getItem("userCode"),
      };

      axios
        .patch(apiUrl, this.form)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));

      //this.popComment();
      // this.saveEmotionToTable(emotion);
    },
    saveEmotionToTable(emotion) {
      let apiUrl = '/home/emotion'
        this.form = {

        }

        this.$axios.post(apiUrl, this.form)

      // const userCode = 1; // Replace with actual user code
      // const data = {
      //   userCode: this.userCode,
      //   emotion: this.emotion,
      // };
      // fetch("/home/emotion", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(data),
      // })
      //   .then((response) => response.json())
      //   .then((result) => {

      //     console.log(result);
      //   })
      //   .catch((error) => {

      //     console.error(error);
      //   });
    },
     },
};
</script>
<style scoped>
.user_box {
  margin: auto;
  width: 2000px;
  border: 2px solid black;
  border-radius: 35px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.user_box > div {
  width: 700px;
  height: 450px;
}

.emotion_box {
  border: 1px solid black;
  border-radius: 20px;
  height: 400px;
  font-size: 92px;
}

.emotion_box.emotions > span {
  display: inline-flex;
  justify-content: space-between;
}

span {
  margin: 20px;
  font-size: 110px;
}

/* .emotion_box div:last-child {
  border: 5px solid red;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  position: relative;
  top: -163px;
  left: 155px;
} */
.text_box {
  border: 1px solid black;
  border-radius: 20px;
  font-size: 90px;
}

.text_box div:first-child {
  position: relative;
  top: 30px;
}

.text_box div:last-child {
  position: relative;
  top: 20px;
  display: flex;
}

.text_box div:last-child div {
  width: 300px;
  height: 100px;
  margin: auto;
  line-height: 150px;
}

.text_box div:last-child div:first-child {
  font-size: 100px;
  color: orange;
  position: relative;
  right: -20%;
  top: 15px;
}

.user_box > .mypage {
  border: 5px solid orange;
  border-radius: 20px;
  height: 350px;
  width: 350px;
  font-size: 80px;
  font-weight: bold;
  line-height: 300px;
  color: rgb(255, 165, 0);
}

.user_box > .mypage:hover {
  background: rgba(255, 165, 0, 0.9);
  color: white;
}

img {
  width: 90%;
}
</style>
