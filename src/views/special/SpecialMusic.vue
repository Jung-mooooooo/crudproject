<!-- SpecialHome.vue -->
<template>
    <div class="spmusic">
        <router-link to="/special">
            <div class="speech">
                그만<br>
                듣기<br>
                <img alt="speech" src="@/assets/images/special/end-music.png">
            </div>
        </router-link>

        <div class="music">
            다음곡<br>
            <br>
            <img alt="music" src="@/assets/images/special/next-music.png" style="width:511px; height: 511px;">
        </div>
    </div>
</template>
  



<style scoped>  

div {
    user-select: none;
}

div.spmusic {
    width: 2000px;
    height: 1000px;
    margin: 0%;
    padding: 0%;
    text-align: center;
}

div.spmusic div {
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

div.music {
    background-color: #99deb3;
}

div.music:active {
    background-color: #79be93;
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