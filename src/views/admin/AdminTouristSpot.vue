<!-- PageAbout.vue -->
<template>
<br>
<br>
<br>
  <div align="center">
    <button class="btn3 btn-blue" type="button" onclick="location.href='/admin/AdminWelfareFacility'">
    복지시설</button>
      &nbsp;&nbsp;
    <button class="btn3 btn-blue" type="button" onclick="location.href='/admin/AdminTouristSpot'">
    힐링스팟</button>
      &nbsp;&nbsp;
    <button class="btn3 btn-blue" type="button" onclick="location.href='/admin/AdminHobby'">
    원데이클래스</button>
  </div>
<br>
<br>
<div id="board-search">
    <div class="container">
        <div class="search-window">
            <div class="search-wrap">	
                <label for="search" class="blind"></label>
                    <input id="search" type="search" name="keyword" placeholder="검색어를 입력하세요.">
                    <button type="submit" class="btn btn-dark">검색</button> 
                <br>
            </div>
        </div>
    </div>
</div>
<br>
<div align="center">
<br>
<br>
<table class="board-table">
  <thead>
    <tr>
      <th scope="col" class="th-title">번호</th>
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
      <td><input type="text" v-model="newRow.ts_no" disabled style="width: 50px"/></td>
      <td><input type="text" v-model="newRow.ts_name" style="width: 100px"/></td>
      <td><input type="text" v-model="newRow.ts_category" style="width: 100px"/></td>
      <td><input type="text" v-model="newRow.address" style="width: 200px"/></td>
      <td><input type="text" v-model="newRow.address2" style="width: 200px"/></td>
      <td><input type="text" v-model="newRow.phone" style="width: 100px"/></td>
      <td><input type="text" v-model="newRow.latitude" style="width: 100px"/></td>
      <td><input type="text" v-model="newRow.logitude" style="width: 100px"/></td>
      <td>
        <button type="button" class="btn btn-dark" @click="saveNewRow">완료</button>
      </td>
    </tr>

    <tr v-for="(row, index) in rows" :key="row.ts_no">
      <td>{{row.ts_no}}</td>
      <td v-show="!editMode">{{row.ts_name}}</td>
      <td v-show="editMode"><input type="text" v-model="rows[index].ts_name" style="width:100px"/></td>
      <td v-show="!editMode">{{row.ts_category}}</td>
      <td v-show="editMode"><input type="text" v-model="rows[index].ts_category" style="width:100px"/></td>
      <td v-show="!editMode">{{row.address}}</td>
      <td v-show="editMode"><input type="text" v-model="rows[index].address" style="width:200px"/></td>
      <td v-show="!editMode">{{row.address2}}</td>
      <td v-show="editMode"><input type="text" v-model="rows[index].address2" style="width:200px"/></td>
      <td v-show="!editMode">{{row.phone}}</td>
      <td v-show="editMode"><input type="text" v-model="rows[index].phone" style="width:100px"/></td>
      <td v-show="!editMode">{{row.latitude}}</td>
      <td v-show="editMode"><input type="text" v-model="rows[index].latitude" style="width:100px"/></td>
      <td v-show="!editMode">{{row.logitude}}</td>
      <td v-show="editMode"><input type="text" v-model="rows[index].logitude" style="width:100px"/></td>
      <td v-if="showDeleteButtons">
        <button type="button" class="btn btn-dark" @click="deleteRow(index)">삭제</button>
      </td>
    </tr>
  </tbody>
</table>

<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>

<div align="center">
  <button type="button" class="btn2 btn-gray" @click="toggleInputRow">추가</button> &nbsp;&nbsp;
  <button type="button" class="btn2 btn-gray" @click="toggleEditMode">수정</button> &nbsp;&nbsp;
  <button type="button" class="btn2 btn-gray" @click="toggleDeleteButtons">삭제</button> &nbsp;&nbsp;
</div>

<button class="btn2 btn-gray">전체선택</button>
&nbsp;&nbsp;
<button class="btn2 btn-gray">선택해제</button>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<button class="btn2 btn-gray">확인</button>
&nbsp;&nbsp;
<button class="btn2 btn-gray">삭제</button>

</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
  return {
    showDeleteButtons: false,
    showNewRow: false,
    showInputRow: false,
    newRow: {
      ts_no: "",
      ts_name: "",
      ts_category: "",
      address: "",
      address2: "",
      phone: "",
      latitude: "",
      logitude: ""
    },
    rows: [
        { 
          ts_no: 1,
          ts_name: "노원구청소년상담복지센터",
          ts_category: "상담시설",
          address: "서울특별시 노원구 수락산로212-19 2층",
          address2: "서울특별시,노원구,(01616)",
          phone: "02-2091-1388",
          latitude: "37.671445290918584",
          logitude: "127.05482794126408"
        },
        { 
          ts_no: 2,
          ts_name: "마포구청소년상담복지센터",
          ts_category: "상담시설",
          address: "서울특별시 마포구 희우정로 77 마포한강아이파크 상가동",
          address2: "서울특별시,마포구,(04016)",
          phone: "02-6376-9900",
          latitude: "37.552742496379594",
          logitude: "126.90243873309039" 
        },
        {  
          ts_no: 3,
          ts_name: "서울마음숲정신건강의학과의원",
          ts_category: "병원",
          address: "서울특별시 서초구 서초중앙로24길 27 지파이브센트럴프라자 213호",
          address2: "서울특별시 서초구",
          phone: "02-2038-3067",
          latitude: "37.4954383",
          logitude: "127.0164436" 
        }
    ],
    editMode: false
  };
},
  methods: {
    toggleDeleteButtons() {
        this.showDeleteButtons = !this.showDeleteButtons;
    },
    addNewRow() {
        this.showNewRow = true;
    },
    saveNewRow() {
        this.rows.unshift({...this.newRow, ts_no: this.rows[0].ts_no + 1});
        this.showNewRow = false;
        this.newRow = {
        ts_no: "",
        ts_name: "",
        ts_category: "",
        address: "",
        address2: "",
        phone: "",
        latitude: "",
        logitude: ""
        };
    },
    deleteRow(index) {
        this.rows.splice(index, 1);
    },
    toggleEditMode() {
        this.editMode = !this.editMode;
    },
    toggleInputRow() {
      this.showInputRow = !this.showInputRow;
    }
  }
};
</script>

<style scoped>
img{
  width: 200px;
}

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

#board-search .search-window {
  padding: 15px 0;
  background-color: #f9f7f9;
}
#board-search .search-window .search-wrap {
  position: relative;
/*   padding-right: 124px; */
  margin: 0 auto;
  width: 80%;
  max-width: 564px;
}
#board-search .search-window .search-wrap input {
  height: 40px;
  width: 100%;
  font-size: 14px;
  padding: 7px 14px;
  border: 1px solid #ccc;
}
#board-search .search-window .search-wrap input:focus {
  border-color: #333;
  outline: 0;
  border-width: 1px;
}
#board-search .search-window .search-wrap .btn {
  position: absolute;
  right: 0;
  top: 2;
  bottom: 0;
  width: 70px;
  height: 40px;
  padding: 0;
  font-size: 16px;
}

.board-table {
  font-size: 13px;
  width: 50%;
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

