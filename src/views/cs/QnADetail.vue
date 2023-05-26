<template>
  <div class="board-detail">

    <div class="board-contents">
      <h3>{{qnaTitle}}</h3><br>
      <div>
        <b>작성자 : <span>{{userId}}</span></b>
        <br><br>
        <b>작성일시 : <span>{{createAt}}</span></b>
        <br><br>
      </div>
    </div>
    <div class="board-contents">
      <span>{{qnaContent}}<br><br><br><br><br><br><br> </span><br><br>
    </div>
    <div class="common-buttons">
      <br>
      <button v-show="qnaNo === qnaRef" type="button" class="w3-button w3-round w3-blue-gray" v-on:click="fnUpdate">답글</button>&nbsp;
      <button type="button" class="w3-button w3-round w3-red" v-on:click="fnDelete">삭제</button>&nbsp;
      <button type="button" class="w3-button w3-round w3-gray" v-on:click="fnList">목록</button>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs';
import axios from "axios"
axios.defaults.withCredentials = true;
import QnADetail from '@/views/cs/QnADetail.vue'
export default {
 name: 'QnADetail',
 components: {QnADetail, dayjs},
  data() { //변수생성
    return {
      requestBody: this.$route.query,
      qnaNo: this.$route.query.qnaNo,
      qnaRef: '',
      userId: '',
      qnaTitle: '',
      qnaContent: '',
      createAt: ''
    }
  },
  mounted() {
    this.fnGetView()
    
  },
  methods: {
    fnGetView() {
      console.log("여기는 디테일 뷰1");
      axios.get("/cs/QnADetail/" + this.qnaNo, {
        params: this.requestBody
      }).then((res) => {
        this.qnaNo = res.data.qnaNo
        this.userId = res.data.userId
        this.qnaTitle = res.data.qnaTitle
        this.qnaContent = res.data.qnaContent
        this.createAt = dayjs(res.data.createAt).format('YYYY년 MM월 DD일 HH:mm:ss');
        this.qnaRef = res.data.qnaRef

        console.log("답글체크용 : "+res.data.qnaNo+", "+this.qnaNo+", "+res.data.qnaRef+", "+this.qnaRef);

      }).catch((err) => {
        if (err.message.indexOf('Network Error') > -1) {
          alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
        }
      })
    },
    fnList() {
      delete this.requestBody.qnaNo
      this.$router.go(-1)
    },
    fnUpdate() {
      console.log("디테일뷰의 this.requestBody.qnaNo : " + this.requestBody.qnaNo);
      this.requestBody.userId = this.userId;
      this.requestBody.qnaTitle = this.qnaTitle;
      this.requestBody.qnaContent = this.qnaContent;
      this.$router.push({
        path: './QnAWrite',
        query: this.requestBody 
      })
      console.log("디테일뷰의 this.requestBody.qnaNo : " + this.requestBody.qnaNo);
    },
    fnDelete() {
      if (!confirm("삭제하시겠습니까?")) return;
      axios.delete(`/cs/QnADelete/${this.qnaNo}`, {
        params: this.requestBody
      }).then(() => {
        alert('삭제되었습니다.');
        this.fnList();
      }).catch((err) => {
        console.log(err);
      });
    }
  }
}
</script>
<style scoped>


</style>