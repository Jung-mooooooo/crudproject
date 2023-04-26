<template>
    <nav class="nav d-flex justify-content-between">
      <router-link to="/welfareProgram/welfareFacility">복지시설</router-link> 
      &nbsp;&nbsp;
      <router-link to="/welfareProgram/touristSpot">힐링스팟</router-link>
      &nbsp;&nbsp;
      <router-link to="/welfareProgram/hobby">원데이클래스</router-link>
  </nav>

<h1>원데이클래스</h1>
<h4>원하는 탭을 선택하여 주세요</h4>
<br>
<br>
<button class="snip1535 hover">언어</button>
<button class="snip1535 hover">음악</button>
<br>
<button class="snip1535 hover">운동</button>
<br>
<button class="snip1535 hover">미용</button>
<button class="snip1535 hover">사진/영상</button>
<br>
<br>
<br>
<router-link to="/welfareProgram/hobbyMap">원하는 분야가 없으신가요? 여기를 클릭하세요.</router-link> 

</template>


<style scoped>
/* .button1 {
  padding: 50px 50px;
  border-radius: 100%;
  background-color: aquamarine;
  color: black;
}

.button2 {
  padding: 50px 50px;
  background-color: violet;
  color: black;
} */

</style>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=BenchNine:700);
.snip1535 {
  background-color: #4285f4;
  border: none;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: 'BenchNine', Arial, sans-serif;
  font-size: 1em;
  font-size: 22px;
  line-height: 1em;
  margin: 15px 40px;
  outline: none;
  padding: 12px 40px 10px;
  position: relative;
  text-transform: uppercase;
  font-weight: 700;
}
.snip1535:before,
.snip1535:after {
  border-color: transparent;
  -webkit-transition: all 0.25s;
  transition: all 0.25s;
  border-style: solid;
  border-width: 0;
  content: "";
  height: 24px;
  position: absolute;
  width: 24px;
}
.snip1535:before {
  border-color: #4285f4;
  border-right-width: 2px;
  border-top-width: 2px;
  right: -5px;
  top: -5px;
}
.snip1535:after {
  border-bottom-width: 2px;
  border-color: #4285f4;
  border-left-width: 2px;
  bottom: -5px;
  left: -5px;
}
.snip1535:hover,
.snip1535.hover {
  background-color: #4285f4;
}
.snip1535:hover:before,
.snip1535.hover:before,
.snip1535:hover:after,
.snip1535.hover:after {
  height: 100%;
  width: 100%;
}
</style>