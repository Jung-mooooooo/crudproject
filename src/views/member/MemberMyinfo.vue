<!-- PageAbout.vue -->
<template>
    <div class="col-md-7 col-lg-8">
      <div class="d-flex gap-2 justify-content-center py-5">
    <button class="btn btn-light rounded-pill px-3" type="button" 
    onclick="location.href='/member/myinfo'" style="font-size: 40px;">
      내정보보기
    </button>
    <button
      class="btn btn-light rounded-pill px-3" onclick="location.href='/mypage/popupU'"
      type="button"
      style="font-size: 40px;"
    >
      내정보수정
    </button>
    <button
      class="btn btn-light rounded-pill px-3"
      onclick="location.href='/mypage/popupD'"
      type="button"
      style="font-size: 40px;"
    >
      회원탈퇴
    </button>
  </div>
        <form class="needs-validation" novalidate="">
          <div class="row g-3">

            <div class="col-sm-2">
              <div class="input-group has-validation">  
                <span class="input-group-text">&nbsp; 이 &nbsp; &nbsp; 름 &nbsp;</span>
              </div>
            </div>

            <div class="col-sm-10">
                <div class="input-group has-validation">
                    <input type="text" class="form-control" id="userNeme" value="홍길동">
                </div>
            </div>

            <div class="col-sm-2">
              <div class="input-group has-validation">  
                <span class="input-group-text">&nbsp; 아 이 디 &nbsp;</span>
              </div>
            </div>

            <div class="col-sm-10">
              <div class="input-group has-validation">
                    <input type="text" class="form-control" id="userId" value="test01">
              </div>
            </div>

            <div class="col-sm-2">
              <div class="input-group has-validation">  
                <span class="input-group-text">&nbsp; 비밀번호 &nbsp;</span>
              </div>
            </div>

            <div class="col-sm-10">
              <div class="input-group has-validation">
                <input type="password" class="form-control" id="userpw" value="test01">
              </div>
            </div>

            <div class="col-sm-2">
              <div class="input-group has-validation">  
                <span class="input-group-text">&nbsp; 생년월일 &nbsp;</span>
              </div>
            </div>

            <div class="col-sm-3">
              <div class="input-group has-validation">  
                <span class="input-group-text"> 년 </span>
                <input type="text" class="form-control" id="useryear" value="1995">
              </div>
            </div>

            <div class="col-sm-3">
              <div class="input-group has-validation">
                <span class="input-group-text"> 월 </span>
                <input type="text" class="form-control" id="usermonth" value="05">
              </div>
            </div>

            <div class="col-sm-3">
              <div class="input-group has-validation">
                <span class="input-group-text"> 일 </span>
                <input type="text" class="form-control" id="userday" value="05">
              </div>
            </div>

            <div class="col-sm-2">
              <div class="input-group has-validation">  
                <span class="input-group-text">핸드폰번호</span>
              </div>
            </div>

            <div class="col-sm-2">
              <div class="input-group has-validation">  
                <input type="text" class="form-control" id="userphone1" value="010">
              </div>
            </div>

            <div class="col-sm-1">
              <span>-</span>
            </div>

            <div class="col-sm-2">
              <div class="input-group has-validation">
                <input type="text" class="form-control" id="userphone2" value="1234">
              </div>
            </div>

            <div class="col-sm-1">
              <span>-</span>
            </div>

            <div class="col-sm-2">
              <div class="input-group has-validation">
                <input type="text" class="form-control" id="userphone3" value="5678">
              </div>
            </div>


            <div class="col-sm-2">
              <div class="input-group has-validation">  
                
              </div>
            </div>

            <div class="col-sm-2">
              <div class="input-group has-validation">  
                <span class="input-group-text">&nbsp; 이 메 일 &nbsp;</span>
              </div>
            </div>

            <div class="col-sm-10">
              <div class="input-group has-validation">
                <input type="email" class="form-control" id="userphone4" placeholder="이메일을 입력해주세요." value="test01@org.kr">
              </div>
            </div>

            <div class="col-sm-2">
              <div class="input-group has-validation">  
                
              </div>
            </div>

          </div>
          <br>
          
          <div>
            <button class="btn btn-primary1" type="button" onclick="window.history.back()" style="font-weight: 600; background-color: #ffc000; border: solid #ffc000">이 &nbsp; &nbsp; 전</button>
          </div>
          <hr class="my-4">
        </form>
      </div>
</template>
  

  <script>
    export default {

    }
  </script>

<style scoped>
.col-md-7{
    margin: 0 auto;
}

.pop_box {
  width: 40%;
  height: 400px;
  border: 2px solid black;
  border-radius: 20px;
  background: rgba(255, 192, 0, 0.6);
  margin: auto;
}

.pop_box > * {
  position: relative;
  top: 80px;
}

.pop_box > div:first-child {
  margin: auto;
  width: 80%;
  height: 80px;
  font-size: 30px;
  font-weight: bold;
}

hr {
  margin: auto;
  border: 3px solid black;
  width: 80%;
}

.pop_box > form {
  margin: auto;
  width: 60%;
  height: 150px;
}
.pop_box > form div:first-child input {
  width: 100%;
  height: 80px;
  border-radius: 20px;
}

.pop_box > form div:last-child input {
  width: 40%;
  height: 60px;
  border-radius: 10px;
  position: relative;
  top: 20px;
  background: #3a99db;
}

</style>