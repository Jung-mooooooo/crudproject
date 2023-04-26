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

  <nav class="nav d-flex justify-content-between">
      <router-link to="/admin/counselling">심리/고민상담</router-link> 
      &nbsp;&nbsp;
      <router-link to="/admin/welfareProgram">복지프로그램</router-link>
  </nav>

  <nav class="nav d-flex justify-content-between">
      <router-link to="/admin/counsellingCenter">상담센터리스트</router-link> 
      &nbsp;&nbsp;
      <router-link to="/admin/speechRecognitionHelper">음성인식도우미관리</router-link>
  </nav>
      
  <table align="center" class="board-table">
<thead>
  <h3>상담센터 리스트</h3>
	<tr>
		<th scope="col" class="th-num">번호</th> 
		<th scope="col" class="th-title">센터 이름</th> 
		<th scope="col" class="th-title">주소</th>  
    <th scope="col" class="th-title">전화번호</th>  
	</tr>
	</thead>
<tbody>
		<tr align="center">
			<td align="center">1</td>
			<td align="center">상담센터</td>
      <td align="center">서울시 서대문구</td>
			<td align="center">02-1234-5678</td>
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
</style>

