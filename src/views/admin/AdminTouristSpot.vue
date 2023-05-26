<!-- PageAbout.vue -->
<template>
<br>
<br>
<br>
<h3>힐링관광명소</h3>
<br>
<br>
  <!-- <div align="center">
    <button class="btn3 btn-blue" type="button" onclick="location.href='/admin/AdminWelfareFacility'">
    복지시설</button>
      &nbsp;&nbsp;
    <button class="btn3 btn-blue" type="button" onclick="location.href='/admin/AdminTouristSpot'">
    힐링관광명소</button>
      &nbsp;&nbsp;
    <button class="btn3 btn-blue" type="button" onclick="location.href='/admin/AdminHobby'">
    취미활동</button>
  </div> -->
<br>
<br>
<!-- 검색 필드 추가 -->
<div style="display: flex; justify-content : center;">
        <select v-model="search_key">
          <option value="">- 선택 -</option>
          <option value="tsName">시설명</option>
          <option value="address2">주소</option>
        </select>
        &nbsp;
        <input type="text" v-model="search_value" @keyup.enter="fnPage()" />
        &nbsp;
        <button class="btn2 btn-gray" @click="fnPage()">검색</button>
</div>
  
<br>
<div align="center">
<table align="center" class="board-table">
<thead>
  <br>
	<tr>
		<th scope="col" class="th-num">번호</th> 
		<th scope="col" class="th-title">시설명</th> 
		<th scope="col" class="th-title">카테고리</th>
    <th scope="col" class="th-title">소재지주소</th>
    <th scope="col" class="th-title">도로명주소</th>    
    <th scope="col" class="th-title">전화번호</th>
    <th scope="col" class="th-title">위도</th> 
    <th scope="col" class="th-title">경도</th>  
	</tr>
</thead>
<tbody>
		<tr v-if="showInputRow">
      <td><input type="text" v-model="newRow.tsNo" disabled style="width: 50px"/></td>
      <td><input type="text" v-model="newRow.tsName" style="width: 100px"/></td>
      <td><input type="text" v-model="newRow.tsCat" style="width: 100px"/></td>
      <td><input type="text" v-model="newRow.address" style="width: 200px"/></td>
      <td><input type="text" v-model="newRow.address2" style="width: 200px"/></td>
      <td><input type="text" v-model="newRow.phone" style="width: 100px"/></td>
      <td><input type="text" v-model="newRow.latitude" style="width: 100px"/></td>
      <td><input type="text" v-model="newRow.longitude" style="width: 100px"/></td>
      <td>
        <button type="button" class="btn btn-dark" @click="saveNewRow">완료</button>
      </td>
    </tr>

    <tr v-for="(row, index) in rows" :key="row.tsNo">
      <td>{{row.tsNo}}</td>
      <td v-show="!editMode">{{row.tsName}}</td>
      <td v-show="editMode"><input type="text" v-model="rows[index].tsName" style="width:100px"/></td>
      <td v-show="!editMode">{{row.tsCat}}</td>
      <td v-show="editMode"><input type="text" v-model="rows[index].tsCat" style="width:100px"/></td>
      <td v-show="!editMode">{{row.address}}</td>
      <td v-show="editMode"><input type="text" v-model="rows[index].address" style="width:200px"/></td>
      <td v-show="!editMode">{{row.address2}}</td>
      <td v-show="editMode"><input type="text" v-model="rows[index].address2" style="width:200px"/></td>
      <td v-show="!editMode">{{row.phone}}</td>
      <td v-show="editMode"><input type="text" v-model="rows[index].phone" style="width:100px"/></td>
      <td v-show="!editMode">{{row.latitude}}</td>
      <td v-show="editMode"><input type="text" v-model="rows[index].latitude" style="width:100px"/></td>
      <td v-show="!editMode">{{row.longitude}}</td>
      <td v-show="editMode"><input type="text" v-model="rows[index].longitude" style="width:100px"/></td>
      <td v-if="showDeleteButtons">
        <button type="button" class="btn btn-dark" @click="deleteRow(index)">삭제</button>
      </td>
    </tr>
	</tbody>
</table>
<br>

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
<br>
<br>

<div align="center">
  <button type="button" class="btn2 btn-gray" @click="toggleInputRow">추가</button> &nbsp;&nbsp;
  <button type="button" class="btn2 btn-gray" @click="toggleEditMode">수정</button> &nbsp;&nbsp;
  <button type="button" class="btn2 btn-gray" @click="toggleDeleteButtons">삭제</button> &nbsp;&nbsp;
</div>


</div>
</template>

<script>
  export default {
    data() { //변수생성
      return {
        showDeleteButtons: false,
        showNewRow: false,
        showInputRow: false,
        newRow: {
          tsNo: "",
          tsName: "",
          tsCat: "",
          address: "",
          address2: "",
          phone: "",
          latitude: "",
          longitude: ""
      },
      originalRows: [],
      rows: [],
      editMode: false,
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
      page: this.$route.query.page ? this.$route.query.page : 1,
      size: this.$route.query.size ? this.$route.query.size : 10,
      //keyword: this.$route.query.keyword,
      search_key: this.$route.query.sk ? this.$route.query.sk : '',
      search_value: this.$route.query.sv ? this.$route.query.sv : '',

      paginavigation: function () { //페이징 처리 for문 커스텀
          let pageNumber = [] //;
          let startPage = this.paging.startPage;
          let endPage = this.paging.endPage;
          for (let i = startPage; i <= endPage; i++) pageNumber.push(i);
          return pageNumber;
      }
  };
},
    mounted() {
      this.fetchWelfareFacility();
    },
    methods: {
      fetchWelfareFacility() {
        //스프링 부트에서 전송받은 데이터 출력 처리
        this.requestBody = { // 데이터 전송
              sk: this.search_key,
              sv: this.search_value,
              page: this.page,
              size: this.size
        }

        this.$axios.get('/welfareProgram/touristSpotList', {
            params: this.requestBody,
            headers: {}
        }).then((res) => {

            if (res.data.resultCode === "OK") {
                this.rows = res.data.data
                this.paging = res.data.pagination
                this.no = this.paging.totalListCnt - ((this.paging.page - 1) * this.paging.pageSize)
            }
        }).catch( error => {
            console.error(error);
        })
      },
      toggleDeleteButtons() {
        this.showDeleteButtons = !this.showDeleteButtons;
    },
    saveNewRow() {
        this.rows.unshift({...this.newRow, tsNo: this.rows[0].tsNo + 1});
        this.showNewRow = false;
        let apiUrl = '/touristspot'
        this.form = {
            "tsNo": this.newRow.tsNo,
            "tsName": this.newRow.tsName,
            "tsCat": this.newRow.tsCat,
            "address": this.newRow.address,
            "address2": this.newRow.address2,
            "phone": this.newRow.phone,
            "latitude": this.newRow.latitude,
            "longitude": this.newRow.longitude
        }

        this.$axios.post(apiUrl, this.form)

        this.newRow = {
        tsNo: "",
        tsName: "",
        tsCat: "",
        address: "",
        address2: "",
        phone: "",
        latitude: "",
        longitude: ""
        };
    },
    deleteRow(index) {
        let tsNo = this.rows[index].tsNo;
        this.$axios.delete('/touristspot/' + tsNo)
            .then(() => {
                this.rows.splice(index, 1);
            })
            .catch(error => {
                console.error(error);
            });
    },
    toggleEditMode() {
        this.editMode = !this.editMode;
        if (this.editMode) {
            // 편집 모드로 진입할 때 원본 데이터를 저장합니다.
            this.originalRows = JSON.parse(JSON.stringify(this.rows));
        } else {
            // 편집 모드에서 나올 때 변경된 데이터를 this.form에 설정하고, 서버로 보냅니다.
            this.form = JSON.parse(JSON.stringify(this.rows));
            this.$axios.patch('/touristspot', this.form)
        }

    },
    toggleInputRow() {
      this.showInputRow = !this.showInputRow;
    },
    fnPage(n) {
      if (this.page !== n) {
        this.page = n;
      }
      this.fetchWelfareFacility();
    }
    }
  }
  </script>

<style scoped>
table {
  border-collapse: collapse;
  border-spacing: 0;
}
section.notice {
  padding: 80px 0;
}

.page-title {
  margin-bottom: 60px;
}
.page-title h3 {
  font-size: 28px;
  color: #333333;
  font-weight: 400;
  text-align: center;
}

.pagination {
    display: flex;
    justify-content: center;
  }

.pagination .page-item {
    margin: 0 5px;
  }

.board-table {
  font-size: 13px;
  width: 90%;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}

.board-table a {
  color: #333;
  display: inline-block;
  line-height: 1.4;
  word-break: break-all;
  vertical-align: middle;
}
.board-table a:hover {
  text-decoration: underline;
}
.board-table th {
  text-align: center;
}

.board-table .th-num {
  width: 100px;
  text-align: center;
}

.board-table .th-date {
  width: 200px;
}

.board-table th, .board-table td {
  padding: 14px 0;
}

.board-table tbody td {
  padding-left: 28px;
  padding-right: 14px;
  border-top: 1px solid #e7e7e7;
  text-align: center;
}

.board-table tbody th {
  padding-left: 28px;
  padding-right: 14px;
  border-top: 1px solid #e7e7e7;
  text-align: left;
}

.board-table tbody th p{
  display: none;
}

.btn {
  display: inline-block;
  padding: 0 30px;
  font-size: 15px;
  font-weight: 400;
  background: transparent;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  text-transform: uppercase;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}

.btn-dark {
  background: #555;
  color: #fff;
}

.btn-dark:hover, .btn-dark:focus {
  background: #373737;
  border-color: #373737;
  color: #fff;
}

.btn2 {
  display: inline-block;
  padding: 0 30px;
  font-size: 15px;
  font-weight: 400;
  background: transparent;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  text-transform: uppercase;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}

.btn-gray {
background: #555;
color: #fff;
}

.btn3 {
  display: inline-block;
  padding: 0 30px;
  font-size: 15px;
  font-weight: 400;
  background: transparent;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  text-transform: uppercase;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 10px;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}

.btn-blue{
  background: #4285f4;
color: #fff;
}



/* reset */

* {
  list-style: none;
  text-decoration: none;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.clearfix:after {
  content: '';
  display: block;
  clear: both;
}
.container {
  width: 1100px;
  margin: 0 auto;
}
.blind {
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  margin: -1px;
  width: 1px;
  height: 1px;
}
</style>

