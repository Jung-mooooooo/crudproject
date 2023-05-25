
<template>
  <div class="container">
    <div class="card">
      <div class="card-body">
        <h3 class="card-title"><strong>QNA</strong></h3>
        <br>
        <form>
          <div class="form-group">
            <label for="qTitle"><h5>질문</h5></label>
            <input
              type="text"
              class="form-control"
              id="qTitle"
              v-model="qTitle"
              placeholder="질문란이 공백입니다."
            />
          </div>
          <br>
          <div class="form-group">
            <label for="qUserId"><h5>작성자</h5></label>
            <input
              type="text"
              class="form-control"
              id="qUserId"
              v-model="qUserId"
              placeholder="작성자란이 공백입니다."
            />
          </div>
          <br>
          <div class="form-group">
            <label for="qnaContent"><h5>내용</h5></label>
            <textarea
              rows="10"
              class="form-control"
              id="qnaContent"
              v-model="qContent"
              placeholder="내용이 공백입니다."
            >{{this.qContent}}</textarea>
          </div>
        </form>
        <br>
        <br>
        <br>
        <form>
          <div class="form-group">
            <label for="qnaTitle"><h5>답변</h5></label>
            <input
              type="text"
              class="form-control"
              id="qnaTitle"
              v-model="qnaTitle"
              placeholder="답변제목을 입력해주세요."
            />
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
        </form>
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
import AdminQnAWrite from '@/views/admin/AdminQnAWrite.vue'
export default {
  name: 'AdminQnAWrite',
  components: { AdminQnAWrite, dayjs },
  data() {
    return {
      requestBody: this.$route.query,
      qnaRef: this.$route.query.qnaNo,
      adminCode: 4,
      userId: '',
      qnaTitle: '',
      qnaContent: '',
      qUserId: this.$route.query.userId,
      qTitle: this.$route.query.qnaTitle,
      qContent: this.$route.query.qnaContent,
      createAt: ''
    };
  },
  mounted() {
    console.log("this.qnaRef : " + this.qnaRef);
  },
  methods: {
    fnList() {
      delete this.requestBody.qnaNo;
      this.$router.push({
        path: './AdminQnA',
        query: this.requestBody
      });
    },
    fnSave() {
      console.log("Do fnSave()");
      const apiUrl = "/admin/AdminQnAWrite/";
      const formData = {
        qnaRef: this.qnaRef,
        qnaTitle: this.qnaTitle,
        qnaContent: this.qnaContent
      };

      if (this.qnaRef !== undefined) {
        console.log("답변글 작성 요청 발송")
        // 글 추가
        this.$axios
          .post(apiUrl, formData)
          .then((res) => {
            if(res.data.qnaNo === undefined) alert('이미 답글이 있습니다. 저장되지 않습니다.');
            else alert('글이 저장되었습니다.');
            this.$router.replace({
              path: '/admin/AdminQnA',
              query: this.requestBody
            })
          })
          .catch((err) => {
            // 오류 처리
            if (err.message.indexOf('Network Error') > -1) {
              alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.');
            }
          });
      } else {
        // 글 수정
        this.$axios
          .patch(apiUrl, formData)
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