<!-- //  > views/board/BoardWrite.vue 파일을 생성함.
//   현재 화면에 접근했을때, 넘어온 idx가 있으면 서버를 조회해서 
//   글을 수정할 수 있게(UPDATE) 하고, 
//   idx가 없으면 신규로 글을 작성할 수 있게(CREATE)	=> if, else로 
//   fnGetView를 마운트(연결 : javascript로 보면 window.onload)함. -->
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
              placeholder="글 제목을 입력해주세요."/>
          </div>
        <br>
          <div class="form-group">
            <label for="noticeContent"><h5>본문</h5></label>
            <textarea rows="10" class="form-control" id="noticeContent" v-model="noticeContent" placeholder="본문내용을 입력해주세요."></textarea>
          </div>
        </form>
      </div>
    </div>
    <br>
    <div class="text-center">
      <button type="button" class="btn btn-primary" @click="fnSave">저장</button>
      <button type="button" class="btn btn-success" @click="fnList">목록</button>
    </div>
    <br>
  </div>
</template>

<script>
import dayjs from 'dayjs';
export default {
  components: { dayjs: dayjs},
  data() { //변수생성
    return {
      requestBody: this.$route.query,
      noticeNo: this.$route.query.noticeNo,
      adminCode: 4,
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
      if (this.noticeNo !== undefined) {     //idx 존재시, update
        this.$axios.get(this.$serverUrl + '/admin/AdminNoticeDetail/' + this.noticeNo, {
          params: this.requestBody
        }).then((res) => {
          this.noticeTitle = res.data.noticeTitle
          this.noticeContent = res.data.noticeContent
        }).catch((err) => {
          console.log(err)
        })
      }
    },
    fnList() {
      delete this.requestBody.noticeNo
      this.$router.push({
        path: './AdminNotice',
        query: this.requestBody
      })
    },
    fnView(noticeNo) {
      
      this.requestBody.noticeNo = noticeNo
      this.$router.push({
        path: './AdminNoticedetail',
        query: this.requestBody
      })
    },
    fnSave() {
      let apiUrl = "/admin/AdminNoticeWrite/"
      this.form = {     //form data 생성하여 사용.
        "noticeNo": this.noticeNo,    //v-model 형태로
        "adminCode": this.adminCode,
        "noticeTitle": this.noticeTitle,
        "noticeContent": this.noticeContent,
      }

      if (this.noticeNo === undefined) { //idx 없으면,
        //INSERT
        this.$axios.post(apiUrl, this.form) //form을 post방식으로 전송
        .then((res) => {
          alert('글이 저장되었습니다.')
          this.fnView(res.data.noticeNo)
        }).catch((err) => {
          if (err.message.indexOf('Network Error') > -1) {
            alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
          }
        })
      } else {  //idx 존재시,
        //UPDATE
        this.$axios.patch(apiUrl, this.form)    //form을 patch방식으로 전송
        .then((res) => {
          alert('글이 저장되었습니다.')
          this.fnView(this.$route.query.noticeNo)
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