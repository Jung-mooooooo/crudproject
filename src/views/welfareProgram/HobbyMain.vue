<template>
  <br />
  <h1>취미활동</h1>
  <br />
  <h3>원하는 탭을 선택하여 주세요</h3>
  <br /><br />
  <div class="spot_box">
    <div class="spots">
      <button @click="$router.push('/welfareProgram/ArtMap')">미술</button>
      <button @click="$router.push('/welfareProgram/MusicMap')">음악</button>
    </div>
    <div class="spots">
      <button @click="$router.push('/welfareProgram/DanceMap')">무용</button>
      <button @click="$router.push('/welfareProgram/LanguageMap')">언어</button>
    </div>
  </div>
  <br /><br /><br />
  <router-link to="/welfareProgram/hobbyMap"
    >원하는 분야가 없으신가요? 여기를 클릭하세요.</router-link
  >
</template>

<style scoped>
h1 {
  font-size: 80px;
}
.spot_box {
  width: 70%;
  height: 700px;
  margin: auto;
}

.spots {
  display: flex;
  justify-content: space-around;
}

.spots > button {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  margin: 30px auto;
  line-height: 300px;
  font-size: 60px;
  font-weight: bold;
}

.spot_box div:first-child button:first-child {
  color: green;
  border: 5px solid green;
}

.spot_box div:first-child button:first-child:hover {
  background: rgba(0, 128, 0, 0.9);
  color: white;
  border: none;
  position: relative;
  left: -30px;
  top: -20px;
}

.spot_box div:first-child button:last-child {
  color: rgba(31, 191, 191, 0.9);
  border: 5px solid rgba(31, 191, 191, 0.9);
}

.spot_box div:first-child button:last-child:hover {
  background: rgba(31, 191, 191, 0.9);
  color: white;
  border: none;
  position: relative;
  left: 30px;
  top: -20px;
}

.spot_box div:last-child button:first-child {
  color: rgb(255, 0, 0);
  border: 5px solid red;
}

.spot_box div:last-child button:first-child:hover {
  background: rgba(255, 0, 0, 0.9);
  color: white;
  border: none;
  position: relative;
  left: -30px;
  top: -20px;
}

.spot_box div:last-child button:last-child {
  color: orange;
  border: 5px solid orange;
}

.spot_box div:last-child button:last-child:hover {
  background: rgba(255, 165, 0, 0.9);
  color: white;
  border: none;
  position: relative;
  left: 30px;
  top: -20px;
}

a {
  text-decoration: none;
  color: black;
  font-size: 40px;
}
</style>
