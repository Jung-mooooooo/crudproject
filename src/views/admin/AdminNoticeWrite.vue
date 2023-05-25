<template>
  <div class="container">
    <div class="card">
      <div class="card-body">
        <h3 class="card-title"><strong>공지사항</strong></h3>
        <form>
          <div class="form-group">
            <label for="noticeTitle"><h5>제목</h5></label>
            <input
              type="text"
              class="form-control"
              id="noticeTitle"
              v-model="noticeTitle"
              placeholder="글 제목을 입력해주세요."
            />
          </div>
          <br>
          <div class="form-group">
            <label for="noticeContent"><h5>본문</h5></label>
            <textarea
              rows="10"
              class="form-control"
              id="noticeContent"
              v-model="noticeContent"
              placeholder="본문내용을 입력해주세요."
            >{{this.noticeTitle}}</textarea>
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
import AdminNoticeWrite from '@/views/admin/AdminNoticeWrite.vue'
export default {
  name: 'AdminNoticeWrite',
  components: { AdminNoticeWrite, dayjs },
  data() {
    return {
      requestBody: this.$route.query,
      noticeNo: this.$route.query.noticeNo,
      adminCode: 4,
      noticeTitle: this.$route.query.noticeTitle,
      noticeContent: this.$route.query.noticeContent,
      createAt: ''
    };
  },
  mounted() {
    console.log("작성뷰에서 mounted되었을 떄 this.noticeNo : " + this.noticeNo);
    if (this.noticeNo !==undefined ) {
      // this.fnGetView();
    }
  },
  methods: {
    fnGetView() {
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
      delete this.requestBody.noticeNo;
      this.$router.push({
        path: './AdminNotice',
        query: this.requestBody
      });
    },
    fnView(noticeNo) {
      this.requestBody.noticeNo = noticeNo;
      this.$router.push({
        path: './AdminNoticedetail',
        query: this.requestBody
      });
    },
    fnSave() {
      const apiUrl = "/admin/AdminNoticeWrite/";
      const formData = {
        noticeNo: this.noticeNo,
        adminCode: this.adminCode,
        noticeTitle: this.noticeTitle,
        noticeContent: this.noticeContent
      };

      if (this.noticeNo === undefined) {
        // 글 추가
        this.$axios
          .post(apiUrl, formData)
          .then((res) => {
            alert('글이 저장되었습니다.');
            this.fnView(res.data.noticeNo);
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
            this.fnView(this.$route.query.noticeNo);
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
