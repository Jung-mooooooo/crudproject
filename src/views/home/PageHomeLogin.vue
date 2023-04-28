<!-- PageHome.vue -->
<template>
  <div class="home">
    <div class="user_box">
      <div class="emotion_box" @click="popComment">
        <div class="emotion_text">오늘 나의 기분</div>
        <div class="emotions">😀 😍 🙂 😕</div>
        <div class="emotions">🙄 😥 😫 😠</div>
        <div
          class="Comment"
          :style="{ visibility: isCommentVisible ? 'visible' : 'hidden' }"
        ></div>
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
            <!-- <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
                <img
                  src="https://github.com/twbs.png"
                  alt="Bootstrap"
                  width="32"
                  height="32"
                  class="rounded-circle border border-white"
                />
              </li>
              <li class="d-flex align-items-center me-3">
                <svg class="bi me-2" width="1em" height="1em">
                  <use xlink:href="#geo-fill"></use>
                </svg>
                <small>Earth</small>
              </li>
              <li class="d-flex align-items-center">
                <svg class="bi me-2" width="1em" height="1em">
                  <use xlink:href="#calendar3"></use>
                </svg>
                <small>3d</small>
              </li>
            </ul> -->
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
            <!-- <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
                <img
                  src="https://github.com/twbs.png"
                  alt="Bootstrap"
                  width="32"
                  height="32"
                  class="rounded-circle border border-white"
                />
              </li>
              <li class="d-flex align-items-center me-3">
                <svg class="bi me-2" width="1em" height="1em">
                  <use xlink:href="#geo-fill"></use>
                </svg>
                <small>Pakistan</small>
              </li>
              <li class="d-flex align-items-center">
                <svg class="bi me-2" width="1em" height="1em">
                  <use xlink:href="#calendar3"></use>
                </svg>
                <small>4d</small>
              </li>
            </ul> -->
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
            <!-- <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
                <img
                  src="https://github.com/twbs.png"
                  alt="Bootstrap"
                  width="32"
                  height="32"
                  class="rounded-circle border border-white"
                />
              </li>
              <li class="d-flex align-items-center me-3">
                <svg class="bi me-2" width="1em" height="1em">
                  <use xlink:href="#geo-fill"></use>
                </svg>
                <small>California</small>
              </li>
              <li class="d-flex align-items-center">
                <svg class="bi me-2" width="1em" height="1em">
                  <use xlink:href="#calendar3"></use>
                </svg>
                <small>5d</small>
              </li>
            </ul> -->
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
            <!-- <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
                <img
                  src="https://github.com/twbs.png"
                  alt="Bootstrap"
                  width="32"
                  height="32"
                  class="rounded-circle border border-white"
                />
              </li>
              <li class="d-flex align-items-center me-3">
                <svg class="bi me-2" width="1em" height="1em">
                  <use xlink:href="#geo-fill"></use>
                </svg>
                <small>Earth</small>
              </li>
              <li class="d-flex align-items-center">
                <svg class="bi me-2" width="1em" height="1em">
                  <use xlink:href="#calendar3"></use>
                </svg>
                <small>3d</small>
              </li>
            </ul> -->
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
            <!-- <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
                <img
                  src="https://github.com/twbs.png"
                  alt="Bootstrap"
                  width="32"
                  height="32"
                  class="rounded-circle border border-white"
                />
              </li>
              <li class="d-flex align-items-center me-3">
                <svg class="bi me-2" width="1em" height="1em">
                  <use xlink:href="#geo-fill"></use>
                </svg>
                <small>Pakistan</small>
              </li>
              <li class="d-flex align-items-center">
                <svg class="bi me-2" width="1em" height="1em">
                  <use xlink:href="#calendar3"></use>
                </svg>
                <small>4d</small>
              </li>
            </ul> -->
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
            <!-- <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
                <img
                  src="https://github.com/twbs.png"
                  alt="Bootstrap"
                  width="32"
                  height="32"
                  class="rounded-circle border border-white"
                />
              </li>
              <li class="d-flex align-items-center me-3">
                <svg class="bi me-2" width="1em" height="1em">
                  <use xlink:href="#geo-fill"></use>
                </svg>
                <small>California</small>
              </li>
              <li class="d-flex align-items-center">
                <svg class="bi me-2" width="1em" height="1em">
                  <use xlink:href="#calendar3"></use>
                </svg>
                <small>5d</small>
              </li>
            </ul> -->
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
            <!-- <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
                <img
                  src="https://github.com/twbs.png"
                  alt="Bootstrap"
                  width="32"
                  height="32"
                  class="rounded-circle border border-white"
                />
              </li>
              <li class="d-flex align-items-center me-3">
                <svg class="bi me-2" width="1em" height="1em">
                  <use xlink:href="#geo-fill"></use>
                </svg>
                <small>Earth</small>
              </li>
              <li class="d-flex align-items-center">
                <svg class="bi me-2" width="1em" height="1em">
                  <use xlink:href="#calendar3"></use>
                </svg>
                <small>3d</small>
              </li>
            </ul> -->
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
            <!-- <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
                <img
                  src="https://github.com/twbs.png"
                  alt="Bootstrap"
                  width="32"
                  height="32"
                  class="rounded-circle border border-white"
                />
              </li>
              <li class="d-flex align-items-center me-3">
                <svg class="bi me-2" width="1em" height="1em">
                  <use xlink:href="#geo-fill"></use>
                </svg>
                <small>Pakistan</small>
              </li>
              <li class="d-flex align-items-center">
                <svg class="bi me-2" width="1em" height="1em">
                  <use xlink:href="#calendar3"></use>
                </svg>
                <small>4d</small>
              </li>
            </ul> -->
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
            <!-- <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
                <img
                  src="https://github.com/twbs.png"
                  alt="Bootstrap"
                  width="32"
                  height="32"
                  class="rounded-circle border border-white"
                />
              </li>
              <li class="d-flex align-items-center me-3">
                <svg class="bi me-2" width="1em" height="1em">
                  <use xlink:href="#geo-fill"></use>
                </svg>
                <small>California</small>
              </li>
              <li class="d-flex align-items-center">
                <svg class="bi me-2" width="1em" height="1em">
                  <use xlink:href="#calendar3"></use>
                </svg>
                <small>5d</small>
              </li>
            </ul> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "PageHome",
  components: {
    // HelloWorld,
  },
  data() {
    return {
      isCommentVisible: false,
    };
  },
  methods: {
    popComment() {
      this.isCommentVisible = !this.isCommentVisible;
    },
  },
};
</script>
<style scoped>
.user_box {
  margin: auto;
  width: 75%;
  border: 2px solid black;
  border-radius: 35px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.user_box > div {
  width: 35%;
}

.emotion_box {
  border: 1px solid black;
  border-radius: 20px;
  height: 80%;
  font-size: 50px;
}

.emotion_box .emotions {
  font-size: 55px;
}

.emotion_box div:last-child {
  border: 5px solid red;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  position: relative;
  top: -163px;
  left: 155px;
}
.text_box {
  border: 1px solid black;
  border-radius: 20px;
  height: 80%;
  font-size: 50px;
}

.text_box div:first-child {
  position: relative;
  top: 20px;
}

.text_box div:last-child {
  position: relative;
  top: 20px;
  display: flex;
}

.text_box div:last-child div {
  width: 30%;
  height: 100px;
  margin: auto;
  line-height: 100px;
}

.text_box div:last-child div:first-child {
  font-size: 70px;
  color: orange;
  position: relative;
  right: -20%;
  top: 15px;
}

.user_box > .mypage {
  border: 3px solid orange;
  border-radius: 20px;
  height: 250px;
  width: 15%;
  font-size: 45px;
  font-weight: bold;
  line-height: 250px;
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
