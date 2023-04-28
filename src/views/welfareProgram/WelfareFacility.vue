<template>
  <br />
  <h1>복지시설</h1>
  <br />
  <h3>원하는 탭을 선택하여 주세요</h3>
  <br /><br />
  <div class="spot_box">
    <div class="spots">
      <div>상담시설</div>
      <div>병원</div>
    </div>
  </div>
  <br /><br /><br />
  <router-link to="/welfareProgram/welfareFacilityMap"
    >원하는 분야가 없으신가요? 여기를 클릭하세요.</router-link
  >
</template>

<style scoped>
h1 {
  font-size: 80px;
}
.spot_box {
  width: 70%;
  height: 400px;
  margin: auto;
}

.spots {
  display: flex;
  justify-content: space-around;
}

.spots > div {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  margin: auto;
  line-height: 300px;
  font-size: 60px;
  font-weight: bold;
}

.spot_box div div:first-child {
  color: rgb(255, 212, 0);
  border: 5px solid rgb(255, 212, 0);
}

.spot_box div div:first-child:hover {
  background: rgba(255, 212, 0, 0.9);
  color: white;
  border: none;
  position: relative;
  left: -30px;
  top: -20px;
}

.spot_box div div:last-child {
  color: rgb(255, 192, 203);
  border: 5px solid pink;
}

.spot_box div div:last-child:hover {
  background: rgba(255, 192, 203, 0.9);
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
