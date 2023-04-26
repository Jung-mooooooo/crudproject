<!-- PageAbout.vue -->
<template>
  <div class="admin">
    <img alt="btt" src="@/assets/btt.png">
  </div>
  <nav class="nav d-flex justify-content-between">
      <router-link to="/">회원관리</router-link> 
      &nbsp;&nbsp;
      <router-link to="/admin/counselling">게시물관리</router-link>
      &nbsp;&nbsp;
      <router-link to="/">고객센터</router-link>
  </nav>
<br>
  <nav class="nav d-flex justify-content-between">
      <router-link to="/admin/counselling">심리/고민상담</router-link> 
      &nbsp;&nbsp;
      <router-link to="/admin/welfareProgram">복지프로그램</router-link>
  </nav>
<br>
  <nav class="nav d-flex justify-content-between">
      <router-link to="/admin/AdminWelfareFacility">복지시설</router-link> 
      &nbsp;&nbsp;
      <router-link to="/admin/AdminTouristSpot">힐링스팟</router-link>
      &nbsp;&nbsp;
      <router-link to="/admin/AdminHobby">원데이클래스</router-link>
  </nav>

<div id="board-search">
    <div class="container">
        <div class="search-window">
            <div class="search-wrap">	
                <label for="search" class="blind"></label>
                    <input id="search" type="search" name="keyword" placeholder="검색어를 입력하세요.">
                    <button type="submit" class="btn btn-dark">검색</button> 
                <br>
            </div>
        </div>
    </div>
</div>
  
<br>
<div align="center">
<table align="center" class="board-table">
<thead>
  <h3>복지시설</h3>
  <br>
	<tr>
		<th scope="col" class="th-num">번호</th> 
		<th scope="col" class="th-title">시설명</th> 
		<th scope="col" class="th-title">지역</th>  
    <th scope="col" class="th-title">작성일자</th> 
	</tr>
</thead>
<tbody>
		<tr align="center">
			<td>1</td>
			<td>병원</td>
			<td>서울</td>
      <td>202305051</td>
		</tr>
	</tbody>
</table>

<button class="btn2 btn-gray">전체선택</button>
&nbsp;&nbsp;
<button class="btn2 btn-gray">선택해제</button>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<button class="btn2 btn-gray">확인</button>
&nbsp;&nbsp;
<button class="btn2 btn-gray">삭제</button>

</div>
</template>

<style scoped>
img{
  width: 200px;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}
section.notice {
  padding: 80px 0;
}

.page-title {
  margin-bottom: 60px;
}
.page-title h3 {
  font-size: 28px;
  color: #333333;
  font-weight: 400;
  text-align: center;
}

#board-search .search-window {
  padding: 15px 0;
  background-color: #f9f7f9;
}
#board-search .search-window .search-wrap {
  position: relative;
/*   padding-right: 124px; */
  margin: 0 auto;
  width: 80%;
  max-width: 564px;
}
#board-search .search-window .search-wrap input {
  height: 40px;
  width: 100%;
  font-size: 14px;
  padding: 7px 14px;
  border: 1px solid #ccc;
}
#board-search .search-window .search-wrap input:focus {
  border-color: #333;
  outline: 0;
  border-width: 1px;
}
#board-search .search-window .search-wrap .btn {
  position: absolute;
  right: 0;
  top: 2;
  bottom: 0;
  width: 70px;
  height: 40px;
  padding: 0;
  font-size: 16px;
}

.board-table {
  font-size: 13px;
  width: 50%;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}

.board-table a {
  color: #333;
  display: inline-block;
  line-height: 1.4;
  word-break: break-all;
  vertical-align: middle;
}
.board-table a:hover {
  text-decoration: underline;
}
.board-table th {
  text-align: center;
}

.board-table .th-num {
  width: 100px;
  text-align: center;
}

.board-table .th-date {
  width: 200px;
}

.board-table th, .board-table td {
  padding: 14px 0;
}

.board-table tbody td {
  padding-left: 28px;
  padding-right: 14px;
  border-top: 1px solid #e7e7e7;
  text-align: center;
}

.board-table tbody th {
  padding-left: 28px;
  padding-right: 14px;
  border-top: 1px solid #e7e7e7;
  text-align: left;
}

.board-table tbody th p{
  display: none;
}

.btn {
  display: inline-block;
  padding: 0 30px;
  font-size: 15px;
  font-weight: 400;
  background: transparent;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  text-transform: uppercase;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}

.btn-dark {
  background: #555;
  color: #fff;
}

.btn-dark:hover, .btn-dark:focus {
  background: #373737;
  border-color: #373737;
  color: #fff;
}

.btn2 {
  display: inline-block;
  padding: 0 30px;
  font-size: 15px;
  font-weight: 400;
  background: transparent;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  text-transform: uppercase;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}

.btn-gray {
background: #555;
color: #fff;
}


/* reset */

* {
  list-style: none;
  text-decoration: none;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.clearfix:after {
  content: '';
  display: block;
  clear: both;
}
.container {
  width: 1100px;
  margin: 0 auto;
}
.blind {
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  margin: -1px;
  width: 1px;
  height: 1px;
}
</style>

