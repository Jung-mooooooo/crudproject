<!-- PageAbout.vue -->
<template>
  <br />
  <br />
  <br />
  <!-- <div id="board-search">
    <div class="container">
      <div class="search-window">
        <div class="search-wrap">
          <label for="search" class="blind"></label>
          <input
            id="search"
            type="search"
            name="keyword"
            placeholder="검색어를 입력하세요."
          />
          <button type="submit" class="btn btn-dark">검색</button>
          <br />
        </div>
      </div>
    </div>
  </div> -->

<head>
<h1>상담시설/병원</h1>
<br>
</head>
<body>
<div class="map_wrap">
    <div id="map" style="width:100%;height:100%;position:relative;overflow:hidden;"></div>

    <div id="menu_wrap" class="bg_white">
        <div class="option">
          <button @click="displayWelfareFacility(markerPositions)">검색</button> 
            <div>
                <!-- <form onsubmit="searchPlaces(); return false;">
                    <input type="text" v-model="search_value" @keyup.enter="fnPage()" id="keyword"> 
                    <button @click="fnPage()">검색</button> 
                </form> -->
            </div>
        </div>
        <hr>
        <table>
          <thead>
            <tr>
              <th>시설명</th>
              <th>주소</th>
              <th>전화번호</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in wfItems" :key="item.wfNo">
              <td>{{item.wfNo}}</td>
              <td>{{item.wfName}}</td>
              <td>{{item.address2}}</td>
              <td>{{item.phone}}</td>
            </tr>
          </tbody>
        </table>
        <!-- <div class="pagination w3-bar w3-padding-16 w3-small" v-if="paging.total_list_cnt > 0">
      <span class="pg">
      <a href="javascript:;" @click="fnPage(1)" class="first w3-button w3-border">&lt;&lt;</a>
      <a href="javascript:;" v-if="paging.start_page > 10" @click="fnPage(${paging.start_page-1})"
         class="prev w3-button w3-border">&lt;</a>
      <template v-for=" (n,index) in paginavigation()">
          <template v-if="paging.page==n">
              <strong class="w3-button w3-border w3-green" :key="index">{{ n }}</strong>
          </template>
          <template v-else>
              <a class="w3-button w3-border" href="javascript:;" @click="fnPage(${n})" :key="index">{{ n }}</a>
          </template>
      </template>
      <a href="javascript:;" v-if="paging.total_page_cnt > paging.end_page"
         @click="fnPage(${paging.end_page+1})" class="next w3-button w3-border">&gt;</a>
      <a href="javascript:;" @click="fnPage(${paging.total_page_cnt})" class="last w3-button w3-border">&gt;&gt;</a>
      </span>
    </div> -->
        <!-- <ul id="placesList"></ul>
        <div id="pagination"></div> -->
    </div>
</div>
</body>
</template>

 <script>
import axios from "axios";
axios.defaults.withCredentials = true;

export default {
  name: 'WelfareFacilityMap',
  props: {
    wfItems: {
      type: Array
    }
    // msg: String
  },
  data(){
    return{
      markers: [],
      infowindows: [],
      markerPositions: []
    }
  },
  mounted(){
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script")
      script.onload = () => kakao.maps.load(this.initMap);
      script.src = "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=1975648a88442d985c0473dc051a7483&libraries=services";
      document.head.appendChild(script)
    }
  },
  methods: {
    initMap(){
      var mapContainer = document.getElementById('map'),
      mapOption = {
        center: new kakao.maps.LatLng(33.37113980098013, 126.55530201679869),
        level: 9,
      };
      var map = new kakao.maps.Map(mapContainer, mapOption);

      axios.post('', {
        wfNo: this.wfNo,
        wfName: this.wfName,
        address: this.address,
        phone: this.phone
      })

      this.requestBody = {
        sk: this.search_key,
        sv: this.search_value,
        page: this.page,
        size: this.size
      }
      this.$axios.get(this.$serverUrl + "/welfarefacility/list", {
        params: this.requestBody,
        Headers: {}
      }).then((res) => {

        if(res.data.result_code === "OK"){
          this.list = res.data.data
          this.paging = res.data.pagination
          this.no = this.paging.total_list_cnt - ((this.paging.page - 1) * this.paging.page.size)
        }
      }).catch((err) => {
        if(err.message.indexof('Network Error') > -1){
          alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
        }
    })

      var positions = []
      var imageSrc = require('@/assets/marker.png'), // 마커이미지의 주소입니다
    imageSize = new kakao.maps.Size(24, 35), // 마커이미지의 크기입니다
    imageOption = { offset: new kakao.maps.Point(20, 35) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

// 마커를 생성합니다
  positions.forEach(function(pos) {
    var marker = new kakao.maps.Marker({
      map: map, // 마커를 표시할 지도
      position: pos.latlng, // 마커의 위치
      image: markerImage,
    });
    },
    displayWelfareFacility(markerPositions){
      if(this.markers.length > 0){
        this.markers.forEach((marker) => marker.setMap(null));
      }
      axios({
        method: 'post',
        url: 'http://localhost:5957/welfareProgram/welfareFacilityMap',
        headers: {'X-Requested-With': 'XMLHttpRequest'},
        responseType: 'json'
      }).then((Response) => {
        for(let i =0; i < Response.data.length; i++){
          this.markerPositions.push([Response.data[i].LATITUDE, Response.data[i].LONGITUDE])
        }
      }).catch(function(error){
        console.log(error.toJSON());
      })
      const position = markerPositions.map(
        (position) => new kakao.maps.LatLng(...position)
      );
      if(position.length > 0){
        this.markers = position.map(
          (position) =>
            new kakao.maps.Marker({
              map: this.map,
              position,
            })
        );
      }
    },
};
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
  width: 100%;
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

.board-table th,
.board-table td {
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

.board-table tbody th p {
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

.btn-dark:hover,
.btn-dark:focus {
  background: #373737;
  border-color: #373737;
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
  content: "";
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

.map_wrap, .map_wrap * {margin:0;padding:0;font-family:'Malgun Gothic',dotum,'돋움',sans-serif;font-size:12px;}
.map_wrap a, .map_wrap a:hover, .map_wrap a:active{color:#000;text-decoration: none;}
.map_wrap {position:relative;width:100%;height:500px;}
#menu_wrap {position:absolute;top:0;left:0;bottom:0;width:250px;margin:10px 0 30px 10px;padding:5px;overflow-y:auto;background:rgba(255, 255, 255, 0.7);z-index: 1;font-size:12px;border-radius: 10px;}
.bg_white {background:#fff;}
#menu_wrap hr {display: block; height: 1px;border: 0; border-top: 2px solid #5F5F5F;margin:3px 0;}
#menu_wrap .option{text-align: center;}
#menu_wrap .option p {margin:10px 0;}  
#menu_wrap .option button {margin-left:5px;}
#placesList li {list-style: none;}
#placesList .item {position:relative;border-bottom:1px solid #888;overflow: hidden;cursor: pointer;min-height: 65px;}
#placesList .item span {display: block;margin-top:4px;}
#placesList .item h5, #placesList .item .info {text-overflow: ellipsis;overflow: hidden;white-space: nowrap;}
#placesList .item .info{padding:10px 0 10px 55px;}
#placesList .info .gray {color:#8a8a8a;}
#placesList .info .jibun {padding-left:26px;background:url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/places_jibun.png) no-repeat;}
#placesList .info .tel {color:#009900;}
#placesList .item .markerbg {float:left;position:absolute;width:36px; height:37px;margin:10px 0 0 10px;background:url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png) no-repeat;}
#placesList .item .marker_1 {background-position: 0 -10px;}
#placesList .item .marker_2 {background-position: 0 -56px;}
#placesList .item .marker_3 {background-position: 0 -102px}
#placesList .item .marker_4 {background-position: 0 -148px;}
#placesList .item .marker_5 {background-position: 0 -194px;}
#placesList .item .marker_6 {background-position: 0 -240px;}
#placesList .item .marker_7 {background-position: 0 -286px;}
#placesList .item .marker_8 {background-position: 0 -332px;}
#placesList .item .marker_9 {background-position: 0 -378px;}
#placesList .item .marker_10 {background-position: 0 -423px;}
#placesList .item .marker_11 {background-position: 0 -470px;}
#placesList .item .marker_12 {background-position: 0 -516px;}
#placesList .item .marker_13 {background-position: 0 -562px;}
#placesList .item .marker_14 {background-position: 0 -608px;}
#placesList .item .marker_15 {background-position: 0 -654px;}
#pagination {margin:10px auto;text-align: center;}
#pagination a {display:inline-block;margin-right:10px;}
#pagination .on {font-weight: bold; cursor: default;color:#777;}
</style>

