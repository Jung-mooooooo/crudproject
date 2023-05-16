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
            <button id="record">record</button>
            <button id="stop">stop</button>
            <div id="sound-clips"></div>
            <img alt="movemusic" src="@/assets/images/special/watingresponse.png"
                 style="top:auto; width:1000px; height: 1000px;">
        </div>

    </div>
</template>


<script>

export default {
    data() {
        return {}
    },
    mounted() {

        const record = document.getElementById("record")
        const stop = document.getElementById("stop")
        const soundClips = document.getElementById("sound-clips")
        // const chkHearMic = document.getElementById("chk-hear-mic")

        console.log("recode : " + record);
        console.log("stop : " + stop);
        console.log("soundClips : " + soundClips);

        const audioCtx = new (window.AudioContext || window.webkitAudioContext)() // 오디오 컨텍스트 정의

        const analyser = audioCtx.createAnalyser()
        //        const distortion = audioCtx.createWaveShaper()
        //        const gainNode = audioCtx.createGain()
        //        const biquadFilter = audioCtx.createBiquadFilter()

        function makeSound(stream) {
            const source = audioCtx.createMediaStreamSource(stream)

            source.connect(analyser)
            //            analyser.connect(distortion)
            //            distortion.connect(biquadFilter)
            //            biquadFilter.connect(gainNode)
            //            gainNode.connect(audioCtx.destination) // connecting the different audio graph nodes together
            analyser.connect(audioCtx.destination)

        }


        if (navigator.mediaDevices) {
            console.log('getUserMedia supported.')

            const constraints = {
                audio: true,
            }
            let chunks = []

            navigator.mediaDevices.getUserMedia(constraints)
                .then(stream => {

                    const mediaRecorder = new MediaRecorder(stream)

                    // chkHearMic.onchange = e => {
                    //     if (e.target.checked == true) {
                    //         audioCtx.resume()
                    //         makeSound(stream)
                    //     } else {
                    //         audioCtx.suspend()
                    //     }
                    // }

                    record.onclick = () => {
                        mediaRecorder.start()
                        console.log(mediaRecorder.state)
                        console.log("recorder started")
                        record.style.background = "red"
                        record.style.color = "black"
                    }

                    stop.onclick = () => {
                        mediaRecorder.stop()
                        console.log(mediaRecorder.state)
                        console.log("recorder stopped")
                        record.style.background = ""
                        record.style.color = ""
                    }

                    mediaRecorder.onstop = e => {
                        console.log("data available after MediaRecorder.stop() called.")

                        const clipName = "001.mp3"

                        const clipContainer = document.createElement('article')
                        const clipLabel = document.createElement('p')
                        const audio = document.createElement('audio')
                        const deleteButton = document.createElement('button')

                        clipContainer.classList.add('clip')
                        audio.setAttribute('controls', '')
                        deleteButton.innerHTML = "삭제"
                        clipLabel.innerHTML = clipName

                        clipContainer.appendChild(audio)
                        clipContainer.appendChild(clipLabel)
                        clipContainer.appendChild(deleteButton)
                        soundClips.appendChild(clipContainer)

                        audio.controls = true
                        const blob = new Blob(chunks, {type: "audio/ogg; codecs=opus"});
                        chunks = []
                        const audioURL = URL.createObjectURL(blob)
                        audio.src = audioURL
                        console.log("recorder stopped")

                        let fd = new FormData();
                        fd.append("fname", "001" + ".mp3")
                        fd.append("file", blob);


                        axios.post('menu/speech', fd, {
                            headers: {
                                "Content-Type": "multipart/form-data"
                            }
                        }).then((Response) => {
                            alert("실행됨?")
                        }).catch(() => {
                            alert("실행 안됨..")
                            console.log("Error" + errorMessage);
                        });


                        // $.ajax({
                        //     url: "${pageContext.request.contextPath}/menu/speech",
                        //     type: "POST",
                        //     // dataType: 'json',
                        //     enctype: 'multipart/form-data',
                        //     contentType: false,
                        //     processData: false,
                        //     data: fd,
                        //     success: function (data) {

                        //         alert("실행됨?")
                        //     },
                        //     error: function (errorMessage) {
                        //         alert("실행 안됨..")
                        //         console.log("Error" + errorMessage);
                        //     },
                        // }).done(function (data) {
                        //     console.log(data);
                        // });


                        deleteButton.onclick = e => {
                            evtTgt = e.target
                            evtTgt.parentNode.parentNode.removeChild(evtTgt.parentNode)
                        }
                    }

                    mediaRecorder.ondataavailable = e => {
                        chunks.push(e.data)
                    }
                })
                .catch(err => {
                    console.log('The following error occurred: ' + err)
                })
        }
    },
    methods: {}
}
</script>


<style scoped>
div {
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
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    text-decoration: none;
    color: black
}
</style>