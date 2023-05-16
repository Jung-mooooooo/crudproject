<!-- SpecialAuth.vue -->
<template>
    <div class="spmain">
        <router-link to="/special/speech">
            <div class="movespeech">
                대화<br>
                하기<br>
                <img alt="movespeech" src="@/assets/images/special/speech.png">

            </div>
        </router-link>

        <router-link to="/special/music">
            <div class="movemusic">
                음악<br>
                듣기<br>
                <img alt="movemusic" src="@/assets/images/special/music.png">
            </div>
        </router-link>

    </div>
</template>
  
    


<style scoped>
div {
    user-select: none;
}

div.spmain {
    width: 2000px;
    height: 1000px;
    margin: 0%;
    padding: 0%;
    text-align: center;
}

div.spmain div {
    float: left;
    width: 49.5%;
    height: 100%;
    padding: 0%;
    font-size: 150px;
    border-radius: 20px;
    border: 2.5px black solid;
}

div.movespeech {
    background-color: #ffcdd2;
}

div.movespeech:active {
    background-color: #efbaba;
}

div.movemusic {
    background-color: #e0f2f1;
}

div.movemusic:active {
    background-color: #c0d2d1;
}

img {
    position: relative;
    top: 5%;
}

/* 모바일기기 터치시 파란색 하이라이트 없애기 */
/* router-link는 a 태그처리, a 밑줄 없애기*/
a {
    -webkit-tap-highlight-color:rgba(0,0,0,0);
    text-decoration: none;
    color: black
}
</style>