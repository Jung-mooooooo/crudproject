<template>

  <div class="container">
    <div class="card">
      <div class="card-body">
        <h3 class="card-title"><strong>FAQ</strong></h3>
        <br>
        <form>

          <select v-model="faqCat">
            <option value="">- 카테고리 선택 -</option>
            <option value="심리/고민상담">심리/고민상담</option>
            <option value="자기분석 테스트">자기분석 테스트</option>
            <option value="복지프로그램">복지프로그램</option>
            <option value="고객센터">고객센터</option>
          </select>
          <br>

          <div class="form-group">
            <label for="faqTitle"><h5>질문</h5></label>
            <textarea 
              rows="3"
              class="form-control" 
              id="faqTitle"
              v-model="faqTitle"
              placeholder="질문을 입력해주세요"></textarea>
          </div>
        <br>
          <div class="form-group">
            <label for="faqContent"><h5>답변</h5></label>
            <textarea 
              rows="3"
              class="form-control" 
              id="faqContent"
              v-model="faqContent"
              placeholder="답변을 입력해주세요"></textarea>
          </div>
        </form>
      </div>
    </div>
    <br>
    <div class="text-center">
      <button type="button" class="btn btn-primary" @click="fnSave">저장</button> &nbsp;
      <button type="button" class="btn btn-success" @click="fnList">목록</button>
    </div>
    <br>
  </div>
</template>

<script>
  import dayjs from 'dayjs';
  import axios from "axios"
  axios.defaults.withCredentials = true;
  import AdminFAQWrite from '@/views/admin/AdminFAQWrite.vue'
export default {
  name: 'AdminFAQWrite',
      //components: {AdminFAQ, dayjs},
  components: {AdminFAQWrite},
  data() { //변수생성
    return {
      requestBody: this.$route.query,
      faqNo: this.$route.query.faqNo,
      faqTitle: this.$route.query.faqTitle,
      adminCode: '',
      faqContent: this.$route.query.faqContent,
      createAt: '',
      faqCat: ''
    }
  },
  mounted() {
    console.log("faqNo : "+this.faqNo);
    console.log("faqTitle : "+this.faqTitle);
    console.log("faqContent : "+this.faqContent);
    // this.fnGetView()
  },
  methods: {
    fnGetView()  {
      console.log("작성뷰의 fnGetView메서드");
      axios.get("/admin/AdminNoticeDetail/" + this.noticeNo,{
        params: this.requestBody
      }).then((res) => {
          this.noticeTitle = res.data.noticeTitle;
          this.noticeContent = res.data.noticeContent;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fnList() {
      delete this.requestBody.faqNo
      this.$router.replace({
        path: '/admin/AdminFAQ',
        query: this.requestBody
      })
    },
    fnView(faqNo) {
      this.requestBody.faqNo = faqNo
      this.$router.go(-1)
    },
    fnSave() {
      if(this.faqCat.length < 1 || this.faqTitle.length < 1 || this.faqContent < 1) {
        alert('카테고리, 제목, 답변을 확인해주세요.');
        return;
      }
      // console.log("FAQ 세션에있는 userCode : "+sessionStorage.getItem("userPw"));      
      console.log("FAQ 세션에있는 userCode : "+sessionStorage.getItem("userCode"));      
      this.adminCode = sessionStorage.getItem("userCode");

      let apiUrl = "/admin/AdminFAQWrite/"
      this.form = {     //form data 생성하여 사용.
        "faqNo": this.faqNo,    //v-model 형태로
        "adminCode": this.adminCode,
        "faqTitle": this.faqTitle,
        "faqContent": this.faqContent,
        "faqCat": this.faqCat,
      }
      console.log("this.faqNo1 : " + this.faqNo);
      console.log("this.faqCat1 : " + this.faqCat);
      if (this.faqNo === undefined) { //idx 없으면,
        //INSERT
        this.$axios.post(apiUrl, this.form) //form을 post방식으로 전송
        .then((res) => {
          alert('글이 저장되었습니다.')
          this.fnView(res.data.faqNo)
        }).catch((err) => {
          if (err.message.indexOf('Network Error') > -1) {
            alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
          }
        })
      } else {  //idx 존재시,
        //UPDATE
        console.log("this.faqCat1_1 : " + this.form.faqCat);
        this.$axios.patch(apiUrl, this.form)    //form을 patch방식으로 전송
        .then((res) => {
          alert('글이 수정되었습니다.')
          this.fnView(this.$route.query.faqNo)
        }).catch((err) => {
          if (err.message.indexOf('Network Error') > -1) {
            alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
          }
        })
      }
    }
  }
}
</script>
<style scoped>

        .form-group label {
            position: relative;
            left: -610px;
            top: 8px;
        }
</style>