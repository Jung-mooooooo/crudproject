//  > views/board/BoardWrite.vue 파일을 생성함.
//   현재 화면에 접근했을때, 넘어온 idx가 있으면 서버를 조회해서 
//   글을 수정할 수 있게(UPDATE) 하고, 
//   idx가 없으면 신규로 글을 작성할 수 있게(CREATE)	=> if, else로 
//   fnGetView를 마운트(연결 : javascript로 보면 window.onload)함.
<template>

    <!-- <div class="common-buttons">
      <button type="button" class="w3-button w3-round w3-blue-gray" v-on:click="fnSave">저장</button>&nbsp;
      <button type="button" class="w3-button w3-round w3-gray" v-on:click="fnList">목록</button>
    </div> -->
  <br><br><br><br>
  <table  style="padding-top:50px" align = center width=700 border=0 cellpadding=2 >
                <tr>
                <td height=20 align= center bgcolor=#ccc><strong><font color=white>QnA 질문</font></strong></td>
                </tr>
                <tr>
                <td bgcolor=white>
                <table class = "table2">
                  <th>
                    <tr>제목</tr>
                      <td><input type = text name = name size=30 placeholder="사이트 사용 문의"></td>
 
                    <tr>작성자</tr>
                      <td><input type = text name = title size=30 placeholder="coflsl123"></td>

                    <tr>내용</tr>
                      <td><textarea name = content cols=75 rows=3 placeholder="사이트는 어떻게 사용해야 하는건가요?? 넘 어렵네용 ㅇㅅㅇ"></textarea></td>
                  </th>
                </table>

                </td>
                </tr>
        </table>

          <table  style="padding-top:50px" align = center width=700 border=0 cellpadding=2 >
                <tr>
                <td height=20 align= center bgcolor=#ccc><strong><font color=white>QnA 답변</font></strong></td>
                </tr>
                <tr>
                <td bgcolor=white>
                <table class = "table2">
                  <th>
                    <tr>제목</tr>
                      <td><input type = text name = name size=30> </td>
 
                    <tr>작성자</tr>
                      <td><input type = text name = title size=30 placeholder="admin"></td>

                    <tr>내용</tr>
                      <td><textarea name = content cols=75 rows=3></textarea></td>
                  </th>
                </table>
 
                        <center>
                        <button type="button" class="w3-button w3-round w3-blue-gray" v-on:click="fnSave">작성</button>&nbsp;
                         <button type="button" class="w3-button w3-round w3-gray" v-on:click="fnList">목록</button>                     
                        </center>
                </td>
                </tr>
        </table>

</template>

<script>
export default {
  data() { //변수생성
    return {
      requestBody: this.$route.query,
      idx: this.$route.query.idx,

      title: '',
      author: '',
      contents: '',
      created_at: ''
    }
  },
  mounted() {
    this.fnGetView()
  },
  methods: {
    fnGetView() {
      if (this.idx !== undefined) {     //idx 존재시, update
        this.$axios.get(this.$serverUrl + '/board/' + this.idx, {
          params: this.requestBody
        }).then((res) => {
          this.title = res.data.title
          this.author = res.data.author
          this.contents = res.data.contents
          this.created_at = res.data.created_at
        }).catch((err) => {
          console.log(err)
        })
      }
    },
    fnList() {
      delete this.requestBody.idx
      this.$router.push({
        path: './AdminQnA',
        query: this.requestBody
      })
    },
    fnView(idx) {
      this.requestBody.idx = idx
      this.$router.push({
        path: './detail',
        query: this.requestBody
      })
    },
    fnSave() {
      let apiUrl = this.$serverUrl + '/board'
      this.form = {     //form data 생성하여 사용.
        "idx": this.idx,    //v-model 형태로
        "title": this.title,
        "contents": this.contents,
        "author": this.author
      }

      if (this.idx === undefined) { //idx 없으면,
        //INSERT
        this.$axios.post(apiUrl, this.form) //form을 post방식으로 전송
        .then((res) => {
          alert('글이 저장되었습니다.')
          this.fnView(res.data.idx)
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
          this.fnView(res.data.idx)
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
      .table2{
                border-collapse: separate;
                border-spacing: 1px;
                text-align: left;
                line-height: 1.5;
                border-top: 1px solid #ccc;
                margin : 20px 10px;
        }
        .table2 tr {
                 width: 50px;
                 padding: 10px;
                font-weight: bold;
                vertical-align: top;
                border-bottom: 1px solid #ccc;
        }
        .table2 td {
                 width: 100px;
                 padding: 10px;
                 vertical-align: top;
                 border-bottom: 1px solid #ccc;
        }
        
</style>