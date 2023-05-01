<!-- PageAbout.vue -->
<template>
<br>
<br>
<br>
  <div align="center">
    <button class="btn3 btn-blue" type="button" onclick="location.href='/admin/counsellingCenter'">
    상담센터리스트</button>
      &nbsp;&nbsp;
    <button class="btn3 btn-blue" type="button" onclick="location.href='/admin/speechRecognitionHelper'">
    음성인식도우미관리</button>
  </div>   
<br>
<br> 
<div align="center">
  <table class="board-table">
  <thead>
    <tr>
      <th scope="col" class="th-title">번호</th>
      <th scope="col" class="th-title">시설명</th>
      <th scope="col" class="th-title">소재지주소</th>
      <th scope="col" class="th-title">전화번호</th>
    </tr>
  </thead>
  <tbody>
    <tr v-if="showInputRow">
      <td><input type="text" v-model="newRow.wf_no" disabled style="width: 50px"/></td>
      <td><input type="text" v-model="newRow.wf_name" style="width: 100px"/></td>
      <td><input type="text" v-model="newRow.address" style="width: 200px"/></td>
      <td><input type="text" v-model="newRow.phone" style="width: 100px"/></td>
      <td>
        <button type="button" class="btn btn-dark" @click="saveNewRow">완료</button>
      </td>
    </tr>

    <tr v-for="(row, index) in rows" :key="row.wf_no">
      <td>{{row.wf_no}}</td>
      <td v-show="!editMode">{{row.wf_name}}</td>
      <td v-show="editMode"><input type="text" v-model="rows[index].wf_name" style="width:100px"/></td>
      <td v-show="!editMode">{{row.address}}</td>
      <td v-show="editMode"><input type="text" v-model="rows[index].address" style="width:200px"/></td>
      <td v-show="!editMode">{{row.phone}}</td>
      <td v-show="editMode"><input type="text" v-model="rows[index].phone" style="width:100px"/></td>
      <td v-if="showDeleteButtons">
        <button type="button" class="btn btn-dark" @click="deleteRow(index)">삭제</button>
      </td>
    </tr>
  </tbody>
</table>
</div>

<div align="center">
  <button type="button" class="btn2 btn-gray" @click="toggleInputRow">추가</button> &nbsp;&nbsp;
  <button type="button" class="btn2 btn-gray" @click="toggleEditMode">수정</button> &nbsp;&nbsp;
  <button type="button" class="btn2 btn-gray" @click="toggleDeleteButtons">삭제</button> &nbsp;&nbsp;
</div>

<br>
<br> 
<button class="btn2 btn-gray">전체선택</button>
&nbsp;&nbsp;
<button class="btn2 btn-gray">선택해제</button>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<button class="btn2 btn-gray">확인</button>
&nbsp;&nbsp;
<button class="btn2 btn-gray">삭제</button>

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
      wf_no: "",
      wf_name: "",
      address: "",
      phone: ""
    },
    rows: [
        { 
          wf_no: 1,
          wf_name: "노원구청소년상담복지센터",
          address: "서울특별시 노원구 수락산로212-19 2층",
          phone: "02-2091-1388"
        },
        { 
          wf_no: 2,
          wf_name: "마포구청소년상담복지센터",
          address: "서울특별시 마포구 희우정로 77 마포한강아이파크 상가동",
          phone: "02-6376-9900"
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
        this.rows.unshift({...this.newRow, wf_no: this.rows[0].wf_no + 1});
        this.showNewRow = false;
        this.newRow = {
        wf_no: "",
        wf_name: "",
        address: "",
        phone: ""
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

.btn-gray {
background: #555;
color: #fff;
}
</style>

