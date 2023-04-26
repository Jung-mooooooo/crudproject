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
<br>
<br>
<div class="admin_box">      
<div class= "counting_user">
  <h3>접속자 현황</h3>
  <div>
    <div>접속자수</div>
		<div>22명</div> 
  </div>
   <div>
    <div>월 접속자 수</div>
		<div>33명</div> 
  </div>
   <div>
    <div>월 평균 접속자 수</div>
		<div>44명</div> 
  </div>
</div>
   
<div class= "counting_emotion">
  <h3>감정 현황</h3>
  <div>
    <div>답답해요</div>
		<div>10%</div> 
  </div>
  <div>
    <div>불안해요</div>
		<div>20%</div> 
  </div>
  <div>
    <div>걱정돼요</div>
		<div>30%</div> 
  </div>
  <div>
    <div>괴로워요</div>
		<div>40%</div> 
  </div>
  <div>
    <div>무서워요</div>
		<div>50%</div> 
  </div>
  <div>
    <div>무기력해요</div>
		<div>60%</div> 
  </div>
  <div>
    <div>외로워요</div>
		<div>70%</div> 
  </div>
  <div>
    <div>심심해요</div>
		<div>80%</div> 
  </div>
</div>
</div>

<table align="center" class="board-table">
<thead>
  <h3>신규 가입자</h3>
	<tr>
		<th scope="col" class="th-num">아이디</th> 
		<th scope="col" class="th-title">이름</th> 
		<th scope="col" class="th-title">전화번호</th>
    <th scope="col" class="th-title">생일</th>  
    <th scope="col" class="th-title">이메일</th>  
    <th scope="col" class="th-title">가입일</th>    
	</tr>
</thead>
<tbody>
	<tr align="center">
		<td>user01</td>
		<td>사용자</td>
    <td>010-1234-5678</td>
    <td>19950501</td>
		<td>user01@ict.com</td>
    <td>20230501</td>
	</tr>
</tbody>
</table>

<table align="center" class="board-table">
<thead>
  <h3>신규 접수 문의</h3>
	<tr>
		<th scope="col" class="th-num">번호</th> 
		<th scope="col" class="th-title">제목</th> 
		<th scope="col" class="th-title">작성자</th>
    <th scope="col" class="th-title">작성일자</th>   
	</tr>
</thead>
<tbody>
	<tr align="center">
		<td>1</td>
		<td>신규접수</td>
    <td>사용자</td>
    <td>20230501</td>
	</tr>
</tbody>
</table>

</template>

<style scoped>
img{
  width: 200px;
}

.admin_box {
  display: flex;
}

.counting_user {
  width: 50%;
  border: 1px solid black;
  margin: auto;
  height: 200px;
}
.counting_user > div {
  display: flex;
  margin: auto;
  
}

.counting_user > div div {
border: 1px solid black;
width: 40%;
margin: auto;
height: 30%;
}

.counting_emotion {
  width: 50%;
  border: 1px solid black;
  margin: auto;
  height: 300px;
}
.counting_emotion > div {
  display: flex;
  margin: auto;
  
}

.counting_emotion > div div {
border: 1px solid black;
width: 40%;
margin: auto;
height: 30%;
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


.board-table {
  font-size: 13px;
  width: 50%;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}

.board-table {
  color: #333;
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
  width: 100px;
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
  text-align: center;
}

.board-table tbody th p{
  display: none;
}

</style>

