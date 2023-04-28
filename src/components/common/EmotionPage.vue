<template>
  <div class="container">
    <div class="healing">
      <br /><br />
      <h1>힐링스팟</h1>
      <br />
      <h3>원하는 탭을 선택하여 주세요</h3>
      <br /><br />
      <div class="spot_box">
        <div class="spots">
          <div>산</div>
          <div>계곡</div>
        </div>
        <div class="spot">바다</div>
        <div class="spots">
          <div>도심</div>
          <div>호캉스</div>
        </div>
      </div>
      <router-link to="/welfareProgram/touristSpotMap"
        >원하는 분야가 없으신가요? 여기를 클릭하세요.</router-link
      >
    </div>
    <div class="oneday">
      <br /><br />
      <h1>원데이클래스</h1>
      <br />
      <h3>원하는 탭을 선택하여 주세요</h3>
      <br /><br />
      <div class="spot_box">
        <div class="spots">
          <div>언어</div>
          <div>음악</div>
        </div>
        <div class="spot">운동</div>
        <div class="spots">
          <div>미용</div>
          <div>사진/영상</div>
        </div>
      </div>
      <router-link to="/welfareProgram/hobbyMap"
        >원하는 분야가 없으신가요? 여기를 클릭하세요.</router-link
      >
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 80%;
  height: 140vh;
}

.healing,
.oneday {
  position: relative;
  top: 50px;
  border: 1px solid black;
  height: 850px;
}

.oneday {
  position: relative;
  top: 100px;
}
h1 {
  font-size: 50px;
}
.spot_box {
  width: 500px;
  height: 400px;
  margin: auto;
}

.spots {
  display: flex;
  justify-content: space-around;
}

.spots > div,
.spot {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: auto;
  line-height: 150px;
  font-size: 50px;
  font-weight: bold;
}

.spot_box div:first-child div:first-child {
  color: green;
  border: 5px solid green;
}

.spot_box div:first-child div:first-child:hover {
  background: rgba(0, 128, 0, 0.9);
  color: white;
  border: none;
  position: relative;
  left: -30px;
  top: -20px;
}

.spot_box div:first-child div:last-child {
  color: rgb(31, 191, 191);
  border: 5px solid rgb(31, 191, 191);
}

.spot_box div:first-child div:last-child:hover {
  background: rgba(31, 191, 191, 0.9);
  color: white;
  border: none;
  position: relative;
  left: 30px;
  top: -20px;
}
.spot {
  color: rgba(17, 75, 191, 0.9);
  border: 5px solid rgba(17, 75, 191, 0.9);
}

.spot:hover {
  background: rgba(17, 75, 191, 0.9);
  color: white;
  border: none;
  position: relative;
  top: -20px;
}

.spot_box div:last-child div:first-child {
  color: rgb(255, 0, 0);
  border: 5px solid red;
}

.spot_box div:last-child div:first-child:hover {
  background: rgba(255, 0, 0, 0.9);
  color: white;
  border: none;
  position: relative;
  left: -30px;
  top: -20px;
}

.spot_box div:last-child div:last-child {
  color: orange;
  border: 5px solid orange;
  font-size: 30px;
}

.spot_box div:last-child div:last-child:hover {
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
  font-size: 30px;
  position: relative;
  top: 150px;
}
</style>
