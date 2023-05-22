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
      <button type="button" class="w3-button w3-round w3-gray" v-on:click="fnList">목록</button>
    </div>
  </div>
</template>

<script>
import axios from "axios"
axios.defaults.withCredentials = true;
import NoticeDetail from '@/views/cs/NoticeDetail.vue'
export default {
 name: 'NoticeDetail',
 components: {NoticeDetail},
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
      console.log("왜 안되지?");
      axios.get("/cs/NoticeDetail/" + this.noticeNo, {
        params: this.requestBody
      }).then((res) => {
        console.log(typeof res.data)
        this.noticeNo = res.data.noticeNo
        this.noticeTitle = res.data.noticeTitle
        this.noticeContent = res.data.noticeContent
        this.createAt = res.data.createAt

        console.log("res.data : " + this.noticeTitle);
        console.log("noticeTitle : " + this.noticeContent);
        console.log("noticeTitle : " + this.createAt);

      }).catch((err) => {
        if (err.message.indexOf('Network Error') > -1) {
          alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
        }
      })
    },
    fnList() {
      delete this.requestBody.noticeNo
      this.$router.push({
        path: './Notice',
        query: this.requestBody
      })
    },
    fnUpdate() {
      this.$router.push({
        path: './NoticeWrite',
        query: this.requestBody
      })
    },
    fnDelete() {
      if (!confirm("삭제하시겠습니까?")) return

      this.$axios.delete("/cs/Notice", {})
          .then(() => {
            alert('삭제되었습니다.')
            this.fnList();
          }).catch((err) => {
        console.log(err);
      })
    }
  }
}
</script>
<style scoped>


</style>