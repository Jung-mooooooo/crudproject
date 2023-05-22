<!-- PageAbout.vue -->
<template>
  <!-- <div class="admin">
    <img alt="btt" src="@/assets/btt.png">
  </div>
  <nav class="nav d-flex justify-content-between">
      <router-link to="/">회원관리</router-link> 
      &nbsp;&nbsp;
      <router-link to="/admin/counselling">게시물관리</router-link>
      &nbsp;&nbsp;
      <router-link to="/">고객센터</router-link>
  </nav> -->
<br>
<br>
<br>
<div class="admin_box">      
<div class= "counting_user">
  <h3>접속자 현황</h3>
  <form action="visitSearch.do">
  <div style="display: flex;">
    <div style="width: 30%;">기간</div>
    <c:set var="now" value="<%=new java.util.Date()%>"/>
    <c:set var="sys"><fmt:formatDate value="${now}" pattern="yyyy"/></c:set>
    <input style="width: 60%; text-align: center;" type="month" value="년 / 월"/>
 </div>
 </form>
 <br>
 <div id="visit_count">
  <div id="today">
    <div class="title">접속자 수</div>
    <div id="todayVisitors"></div>
  </div>
  <div id="month">
    <div class="title">월 접속자 수</div>
    <div id="monthVisitors"></div>
  </div>
    <div id="year">
    <div class="title">월 평균 접속자 수</div>
    <div id="avgVisitors"></div>
  </div>
  </div>
  </div> 

   
<div class= "counting_emotion">
  <h3>감정 현황</h3>
  <div v-for="(item, emotionNo) in items" :key="{emotionNo}">
  <div>
    <div class="title">슬프다</div>
		<div v-if="item.emotionCat = sad">{{item.ratioPercentage}}</div> 
    <div class="title">불안하다</div>
		<div v-if="item.emotionCat = anxious">{{item.ratioPercentage}}</div> 
  </div>
  <div>
    <div class="title">무섭다</div>
		<div>30%</div>
    <div class="title">외롭다</div>
		<div>40%</div> 
  </div>
  <div>
    <div class="title">무기력하다</div>
		<div>50%</div> 
    <div class="title">화가나다</div>
		<div>60%</div> 
  </div>
  <div>
    <div class="title">행복하다</div>
		<div>70%</div> 
    <div class="title">신나다</div>
		<div>80%</div> 
  </div>
  </div>
</div>
</div>
<br>
<br>
<br>
<br>
<br>
<br>
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
<br>
<br>
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

<script>
export default {
  data() { //변수생성
      return {}
  },
  mounted() {
      this.logCountList();
    },
  methods: {
    logCountList(){
      setInterval(function(){
        $.ajax({
          url: "",
          type: "post",
          dataType: "json",
          success: function(jsonData){
            console.log("jsonData sending");

            $('#todayVisitors').html(jsonData.visitorsT + ' 명');
            $('#monthVisitors').html(jsonData.visitorsM + ' 명');
            $('#avgVisitors').html(jsonData.visitorsAvg + ' 명');
            $('#postCount').html(jsonData.postCount + ' 개');
          },
          error: function(request, status, errorData){
              console.log("error code : " + request.status
                          + "\nMessage : " + request.responseText
                          + "\nError : " + errorData);
          }
        });
      }, 1000);
    }
  }
}
</script>


<style scoped>
/* #todayVisitors, #monthVisitors, #avgVisitors {
	width: 300px;
	font-size: xx-large;
	margin: auto;
	justify-content: center;
	color: black;
} */

.title{
  background: gold;
}

.admin_box {
  display: flex;
}

.counting_user {
  width: 40%;
  height: 200px;
  margin: auto;
}
.counting_user > div {
  display: flex;
  margin: auto;
  justify-content: center;
  height: 30%;
}

.counting_user > div div {
border: 1px solid black;
width: 30%;
height: 40px;
border-radius: 10px;
}

.counting_emotion {
  width: 40%;
  height: 200px;
  margin: auto;
}
.counting_emotion > div {
  display: flex;
  margin: auto;
  justify-content: center;
  height: 30%;
}

.counting_emotion > div div {
border: 1px solid black;
width: 30%;
height: 40px;
border-radius: 10px;
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

