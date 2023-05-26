<template>
  <div class="d-flex gap-2 justify-content-center py-5">
    <button class="btn btn-light rounded-pill px-3" 
    type="button" 
    v-on:click="this.$router.push('/member/myinfo')">
      내정보보기
    </button>
    <button
      class="btn btn-light rounded-pill px-3"
      v-on:click="this.$router.push('/mypage/popupU')"
      type="button"
    >
      내정보수정
    </button>
    <button
      class="btn btn-light rounded-pill px-3"
      v-on:click="this.$router.push('/mypage/popupD')"
      type="button"
    >
      회원탈퇴
    </button>
  </div>
  <div class="mypage">
    <div class="sweet">
      <div class="sweet_text">my sweet home</div>
      <br />
      <div class="sweet_content" @click="popComment">
        <img alt="sweet_home" src="@/assets/sweethome.png" />
        <div
          class="Comment"
          :style="{ visibility: isCommentVisible ? 'visible' : 'hidden' }"
        >
          오늘도 나로 사느라 고생했어
        </div>
      </div>
    </div>
  </div>
  <br /><br />
</template>
<!-- <div class="letter">
      <div class="letter_text">💌 쪽지</div>
      <div class="d-flex gap-2 justify-content-center py-5">
        <button class="btn btn-light rounded-pill px-3" type="button">
          보내기
        </button>
        <button class="btn btn-light rounded-pill px-3" type="button">
          읽기
        </button>
      </div>
      <div class="send_box">
        <div class="emotion_box">
          <div class="emotion_text">오늘 나의 기분</div>
          <div class="emotions">😀 😍 🙂 😕</div>
          <div class="emotions">🙄 😥 😫 😠</div>
        </div>
        <div class="send_letter">
          <div>Dear. 😀</div>
          <br />
          <div class="send_letter_text">
            오늘의 행복한 기분을 우리 잊지말아요!
          </div>
          <button>쪽지보내기</button>
        </div>
      </div>
    </div>
    <br /><br />
    <div class="letter">
      <div class="letter_text">💌 쪽지</div>
      <div class="d-flex gap-2 justify-content-center py-5">
        <button class="btn btn-light rounded-pill px-3" type="button">
          보내기
        </button>
        <button class="btn btn-light rounded-pill px-3" type="button">
          읽기
        </button>
      </div>
      <div class="letter_contain">
        <div>편지함</div>
        <div class="letter_box">
          <div class="letters">첫번째 편지❤️‍🔥</div>
          <div class="letters">두번째 편지❤️‍🔥</div>
          <div class="letters">세번째 편지❤️‍🔥</div>
        </div>
      </div>
      <div class="send_letter read_letter">
        <div>Dear. 😀</div>
        <br />
        <div class="send_letter_text">
          오늘의 행복한 기분을<br />우리 잊지말아요!
        </div>
      </div> -->

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "MyPage",
  components: {
    // HelloWorld,
  },
  data() {
    return {
      isCommentVisible: false,
    };
  },

  methods: {
    popUPdate() {
      location.href = "/mypage/popupU";
    },

    popDelete() {
      location.href = "/mypage/popupD";
    },

    popComment() {
      this.isCommentVisible = !this.isCommentVisible;
    },
  },
};
</script>

<style scoped>
.btn {
  font-size: 40px;
}

.sweet_text,
.letter_text {
  width: 60%;
  height: 50px;
  border-radius: 10px;
  border: 2px solid black;
  margin: auto;
  line-height: 50px;
  background: orange;
  font-size: 35px;
  color: black;
}
.sweet_content {
  width: 55%;
  height: 500px;
  /* border-radius: 10px;
  border: 2px solid black; */
  margin: auto;
}

.Comment {
  width: 50%;
  border: 2px solid #3a99db;
  background: #3a99db;
  font-size: 30px;
  font-weight: bold;
  color: white;
  height: 80px;
  line-height: 80px;
  border-radius: 20px;
  margin: auto;
  position: relative;
  top: -400px;
}
/* .sweet_content div {
  visibility: hidden;
}

.sweet_content:hover {
  .sweet_content div {
    visibility: visible;
  }
} */

.sweet_content img {
  border: 5px solid black;
  width: 100%;
  height: 500px;
  border-radius: 20px;
}

/* .send_box {
  width: 55%;
  display: flex;
  margin: auto;
}
.emotion_box {
  border: 2px solid black;
  border-radius: 20px;
  height: 250px;
  font-size: 50px;
  width: 50%;
}

.send_letter {
  border: 2px solid black;
  border-radius: 20px;
  height: 250px;
  font-size: 30px;
  width: 50%;
}

.send_letter div:first-child {
  border: 2px solid black;
  margin: auto;
  border-radius: 10px;
  width: 50%;
  font-size: 40px;
  position: relative;
  top: 10px;
}
.send_letter button {
  background: #3a99db;
  position: relative;
  top: 20px;
}
.emotion_box .emotions {
  font-size: 55px;
}

.letter div {
  margin: auto;
}

.letter_contain > div:first-child {
  width: 20%;
  height: 80px;
  border-radius: 8px;
  border: 2px solid black;
  font-size: 40px;
  line-height: 80px;
  background: #3a99db;
  position: relative;
  top: -20px;
}

.letter_contain .letter_box {
  display: flex;
  width: 55%;
  height: 150px;
  border-radius: 8px;
  border: 2px solid black;
  line-height: 150px;
}

.letter_contain .letter_box div {
  border-radius: 8px;
  border: 2px solid black;
  width: 20%;
  height: 120px;
  line-height: 120px;
  font-size: 30px;
}

.letter_contain .letter_box div:first-child {
  background: #ffab40;
}

.read_letter {
  position: relative;
  top: 20px;
  background: #ffab40;
} */
</style>
