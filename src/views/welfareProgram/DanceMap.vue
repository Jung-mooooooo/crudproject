<template>
  <body>
    <h1>취미활동</h1>
    <br />
    <br />
  <div class="box">
    <div class="list">
      <div style="display: flex; justify-content : center;">
      <!-- 검색 필드 추가 -->
        <select v-model="search_key">
          <option value="">- 선택 -</option>
          <option value="hobbyName">시설명</option>
          <option value="address2">주소</option>
        </select>
        &nbsp;
        <input type="text" v-model="search_value" @keyup.enter="fnPage()" />
        &nbsp;
        <button class="bt" @click="fnPage()">검색</button>
      </div>
      <br>
      <table class="rwd-table">
        <tbody>
          <tr>
            <th>NO</th>
            <th>시설명</th>
            <th>주소</th>
            <th>전화번호</th>
          </tr>
        
          <tr v-for="(row, hobbyNo) in list" :key="hobbyNo">
            <td>{{ row.hobbyNo }}</td>
            <td>{{ row.hobbyName }}</td>
            <td>{{ row.address2 }}</td>
            <td>{{ row.phone }}</td>
          </tr>
        </tbody>
      </table>
      <div style="display: flex; justify-content : center;">
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
  </div>
  </div>

    <div class="map">
      <div class="map_wrap">
    <div id="map" style="width:100%;height:100%;position:relative;overflow:hidden;"></div>
      </div>
    </div>
  </div>
  </body>
</template>

<script>
export default {
  data() {
    //변수생성
    return {
      map: null,
      markers: [],
      latitude: 0,
      longitude: 0,
      requestBody: {}, //리스트 페이지 데이터전송
      list: {}, //리스트 데이터
      no: "", //게시판 숫자처리
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
      search_key: this.$route.query.sk ? this.$route.query.sk : "",
      search_value: this.$route.query.sv ? this.$route.query.sv : "",
      paginavigation: function () {
        //페이징 처리 for문 커스텀
        let pageNumber = []; //;
        let startPage = this.paging.startPage;
        let endPage = this.paging.endPage;

        for (let i = startPage; i <= endPage; i++) {
          pageNumber.push(i);
        }
        return pageNumber;
      },
    };
  },
  mounted() {
    this.fnGetList();

    setTimeout(() => {

    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script")
      script.src = "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=1975648a88442d985c0473dc051a7483&libraries=services,clusterer,drawing";
      script.onload = () => kakao.maps.load(this.initMap);
      document.head.appendChild(script)
      
      this.makeOverListener();
      this.makeOutListener();
      
    }
        }, 1000);
  },
  methods: {
    fnGetList() {
      //스프링 부트에서 전송받은 데이터 출력 처리
      this.requestBody = {
        sk: this.search_key,
        sv: this.search_value,
        page: this.page,
        size: this.size,
      };

      this.$axios.get("/hobby/dancelist", {
          params: this.requestBody,
          headers: {},
        })
        .then((res) => {//this.list = res.data  //서버에서 데이터를 목록으로 보내므로 바로 할당하여 사용할 수 있다.
          if (res.data.resultCode == "OK") {
            this.list = res.data.data;
            this.paging = res.data.pagination;
            this.no = this.paging.totalListCnt - (this.paging.page - 1) * this.paging.pageSize;
          }
        })
        .catch((err) => {
          if (err.message.indexOf("Network Error") > -1) {
            alert("네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.");
          }
        });
    },
    fnPage(n) {
      if (this.page !== n) {
        this.page = n;
      }
      this.fnGetList();
      this.initMap();
    },
  initMap(){

    setTimeout(() => {
// 검색 결과 목록이나 마커를 클릭했을 때 장소명을 표출할 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({zIndex:1});
      
var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
        center: new kakao.maps.LatLng(37.552744, 126.937792), // 지도의 중심좌표
        level: 13 // 지도의 확대 레벨
    };  

// 지도를 생성합니다    
var map = new kakao.maps.Map(mapContainer, mapOption); 

var positions = [
  {
    hobbyName: this.hobbyName,
    latlng: new kakao.maps.LatLng(this.latitude, this.longitude),
    address2: this.address2,
    phone: this.phone
  }
];

var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";// 마커이미지의 주소입니다
var imageSize = new kakao.maps.Size(24, 35); // 마커이미지의 크기입니다
var imageOption = { offset: new kakao.maps.Point(20, 35) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

//마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

// 마커를 생성합니다
  this.list.forEach(function(position) {
    var marker = new kakao.maps.Marker({
      map: map, // 마커를 표시할 지도
      position: new kakao.maps.LatLng(position.latitude, position.longitude), // 마커의 위치
      title: position.hobbyName,
      image: markerImage
    });

    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
    position : position.latlng, 
    content : position.hobbyName 
});

    marker.setMap(map);

  })

// 클러스터러를 생성하고, 마커 배열을 추가합니다.
var clusterer = new kakao.maps.MarkerClusterer({
map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
averageCenter: true, // 클러스터 마커의 중심좌표를 클러스터 내의 마커들의 중심좌표로 설정합니다.
minLevel: 5, // 지도 레벨이 이 값 이상일 경우에만 클러스터링을 적용합니다.
calculator: [1, 10, 100], // 클러스터의 크기를 정하는 값입니다. 배열에 담긴 숫자들은 클러스터 안의 마커 수에 따라 적용됩니다.
});

// 클러스터러에 마커 배열을 추가합니다.
clusterer.addMarkers(this.markers);

// 지도 확대 축소를 제어할 수 있는 줌 컨트롤을 생성합니다
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
 }, 1000);

}, 

    
// 인포윈도우를 표시하는 클로저를 만드는 함수입니다 
makeOverListener(map, marker, infowindow) {
    return function() {
        infowindow.open(map, marker);
    };
},
// 인포윈도우를 닫는 클로저를 만드는 함수입니다 
makeOutListener(infowindow) {
    return function() {
        infowindow.close();
    };
}
},
};
</script>

<style scoped>
table {
  margin: auto;
  width: 50%;
  border: 1px solid black;
}
.box {
  display: flex;
}

.list {
  width: 50%;
  height: 70%;
  margin: auto;
}
.list > div {
  display: flex;
  margin: auto;
  justify-content: center;
  /* height: 30%; */
}

.map {
  width: 50%;
  height: 300%;
  margin: auto;
}
.map > div {
  display: flex;
  margin: auto;
  justify-content: center;
  /* height: 70%; */
}

.bt {
  background: #5B86EF;
  color: #fff;
}

.rwd-table {
    margin: 100;
    width: 95%;
    border-collapse: collapse;
}

.rwd-table tr:first-child {
    background: #5B86EF;
    color: #fff;
}

.rwd-table tr {
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    background-color: white;
}


.rwd-table th {
    display: none;
}

.rwd-table td {
    display: block;
}

.rwd-table td:first-child {
    margin-top: .5em;
}

.rwd-table td:last-child {
    margin-bottom: .5em;
}

.rwd-table td:before {
    /*content: attr(data-th) ": ";*/
    font-weight: bold;
    width: 120px;
    display: inline-block;
    color: #000;
}

.rwd-table th,
.rwd-table td {
    text-align: left;
}

.rwd-table {
    color: #333;
    border-radius: .4em;
    overflow: hidden;
}

.rwd-table tr {
    border-color: #5B86EF;
}

.rwd-table th,
.rwd-table td {
    padding: .5em 1em;
}
@media screen and (max-width: 601px) {
    .rwd-table tr:nth-child(2) {
        border-top: none;
    }
    .rwd-table th:first-child,
    .rwd-table td:first-child {
        font-weight : bold;
        color: black;
    }
    .rwd-table td a {
        text-decoration: none;
        color: black;
    }
}
@media screen and (min-width: 600px) {
    .rwd-table tr:hover:not(:first-child) {
        background-color: rgba(131, 244, 180, 0.3);
        /*background-color: #83F4B4;과 동일 opacity*/
    }
    .rwd-table td:before {
        display: none;
    }
    .rwd-table td a {
        text-decoration: none;
        color: black;
    }
    .rwd-table th,
    .rwd-table td {
        display: table-cell;
        padding: .25em .5em;
    }
    .rwd-table th:first-child,
    .rwd-table td:first-child {
        font-weight : bold;
        padding-left: 0;
    }
    .rwd-table th:last-child,
    .rwd-table td:last-child {
        padding-right: 0;
    }
    .rwd-table th,
    .rwd-table td {
        padding: 1em !important;
    }
}

/* .rwd-table{
  width: 1000px!important;
} */

.map_wrap, .map_wrap * {margin:0;padding:0;font-family:'Malgun Gothic',dotum,'돋움',sans-serif;font-size:12px;}
.map_wrap a, .map_wrap a:hover, .map_wrap a:active{color:#000;text-decoration: none;}
.map_wrap {position:relative;width:100%;height:1000px;}
#menu_wrap {position:absolute;top:0;left:0;bottom:0;width:300px;margin:10px 0 30px 10px;padding:5px;overflow-y:auto;background:rgba(255, 255, 255, 0.7);z-index: 1;font-size:12px;border-radius: 10px;}
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