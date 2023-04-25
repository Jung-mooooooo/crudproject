<!-- PageAbout.vue -->
<template>
  <div class="admin">
    <h1>Better then talk</h1>
  </div>
  <nav class="nav d-flex justify-content-between">
      <router-link to="/">회원관리</router-link> 
      &nbsp;&nbsp;
      <router-link to="/admin/counselling">게시물관리</router-link>
      &nbsp;&nbsp;
      <router-link to="/">고객센터</router-link>
  </nav>
      
<div align="left">
  <table class="board-table">
<thead>
  <h3>접속자 현황</h3>
	<tr>
		<th scope="col" class="th-num">접속자수</th> 
		<th scope="col" class="th-title">월 접속자 수</th> 
		<th scope="col" class="th-title">월 평균 접속자 수</th>  
	</tr>
	</thead>
<tbody>
		<tr align="center">
			<td align="center"> </td>
			<td align="center"> </td>
      <td align="center"> </td>
		</tr>
	</tbody>
</table>
</div>

<div align="right">
  <table class="board-table">
<thead>
  <h3>감정현황</h3>
	<tr>
    <th scope="col" class="th-num">답답해요</th>
		<th scope="col" class="th-title">불안해요</th>
		<th scope="col" class="th-title">걱정돼요</th>
    <th scope="col" class="th-title">괴로워요</th>
    <th scope="col" class="th-title">무서워요</th>
    <th scope="col" class="th-title">무기력해요</th>
    <th scope="col" class="th-title">외로워요</th>
    <th scope="col" class="th-title">심심해요</th>
	</tr>
	</thead>
<tbody>
		<tr align="center">
			<td align="center"> </td>
			<td align="center"> </td>
      <td align="center"> </td>
      <td align="center"> </td>
      <td align="center"> </td>
			<td align="center"> </td>
      <td align="center"> </td>
      <td align="center"> </td>
		</tr>
	</tbody>
</table>
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
			<td align="center"> </td>
			<td align="center"> </td>
      <td align="center"> </td>
      <td align="center"> </td>
			<td align="center"> </td>
      <td align="center"> </td>
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
			<td align="center"> </td>
			<td align="center"> </td>
      <td align="center"> </td>
      <td align="center"> </td>
		</tr>
	</tbody>
</table>

</template>

<style scoped>
h1 {
    color: rgb(49, 78, 243);
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
</style>

