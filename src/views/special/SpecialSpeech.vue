<!-- SpecialHome.vue -->
<template>
    <div class="spspeech">
        <router-link to="/special">
            <div class="speech">
                종료<br>
                하기<br>
                <img alt="speech" src="@/assets/images/special/end-speech.png">
            </div>
        </router-link>

            <div class="movemusic">
                <img alt="movemusic" src="@/assets/images/special/watingresponse.png"
                style="top:auto; width:1000px; height: 1000px;">
            </div>

    </div>
</template>
  



<style scoped>

div{
    user-select: none;
}
div.spspeech {
    width: 2000px;
    height: 1000px;
    margin: 0%;
    padding: 0%;
    text-align: center;
}

div.spspeech div {
    float: left;
    width: 49.5%;
    height: 100%;
    padding: 0%;
    font-size: 150px;
    border-radius: 20px;
    border: 2.5px black solid;
}

div.speech {
    background-color: #e0e0e0;
}

div.speech:active {
    background-color: #bfbfbf;
}

div.movemusic {
    background-color: #c9fdfb;
}


img {
    position: relative;
    top: 5%;
}




a {
    -webkit-tap-highlight-color:rgba(0,0,0,0);
    text-decoration: none;
    color: black
}

</style>