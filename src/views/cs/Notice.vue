<template>
  <div class="board-list">
  <br><br>
  <h2>공지사항</h2>
  <br>  
  <div style="display: flex; justify-content : center;">
  <select v-model="search_key">
    <option value="">- 선택 -</option>
    <option value="author">작성자</option>
    <option value="title">제목</option>
    <option value="contents">내용</option>
  </select>

  &nbsp;
  <input type="text" v-model="search_value" @keyup.enter="fnPage()">
  &nbsp;
  <button @click="fnPage()">검색</button>
</div>

<!-- <div class="common-buttons">
  <button type="button" class="btn btn-outline-primary" v-on:click="fnWrite">등록</button>
</div> -->
<br>
  </div>
  <table  class="rwd-table">
        <tbody>
        <tr>
          <th>No</th>
          <th>제목</th>
          <th>작성자</th>
          <th>등록일시</th>
        </tr>

        <tr class="KOTRA-fontsize-80">
          <td>1</td>
          <td v-on:click="fnView">공지사항1</td>
          <td>admin</td>
          <td>2023.04.27</td>
        </tr>
          
       <tr class="KOTRA-fontsize-80">
          <td>2</td>
          <td v-on:click="fnView">공지사항2</td>
          <td >admin</td>
          <td>2023.04.27</td>
                 </tr>
          
        <tr class="KOTRA-fontsize-80">
         <td>3</td>
          <td v-on:click="fnView">공지사항3</td>
          <td>admin</td>
          <td>2023.04.27</td>
        </tr>
          
         <tr class="KOTRA-fontsize-80">
         <td>4</td>
          <td v-on:click="fnView">공지사항4</td>
          <td>admin</td>
          <td>2023.04.27</td>
        </tr> 
           
        <tr class="KOTRA-fontsize-80">
         <td>5</td>
          <td v-on:click="fnView">공지사항5</td>
          <td>admin</td>
          <td>2023.04.27</td>
        </tr>

        <tr class="KOTRA-fontsize-80">
         <td>6</td>
          <td v-on:click="fnView">공지사항6</td>
          <td>admin</td>
          <td>2023.04.27</td>
        </tr>

        <tr class="KOTRA-fontsize-80">
         <td>7</td>
          <td v-on:click="fnView">공지사항7</td>
          <td>admin</td>
          <td>2023.04.27</td>
        </tr>

        <tr class="KOTRA-fontsize-80">
         <td>8</td>
          <td v-on:click="fnView">공지사항8</td>
          <td>admin</td>
          <td>2023.04.27</td>
        </tr>

        <tr class="KOTRA-fontsize-80">
         <td>9</td>
          <td v-on:click="fnView">공지사항9</td>
          <td>admin</td>
          <td>2023.04.27</td>
        </tr>

        <tr class="KOTRA-fontsize-80">
         <td>10</td>
          <td v-on:click="fnView">공지사항10</td>
          <td>admin</td>
          <td>2023.04.27</td>
        </tr>

        </tbody>
    </table>
  <br><br>
  
  <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">4</a></li>
    <li class="page-item"><a class="page-link" href="#">5</a></li>
    <li class="page-item"><a class="page-link" href="#">6</a></li>
    <li class="page-item"><a class="page-link" href="#">7</a></li>
    <li class="page-item"><a class="page-link" href="#">8</a></li>
    <li class="page-item"><a class="page-link" href="#">9</a></li>
    <li class="page-item"><a class="page-link" href="#">10</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
 
</template>

<script>
export default {    //export : 내보내기 -> 외부에서 사용할 수 있게 설정(그 설정에서 사용하는 data)
  data() { //변수생성
    return {    //단순 list view인 경우, idx없이 넘어감.
      requestBody: {}, //리스트 페이지 데이터전송
      list: {}, //리스트 데이터
      no: '', //게시판 숫자처리
      paging: {
        block: 0,
        end_page: 0,
        next_block: 0,
        page: 0,
        page_size: 0,
        prev_block: 0,
        start_index: 0,
        start_page: 0,
        total_block_cnt: 0,
        total_list_cnt: 0,
        total_page_cnt: 0,
      }, //페이징 데이터
      //페이지 데이터 처리하는 삼항연산자 
      //현재쿼리에 현재페이지값 존재시 =>첫번째 아니면 1,
      page: this.$route.query.page ? this.$route.query.page : 1, 
      size: this.$route.query.size ? this.$route.query.size : 10,
      // keyword: this.$route.query.keyword,
      //search 관련 데이터 추가
      search_key: this.$route.query.sk ? this.$route.query.sk : '',
      search_value: this.$route.query.sv ? this.$route.query.sv : '',
      //pageinavigation = 콜백함수
      paginavigation: function () { //페이징 처리 for문 커스텀
        let pageNumber = [] //;
        let start_page = this.paging.start_page;
        let end_page = this.paging.end_page;
        for (let i = start_page; i <= end_page; i++) pageNumber.push(i);
        return pageNumber;
      }
    }
  },
  mounted() { //일종의 연결, document readey()임. 저 파일이 보여질때 안의 메소드 실행
    this.fnGetList()
  },
  methods: {
    fnGetList() {  //안의 메소드인 fnGetList()는 파일이 열리면 안의 형태로 자료가 출력됨
      //spring boot에서 전송받은 데이터 출력 처리
      this.requestBody = { // 데이터 전송
        keyword: this.keyword,
        page: this.page,
        size: this.size,
        sk: this.search_key,
        sv: this.search_value
      }
        //select, insert, update, delete는 $axios.메소드명 <= 에 따라 달라짐. get, post, pach, delete
        //해당 내용에 대한 service로의 연결 요청이다.
      this.$axios.get(this.$serverUrl + "/board/list", {
        params: this.requestBody,
        headers: {}
      }).then((res) => {      //.then(res) <= success callback임

       // this.list = res.data  //서버에서 데이터를 목록으로 보내므로 바로 할당하여 사용할 수 있다.

       if (res.data.result_code === "OK") {
          this.list = res.data.data
          this.paging = res.data.pagination
          this.no = this.paging.total_list_cnt - ((this.paging.page - 1) * this.paging.page_size)
        }

      }).catch((err) => {   //erorr callback
        if (err.message.indexOf('Network Error') > -1) {
          alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
        }
      })

    },
    fnView() { //글번호를 전달 후 router에 push. path: url, query: parameter
      this.$router.push({
        path: './NoticeDetail', //같은 폴더에 있다 = ./
      })
    },
    fnWrite() {
      this.$router.push({
        path: './NoticeWrite'
      })
    },
    fnPage(n) {
      if (this.page !== n) {
        this.page = n
      }

      this.fnGetList()
    },
  }
}
</script>
<style scoped>
table {
  margin: auto;
  width: 80%;
  border: 1px solid black;
}

.list_box tr {
  border: 1px solid black;
  width: 90%;
  padding: 8px;
}

.list_box tr td {
  border: 1px solid black;
  width: 20%;
}


.rwd-table {
    margin: 100;
    width: 95%;
    border-collapse: collapse;
}

.rwd-table tr:first-child {
    background: #5B86EF;
    color: #fff;
}

.rwd-table tr {
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    background-color: white;
}

/*.rwd-table tr:nth-child(odd):not(:first-child) {*/
/*    background-color: #ebf3f9;*/
/*}*/

.rwd-table th {
    display: none;
}

.rwd-table td {
    display: block;
}

.rwd-table td:first-child {
    margin-top: .5em;
}

.rwd-table td:last-child {
    margin-bottom: .5em;
}

.rwd-table td:before {
    /*content: attr(data-th) ": ";*/
    font-weight: bold;
    width: 120px;
    display: inline-block;
    color: #000;
}

.rwd-table th,
.rwd-table td {
    text-align: left;
}

.rwd-table {
    color: #333;
    border-radius: .4em;
    overflow: hidden;
}

.rwd-table tr {
    border-color: #5B86EF;
}

.rwd-table th,
.rwd-table td {
    padding: .5em 1em;
}
@media screen and (max-width: 601px) {
    .rwd-table tr:nth-child(2) {
        border-top: none;
    }
    .rwd-table th:first-child,
    .rwd-table td:first-child {
        font-weight : bold;
        color: black;
    }
    .rwd-table td a {
        text-decoration: none;
        color: black;
    }
}
@media screen and (min-width: 600px) {
    .rwd-table tr:hover:not(:first-child) {
        background-color: rgba(131, 244, 180, 0.3);
        /*background-color: #83F4B4;과 동일 opacity*/
    }
    .rwd-table td:before {
        display: none;
    }
    .rwd-table td a {
        text-decoration: none;
        color: black;
    }
    .rwd-table th,
    .rwd-table td {
        display: table-cell;
        padding: .25em .5em;
    }
    .rwd-table th:first-child,
    .rwd-table td:first-child {
        font-weight : bold;
        padding-left: 0;
    }
    .rwd-table th:last-child,
    .rwd-table td:last-child {
        padding-right: 0;
    }
    .rwd-table th,
    .rwd-table td {
        padding: 1em !important;
    }
}

.pagination{
  margin: auto;
  justify-content: center;
}

.rwd-table{
  width: 1000px!important;
}

.common-buttons{
  position: relative;
  left: 120px;
}
</style>
