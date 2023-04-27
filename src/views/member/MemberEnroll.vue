<!-- PageAbout.vue -->
<template>
    <div class="col-md-7 col-lg-8">
            <img alt="Enrolllogo" src="@/assets/Enrolllogo.png">
        <form class="needs-validation" novalidate="">
          <div class="row g-3">
            <div class="col-sm-2">
              <div class="input-group has-validation">  
                <span class="input-group-text">&nbsp; 이 &nbsp; &nbsp; 름 &nbsp;</span>
              </div>
            </div>

            <div class="col-sm-10">
                <div class="input-group has-validation">
                    <input type="text" class="form-control" id="userNeme">
                </div>
            </div>

            <div class="col-sm-2">
              <div class="input-group has-validation">  
                <span class="input-group-text">&nbsp; 아 이 디 &nbsp;</span>
              </div>
            </div>

            <div class="col-sm-10">
              <div class="input-group has-validation">
                    <input type="text" class="form-control" id="userId">
              </div>
            </div>

            <div class="col-sm-2">
              <div class="input-group has-validation">  
                <span class="input-group-text">&nbsp; 비밀번호 &nbsp;</span>
              </div>
            </div>

            <div class="col-sm-10">
              <div class="input-group has-validation">
                <input type="password" class="form-control" id="userpw">
              </div>
            </div>

            <div class="col-sm-2">
              <div class="input-group has-validation">  
                <span class="input-group-text">비밀번호 확인</span>
              </div>
            </div>

            <div class="col-sm-8">
              <div class="input-group has-validation">
                <input type="password" class="form-control" id="userpwck">
              </div>
            </div>

            <div class="col-sm-2">
              <div class="input-group has-validation">
                <button type="submit" class="btn btn-secondary">비밀번호확인</button>
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
                <input type="text" class="form-control" id="useryear">
              </div>
            </div>

            <div class="col-sm-3">
              <div class="input-group has-validation">
                <span class="input-group-text"> 월 </span>
                <input type="text" class="form-control" id="usermonth">
              </div>
            </div>

            <div class="col-sm-3">
              <div class="input-group has-validation">
                <span class="input-group-text"> 일 </span>
                <input type="text" class="form-control" id="userday">
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
                <input type="text" class="form-control" id="userphone2">
              </div>
            </div>

            <div class="col-sm-1">
              <span>-</span>
            </div>

            <div class="col-sm-2">
              <div class="input-group has-validation">
                <input type="text" class="form-control" id="userphone3">
              </div>
            </div>

            <div class="col-sm-2">
              <div class="input-group has-validation">
                <button type="submit" class="btn btn-secondary">인증코드발송</button>
              </div>
            </div>

            <div class="col-sm-2">
              <div class="input-group has-validation">  
                
              </div>
            </div>

            <div class="col-sm-8">
              <div class="input-group has-validation">
                <input type="text" class="form-control" id="userphone4" placeholder="인증번호를 입력해 주세요.">
              </div>
            </div>

            <div class="col-sm-2">
              <div class="input-group has-validation">
                <button type="submit" class="btn btn-secondary">인증코드확인</button>
              </div>
            </div>

            <div class="col-sm-2">
              <div class="input-group has-validation">  
                <span class="input-group-text">&nbsp; 이 메 일 &nbsp;</span>
              </div>
            </div>

            <div class="col-sm-8">
              <div class="input-group has-validation">
                <input type="email" class="form-control" id="userphone4" placeholder="이메일을 입력해주세요.">
              </div>
            </div>

            <div class="col-sm-2">
              <div class="input-group has-validation">
                <button type="submit" class="btn btn-secondary">인증코드발송</button>
              </div>
            </div>

            <div class="col-sm-2">
              <div class="input-group has-validation">  
                
              </div>
            </div>

            <div class="col-sm-8">
              <div class="input-group has-validation">
                <input type="text" class="form-control" id="userphone4" placeholder="인증번호를 입력해 주세요.">
              </div>
            </div>

            <div class="col-sm-2">
              <div class="input-group has-validation">
                <button type="submit" class="btn btn-secondary">인증코드확인</button>
              </div>
            </div>

          </div>
          <br>
          
          <div>
            <button class="btn btn-primary1" type="button" style="font-weight: 600; background-color: #ffc000; border: solid #ffc000">가입하기</button>
            &nbsp; &nbsp; &nbsp;
            <button class="btn btn-primary1" type="button" style="font-weight: 600; background-color: #ffc000; border: solid #ffc000">취 &nbsp; &nbsp; 소</button>
          </div>
          <hr class="my-4">
        </form>
      </div>
</template>
  

  <script>
    export default {

    }
  </script>

<style>
.col-md-7{
    margin: 0 auto;
}

</style>