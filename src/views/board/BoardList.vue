<template>
  <div class="board-list">
    <div class="common-buttons">
      <button type="button" class="w3-button w3-round w3-blue-gray" v-on:click="fnWrite">등록</button>
    </div>
    <table class="w3-table-all">
      <thead>
      <tr>
        <th>No</th>
        <th>제목</th>
        <th>작성자</th>
        <th>등록일시</th>
      </tr>
      </thead>
      <tbody>
      <!-- 자바스크립트의 for in 문과 유사/ view가 제공한다 = v- -->
      <tr v-for="(row, idx) in list" :key="idx">  
        <td>{{ row.idx }}</td>
        <!-- view가 제공하는 on event임.  -->
        <td><a v-on:click="fnView(`${row.idx}`)">{{ row.title }}</a></td>
        <td>{{ row.author }}</td>
        <td>{{ row.created_at }}</td>
      </tr>
      </tbody>
    </table>
    <div class="pagination w3-bar w3-padding-16 w3-small" v-if="paging.total_list_cnt > 0">
      <span class="pg">
      <a href="javascript:;" @click="fnPage(1)" class="first w3-button w3-border">&lt;&lt;</a>
      <a href="javascript:;" v-if="paging.start_page > 10" @click="fnPage(`${paging.start_page-1}`)"
         class="prev w3-button w3-border">&lt;</a>
         <!-- template tag : for, if문같은 반복문과 조건문 사용 가능-->
      <template v-for=" (n,index) in paginavigation()">
          <template v-if="paging.page==n">
              <strong class="w3-button w3-border w3-green" :key="index">{{ n }}</strong>
          </template>
          <template v-else>
              <a class="w3-button w3-border" href="javascript:;" @click="fnPage(`${n}`)" :key="index">{{ n }}</a>
          </template>
      </template>
      <a href="javascript:;" v-if="paging.total_page_cnt > paging.end_page"
         @click="fnPage(`${paging.end_page+1}`)" class="next w3-button w3-border">&gt;</a>
      <a href="javascript:;" @click="fnPage(`${paging.total_page_cnt}`)" class="last w3-button w3-border">&gt;&gt;</a>
      </span>
    </div>
  </div>

  <!-- 검색 필드 추가 -->
  <div>
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
      //임시데이터 출력 처리
      // this.list = [
      //   {
      //       "idx":1,
      //       "title": "제목1",
      //       "author": "작성자1",
      //       "created_at": "작성일시1"
      //   },
      //   {
      //       "idx":1,
      //       "title": "제목1",
      //       "author": "작성자1",
      //       "created_at": "작성일시1"
      //   },
      //   {
      //       "idx":1,
      //       "title": "제목1",
      //       "author": "작성자1",
      //       "created_at": "작성일시1"
      //   }
      // ]
    },
    fnView(idx) { //글번호를 전달 후 router에 push. path: url, query: parameter
      this.requestBody.idx = idx
      this.$router.push({
        path: './detail', //같은 폴더에 있다 = ./
        query: this.requestBody
      })
    },
    fnWrite() {
      this.$router.push({
        path: './write'
      })
    },
    fnPage(n) {
      if (this.page !== n) {
        this.page = n
      }

      this.fnGetList()
    }
  }
}
</script>