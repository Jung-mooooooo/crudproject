
<template>
  <div class="container">
    <div class="card">
      <div class="card-body">
        <h3 class="card-title"><strong>QNA</strong></h3>
        <br>
        <form>
          <div class="form-group">
            <label for="qnaTitle"><h5>질문</h5></label>
            <input
              type="text"
              class="form-control"
              id="qnaTitle"
              v-model="qnaTitle"
              placeholder="질문란이 공백입니다."
              />
          </div>
          <br>
          <div class="form-group">
            <label for="userId"><h5> 작성자</h5></label>
            <input
              type="text"
              class="form-control"
              id="userId"
              v-model="userId"
              placeholder="작성자란이 공백입니다."
              readonly  />
          </div>
          <br>
          <div class="form-group">
            <label for="qnaContent"><h5>내용</h5></label>
            <textarea
              rows="10"
              class="form-control"
              id="qnaContent"
              v-model="qnaContent"
              placeholder="내용이 공백입니다."
              >{{this.qnaContent}}</textarea>
          </div>
          <td><input type="radio" id="qnaPrivateY" name="qnaPrivate" v-model="qnaPrivateY" value="Y" @change="chgRadio($event)" checked/>공개 
            &nbsp;<input type="radio" id="qnaPrivateN" v-model="qnaPrivateN" name="qnaPrivate" value="N" @change="chgRadio($event)"/>비공개</td>
        </form>
        <br>
      </div>
    </div>
    <br>
    <div class="text-center">
      <button type="button" class="btn btn-primary" @click="fnSave">저장</button> &nbsp;
      <button type="button" class="btn btn-success" @click="fnList">뒤로가기</button>
    </div>
    <br>
  </div>
</template>

<script>
import dayjs from 'dayjs';
import axios from "axios"
axios.defaults.withCredentials = true;
import QnAWrite from '@/views/cs/QnAWrite.vue'
import { isIfStatement } from '@babel/types';
export default {
  name: 'QnAWrite',
  components: { QnAWrite, dayjs },
  data() {
    return {
      requestBody: this.$route.query,
      qnaNo: this.$route.query.qnaNo,
      qnaRef: this.$route.query.qnaRef,
      userId: this.$route.query.userId,
      qnaTitle: this.$route.query.qnaTitle,
      qnaContent: this.$route.query.qnaContent,
      createAt: '',
      qnaPrivate: 'Y',
      qnaPrivateY: 'Y',
      qnaPrivateN: '',
      qnaYn: '',
      userCode: ''
    };
  },
  mounted() {
    console.log("this.qnaRef : " + this.qnaRef);
    this.fnGetView();
  },
  methods: {
    fnGetView() {
      console.log("여기는 사용자 작성화면");
      axios.get("/cs/QnAUserCheck", {})
      .then((res) => {
        this.userId = res.data.userId

        console.log("현재 로그인한 아이디 : "+res.data.userId);
        console.log("도착한 응답 1 : "+res.data);

      }).catch((err) => {
        if (err.message.indexOf('Network Error') > -1) {
          alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
        }
      })
    },
    fnList() {
      delete this.requestBody.qnaNo;
      this.$router.push({
        path: './QnA',
        query: this.requestBody
      });
    },
    chgRadio(event){
      var selected = event.target.value;
      this.qnaPrivate = selected;
      console.log("selected : ", selected);
      console.log("this.qnaPrivate : ", this.qnaPrivate);
    },
    fnSave() {
      console.log("Do fnSave1()");
      this.userCode = sessionStorage.getItem("userCode");
      const apiUrl = "/cs/QnAWrite/";
      const formData = {
        userId: this.userId,
        qnaNo: this.qnaNo,
        qnaRef: this.qnaRef,
        qnaTitle: this.qnaTitle,
        qnaContent: this.qnaContent,
        qnaPrivate: this.qnaPrivate,
        userCode: this.userCode
      };
      console.log("qnaNo : "+formData.qnaNo+", qnaRef : "+formData.qnaRef);
      if (this.qnaTitle.length == 0 || this.qnaContent.length == 0){
        alert("제목과 내용을 확인해주세요.");
        return;
      }
      
      if( this.qnaNo == undefined ) {
        console.log("답변글 작성 요청 발송")
        // 글 추가
        this.$axios
          .post(apiUrl, formData)
          .then((res) => {
            if(res.data.qnaNo === undefined) alert('이미 답글이 있습니다. 저장되지 않습니다.');
            else alert('글이 저장되었습니다.');
            this.$router.replace({
              path: '/cs/QnA',
              query: this.requestBody
            })
          })
          .catch((err) => {
            // 오류 처리
            if (err.message.indexOf('Network Error') > -1) {
              alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.');
            }
          });
      } else if(this.qnaNo > 0){
        // 글 수정
        console.log("글 수정할게요 : "+this.qnaNo);
        this.$axios
          .post(apiUrl, formData)
          .then((res) => {
            alert('글이 저장되었습니다.');
            this.fnView(this.$route.query.qnaNo);
          })
          .catch((err) => {
            // 오류 처리
            if (err.message.indexOf('Network Error') > -1) {
              alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.');
            }
          });
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