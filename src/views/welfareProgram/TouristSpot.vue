<template>
  <br />
  <h1>힐링스팟</h1>
  <br />
  <h3>원하는 탭을 선택하여 주세요</h3>
  <br /><br />
  <div class="spot_box">
    <div class="spots">
      <button @click="$router.push('/welfareProgram/SeaMap')">바다</button>
      <button @click="$router.push('/welfareProgram/CampingMap')">캠핑</button>
    </div>
    <div class="spots">
      <button @click="$router.push('/welfareProgram/ForestMap')">휴양림</button>
      <button @click="$router.push('/welfareProgram/ParkMap')">공원</button>
    </div>
    <div class="spots">
      <button @click="$router.push('/welfareProgram/MuseumMap')">박물관</button>
      <button @click="$router.push('/welfareProgram/GalleryMap')">미술관</button>
    </div>
    <div class="spot">
      <button @click="$router.push('/welfareProgram/ActivityMap')">액티비티</button>
    </div>
  </div>
  <br /><br /><br />
  <router-link to="/welfareProgram/touristSpotMap"
    >원하는 분야가 없으신가요? 여기를 클릭하세요.</router-link
  >
</template>

<style scoped>
h1 {
  font-size: 80px;
}
.spot_box {
  width: 70%;
  height: 1500px;
  margin: auto;
}

.spots {
  display: flex;
  justify-content: space-around;
}

.spots > button,
.spot > button {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  margin: 30px auto;
  line-height: 300px;
  font-size: 60px;
  font-weight: bold;
}

.spot_box div:nth-child(1) button:nth-child(1){
  color: rgba(17, 75, 191, 0.9);
  border: 5px solid rgba(17, 75, 191, 0.9);
}

.spot_box div:nth-child(1) button:nth-child(1):hover {
  background: rgba(17, 75, 191, 0.9);
  color: white;
  border: none;
  position: relative;
  top: -20px;
}

.spot_box div:nth-child(1) button:nth-child(2) {
  color: rgba(31, 191, 191, 0.9);
  border: 5px solid rgba(31, 191, 191, 0.9);
}

.spot_box div:nth-child(1) button:nth-child(2):hover {
  background: rgba(31, 191, 191, 0.9);
  color: white;
  border: none;
  position: relative;
  left: 30px;
  top: -20px;
}
.spot_box div:nth-child(2) button:nth-child(1) {
  color: green;
  border: 5px solid green;
}

.spot_box div:nth-child(2) button:nth-child(1):hover {
  background: rgba(0, 128, 0, 0.9);
  color: white;
  border: none;
  position: relative;
  left: -30px;
  top: -20px;
}

.spot_box div:nth-child(2) button:nth-child(2) {
  color: violet;
  border: 5px solid violet;
}

.spot_box div:nth-child(2) button:nth-child(2):hover {
  background: violet;
  color: white;
  border: none;
  position: relative;
  left: 30px;
  top: -20px;
}
.spot_box div:nth-child(3) button:nth-child(1) {
  color: rgb(255, 0, 0);
  border: 5px solid red;
}

.spot_box div:nth-child(3) button:nth-child(1):hover {
  background: rgba(255, 0, 0, 0.9);
  color: white;
  border: none;
  position: relative;
  left: -30px;
  top: -20px;
}

.spot_box div:nth-child(3) button:nth-child(2) {
  color: orange;
  border: 5px solid orange;
}

.spot_box div:nth-child(3) button:nth-child(2):hover {
  background: rgba(255, 165, 0, 0.9);
  color: white;
  border: none;
  position: relative;
  left: 30px;
  top: -20px;
}
.spot button{
  color: rgb(116, 6, 116);
  border: 5px solid rgb(116, 6, 116);
}

.spot button:hover {
  background: rgb(116, 6, 116);
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
