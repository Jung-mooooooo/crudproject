<!-- PageAbout.vue -->
<template>
<br>
<br>
<br>
<div class="admin_box">      
<div class= "counting_user">
  <h3>접속자 현황</h3>
<br>
  <div style="display: flex;">
    <div style="width: 30%; height: 50%; text-align: center;">기간</div>
    <input
          style="width: 30%; height: 50%; text-align: center;"
          type="month"
          v-model="selectedMonth"
          @change="logCountList"
        />
 </div>
 <div style="display: flex;">
    <div class="title" id="day">접속자 수</div>
    <div id="content">{{ visitorsT }} 명</div>
 </div>
  <div style="display: flex;">
    <div class="title" id="month">월 접속자 수</div>
    <div id="content">{{ visitorsM }} 명</div>
  </div>
 <div style="display: flex;">
    <div class="title" id="year">월 평균 접속자 수</div>
    <div id="content">{{ visitorsAvg }} 명</div>
   </div>
  </div> 

   
<div class= "counting_emotion">
  <h3>감정 현황</h3>
  <br>
  <div style="display: flex;">
    <div style="width: 30%; height: 50%; text-align: center;">기간</div>
    <input
          style="width: 30%; height: 50%; text-align: center;"
          type="month"
          v-model="selectMonth"
          @change="emotionCountList"
        />
 </div>
  <div>
    <div class="title">슬프다</div>
    <div id="content">{{ sadAvg }} %</div>
    <div class="title">불안하다</div>
    <div id="content">{{ anxiousAvg }} %</div>
  </div>
  <div>
    <div class="title">무섭다</div>
    <div id="content">{{ scaryAvg }} %</div>
    <div class="title">외롭다</div>
    <div id="content">{{ lonelyAvg }} %</div>
  </div>
  <div>
    <div class="title">피곤하다</div>
    <div id="content">{{ tiredAvg }} %</div>
    <div class="title">화가나다</div>
    <div id="content">{{ angryAvg }} %</div>
  </div>
  <div>
    <div class="title">행복하다</div>
    <div id="content">{{ happyAvg }} %</div>
    <div class="title">신나다</div>
    <div id="content">{{ excitedAvg }} %</div>
  </div>
  </div>
</div>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<h3>신규 가입자</h3>
<br>
<table align="center" class="board-table">
<tbody>
	<tr>
    <th scope="col" class="th-num">순번</th> 
		<th scope="col" class="th-num">아이디</th> 
		<th scope="col" class="th-title">이름</th> 
		<th scope="col" class="th-title">전화번호</th>
    <th scope="col" class="th-title">이메일</th>  
    <th scope="col" class="th-title">가입일</th>    
	</tr>

	<tr align="center" v-for="(row, userCode) in userlist" :key="userCode">
		<td>{{ row.userCode }}</td>
		<td>{{ row.userId }}</td>
    <td>{{ row.userName }}</td>
    <td>{{ row.phone }}</td>
		<td>{{ row.email }}</td>
    <td>{{ row.enrollDate }}</td>
	</tr>
</tbody>
</table>
<br>
<br>
<h3>신규 접수 문의</h3>
<br>
<table align="center" class="board-table">
  <tbody>
	<tr>
		<th scope="col" class="th-num">번호</th> 
		<th scope="col" class="th-title">제목</th> 
		<th scope="col" class="th-title">작성자</th>
    <th scope="col" class="th-title">작성일자</th>   
	</tr>

	<tr align="center" v-for="(row, qnaNo) in qnalist" :key="qnaNo">
		<td>{{ row.qnaNo }}</td>
    <td><a v-on:click="fnView(`${row.qnaNo}`)">{{ row.qnaTitle }}</a></td>
    <td>{{ row.userId }}</td>
    <td>{{ row.createAt }}</td>
	</tr>
</tbody>
</table>

</template>

  <script>
import axios from 'axios';
export default {
  data() {
    return {
      requestBody: {}, //리스트 페이지 데이터전송
      userlist: {},
      qnalist: {}, //리스트 데이터
      visitorsT: 0,
      visitorsM: 0,
      visitorsAvg: 0,
      angryAvg: 0,
      anxiousAvg: 0,
      excitedAvg: 0,
      happyAvg: 0,
      sadAvg: 0,
      scaryAvg: 0,
      tiredAvg: 0,
      lonelyAvg: 0,
      selectMonth: null,
      selectedMonth: null,
    };
  },
  mounted() {
    this.$axios = axios;
    this.logCountList();
    this.emotionCountList();
    this.userList();
    this.qnaList();
  },
  methods: {
    logCountList() {
      if (!this.selectedMonth) {
        return;
      }
      const [year, month] = this.selectedMonth.split("-");

      setInterval(() => {
        this.$axios.get("/admin/user", {
          params: {
              year,
              month,
          },
          })
          .then((res) => {
            // 받은 응답 데이터를 변수에 저장
            const jsonData = res.data;

            // 데이터를 Vue 데이터에 할당
            this.visitorsT = jsonData.visitorsT;
            this.visitorsM = jsonData.visitorsM;
            this.visitorsAvg = jsonData.visitorsAvg;
          })
      }, 1000);
    },
    userList(){
      this.$axios.get("/admin/userlist")
        .then((res) => {
            this.userlist = res.data.data;

            console.log("list" + userlist);
        })
        .catch((err) => {
          if (err.message.indexOf("Network Error") > -1) {
            alert("네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.");
          }
        });
    },
    emotionCountList() {
      if (!this.selectedMonth) {
        return;
      }
      const [year, month] = this.selectMonth.split("-");

      setInterval(() => {
        this.$axios.get("/admin/emotion", {
          params: {
              year,
              month,
          },
          })
          .then((res) => {
            // 받은 응답 데이터를 변수에 저장
            const jsonData = res.data;

            // 데이터를 Vue 데이터에 할당
            this.angryAvg = jsonData.angryAvg;
            this.anxiousAvg = jsonData.anxiousAvg;
            this.excitedAvg = jsonData.excitedAvg;
            this.happyAvg = jsonData.happyAvg;
            this.sadAvg = jsonData.sadAvg;
            this.scaryAvg = jsonData.scaryAvg;
            this.tiredAvg = jsonData.tiredAvg;
            this.lonelyAvg = jsonData.lonelyAvg;
          })
      }, 1000);
    },
    qnaList(){
      this.$axios.get("/admin/qnalist")
        .then((res) => {
            this.qnalist = res.data.data;

            console.log("list" + qnalist);
        })
        .catch((err) => {
          if (err.message.indexOf("Network Error") > -1) {
            alert("네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.");
          }
        });
    },
    fnView(qnaNo) { //글번호를 전달 후 router에 push. path: url, query: parameter
      console.log("fnView : "+ qnaNo);
      this.requestBody.qnaNo = qnaNo;
      this.$router.push({
        path: './AdminQnADetail', //같은 폴더에 있다 = ./
        query: this.requestBody
      })
    },
  },
};

 </script>


<style scoped>
/* template {
    font-family: 'IBMPlexSansKR-Regular', sans-serif;
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

.counting_user > div div div ,#day, #month, #year, #content{
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
  width: 70%;
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

