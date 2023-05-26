<template>
  <div class="char">
    <br><br>
    <h2><b>&nbsp;자주하는질문</b></h2>
    <br>
    <div class="accordion" id="accordionPanelsStayOpenExample">
      <!-- <div class="common-buttons">
        <button type="button" class="btn btn-outline-primary" v-on:click="fnWrite">등록</button>
      </div> -->
      <div class="accordion-item" v-for="(item, faqNo) in list" :key="item.faqNo">
        <h2 class="accordion-header" :id="'faqHeading' + faqNo">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="'#faqCollapse' + faqNo" aria-expanded="true" :aria-controls="'faqCollapse' + faqNo" :class="{ 'active': faqNo === activeIndex }" @click="toggleAccordion(faqNo)">
            <h5 :style="{ color: faqNo === activeIndex ? '#0C63E4' : 'black' }">
              <b>[{{ item.faqCat }}]&nbsp; {{ item.faqTitle }} </b>
            </h5>
          </button>
        </h2>
        <div :id="'faqCollapse' + faqNo" class="accordion-collapse collapse" :class="{ show: faqNo === activeIndex }" :aria-labelledby="'faqHeading' + faqNo">
          <div class="accordion-body">
            <h6>{{ item.faqContent }}</h6>
          </div>
          <!-- <div>
            <button @click="fnUpdate(item)">수정</button>&nbsp;
            <button @click="fnDeleteSelected">삭제</button>
          </div> -->
          <br>
        </div>
      </div>
    </div>
  </div>
  <br><br>
  <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item" :class="{ disabled: paging.page === 1 }">
          <a class="page-link" href="javascript:;" @click="fnPage(1)">&lt;&lt;</a>
        </li>
        <li class="page-item" :class="{ disabled: paging.page === 1 }">
          <a class="page-link" href="javascript:;" @click="fnPage(paging.page - 1)">&lt;</a>
        </li>
        <li v-if="paging.totalBlockCnt > 10" class="page-item">
          <a class="page-link" href="javascript:;">...</a>
        </li>
        <li v-for="n in paginavigation()" :class="{ active: paging.page === n }" :key="n" class="page-item">
          <a class="page-link" href="javascript:;" @click="fnPage(n)">{{ n }}</a>
        </li>
        <li v-if="paging.totalBlockCnt > 10 && paging.page < paging.totalBlockCnt" class="page-item">
          <a class="page-link" href="javascript:;">...</a>
        </li>
        <li class="page-item" :class="{ disabled: paging.page === paging.totalPageCnt }">
          <a class="page-link" href="javascript:;" @click="fnPage(paging.page + 1)">&gt;</a>
        </li>
        <li class="page-item" :class="{ disabled: paging.page === paging.totalPageCnt }">
          <a class="page-link" href="javascript:;" @click="fnPage(paging.totalPageCnt)">&gt;&gt;</a>
        </li>
      </ul>
    </nav>
</template>

<script>
  import dayjs from 'dayjs';
  import axios from "axios"
  axios.defaults.withCredentials = true;
  //import FAQ from '@/views/cs/FAQ.vue'
export default {    //export : 내보내기 -> 외부에서 사용할 수 있게 설정(그 설정에서 사용하는 data)
    name: 'FAQ',
      //components: {FAQ, dayjs},
      components: {dayjs},
  data() { //변수생성
    return {    //단순 list view인 경우, idx없이 넘어감.
      requestBody: {}, //리스트 페이지 데이터전송
      list: {}, //리스트 데이터
      no: '', //게시판 숫자처리
      paging: {
        block: 0,
        endPage: 0,
        nextBlock: 0,
        page: 0,
        pageSize: 0,
        prevBlock: 0,
        startIndex: 0,
        startPage: 0,
        totalBlockCnt: 0,
        totalListCnt: 0,
        totalPageCnt: 0,
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
        let startPage = this.paging.startPage;
        let endPage = this.paging.endPage;
        for (let i = startPage; i <= endPage; i++) pageNumber.push(i);
        return pageNumber;
      },
      activeIndex: null,
      requestBody: this.$route.query,
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
      this.$axios.get("/cs/FAQ", {
        params: this.requestBody,
        headers: {}
        
      }).then((res) => {      //.then(res) <= success callback임

       // this.list = res.data  //서버에서 데이터를 목록으로 보내므로 바로 할당하여 사용할 수 있다.
        //console.log(res);
       if (res.data.resultCode === "OK") {
          console.log("res.data.resultCode : " + res.data.resultCode);
          this.list = res.data.data;
          this.paging = res.data.pagination;
          this.no = this.paging.totalListCnt - ((this.paging.page - 1) * this.paging.pageSize);
          console.log("res.data.data : "+res.data.data);
          console.log("FAQ list : "+this.list);
          console.log("토탈 : "+this.paging.totalListCnt);
          console.log("페이지 : "+this.paging.page);
          console.log("페이지사이즈 : "+this.paging.pageSize);
        }

      }).catch((err) => {   //erorr callback
        //console.log(err);
        //console.log(res.data);
        if (err.message.indexOf('Network Error') > -1) {
          alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
        }
      })

    },
    // fnView(faqNo) { //글번호를 전달 후 router에 push. path: url, query: parameter
    //   this.requestBody.faqNo = faqNo
    //   this.$router.push({
    //     path: './FAQ', //같은 폴더에 있다 = ./
    //     query: this.requestBody
    //   })
    // },
    formatDate: function(datetime) {
          return dayjs(datetime).format('YYYY년 MM월 DD일 HH:mm:ss');
      },

    fnWrite() {
      this.$router.push({
        path: './FAQWrite'
      })
    },
    fnPage(n) {
      if (this.page !== n) {
        this.page = n
      }

      this.fnGetList()
    },
    fnList() {
     delete this.requestBody.faqNo
      this.$router.push({
        path: './FAQ',
        query: this.requestBody
      })
    },
    fnUpdate(item) {
      const selectedItem = this.list[this.activeIndex];
      this.requestBody = { // 데이터 전송
        keyword: this.keyword,
        page: this.page,
        size: this.size,
        sk: this.search_key,
        sv: this.search_value,
        faqNo: item.faqNo,
        faqTitle:`${selectedItem.faqTitle}`,
        faqContent:`${selectedItem.faqContent}`
      }

      console.log("item.faqNo : " + item.faqNo);
      console.log("faq this.requestBody : " + this.requestBody.faqTitle);

      this.$router.push({
        //path: `./FAQWrite/${item.faqNo}`,
        path: `./FAQWrite/`,
        query: this.requestBody
        //query: item.faqNo
      })
    },
    fnDeleteSelected() {
      if (!confirm("삭제하시겠습니까?")) return;  
      const selectedItem = this.list[this.activeIndex];
      axios.delete(`/cs/FAQDelete/${selectedItem.faqNo}`, {
        
        params: this.requestBody
        
      }).then(() => {
        alert('삭제되었습니다.');
        this.fnGetList();
      }).catch((err) => {
        console.log(err);
      });
    },
    toggleAccordion(faqNo) {
      this.activeIndex = (this.activeIndex === faqNo) ? null : faqNo;
    },
  },
  filters: {
      formatDate: function (datetime) {
        return dayjs(datetime).format('YYYY년 MM월 DD일 HH:mm:ss');
      }
    }
  
}
</script>

<style scoped>
.accordion {
  margin: 0 auto;
  width: 1000px !important;
}

.char {
  text-align: center;
}

.common-buttons {
  position: relative;
  left: 8px;
}

.pagination {
  display: flex;
  justify-content: center;
}

.pagination .page-item {
  margin: 0 5px;
  display: inline-block;
}
</style>
