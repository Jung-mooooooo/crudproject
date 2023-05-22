<template>
  <div class="board-detail">

    <div class="board-contents">
      <h3>{{noticeTitle}}</h3><br>
      <div>
        <b>작성자 : <span>관리자</span></b>
        <br><br>
        <b>작성일시 : <span>{{createAt}}</span></b>
        <br><br>
      </div>
    </div>
    <div class="board-contents">
      <span>{{noticeContent}}<br><br><br><br><br><br><br> </span><br><br>
    </div>
    <div class="common-buttons">
      <br>
      <button type="button" class="w3-button w3-round w3-blue-gray" v-on:click="fnUpdate">수정</button>&nbsp;
      <button type="button" class="w3-button w3-round w3-red" v-on:click="fnDelete">삭제</button>&nbsp;
      <button type="button" class="w3-button w3-round w3-gray" v-on:click="fnList">목록</button>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs';
import axios from "axios"
axios.defaults.withCredentials = true;
import AdminNoticeDetail from '@/views/admin/AdminNoticeDetail.vue'
export default {
 name: 'AdminNoticeDetail',
 components: {AdminNoticeDetail, dayjs},
  data() { //변수생성
    return {
      requestBody: this.$route.query,
      noticeNo: this.$route.query.noticeNo,
      noticeTitle: '',
      noticeContent: '',
      createAt: ''
    }
  },
  mounted() {
    this.fnGetView()
  },
  methods: {
    fnGetView() {
      console.log("여기는 디테일 뷰");
      axios.get("/admin/AdminNoticeDetail/" + this.noticeNo, {
        params: this.requestBody
      }).then((res) => {

        this.noticeNo = res.data.noticeNo
        this.noticeTitle = res.data.noticeTitle
        this.noticeContent = res.data.noticeContent
        this.createAt = dayjs(res.data.createAt).format('YYYY년 MM월 DD일 HH:mm:ss');
        console.log('this.createAt: ', this.createAt);

      }).catch((err) => {
        if (err.message.indexOf('Network Error') > -1) {
          alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
        }
      })
    },
    fnList() {
      delete this.requestBody.noticeNo
      this.$router.push({
        path: './AdminNotice',
        query: this.requestBody
      })
    },
    fnUpdate() {
      this.$router.push({
        path: './AdminNoticeWrite',
        query: this.requestBody
      })
    },
    fnDelete() {
      if (!confirm("삭제하시겠습니까?")) return;
      axios.delete(`/admin/AdminNoticeDetail/${this.noticeNo}`, {
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