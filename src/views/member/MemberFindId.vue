<!-- PageAbout.vue -->
<template>
  <div class="col-md-7 col-lg-8">
    <div>
      <h1>I D 찾기</h1>
    </div>
    <br>
    <div class="dididid">
      <button class="btn btn-outline-secondary d-inline-flex align-items-center" type="button">
        &nbsp; &nbsp; I D 찾기 &nbsp; &nbsp;
      </button>
  &nbsp; &nbsp; &nbsp; &nbsp;
      <button class="btn btn-outline-secondary d-inline-flex align-items-center" type="button">
        &nbsp; &nbsp; P W 찾기 &nbsp; &nbsp;
      </button>
    </div>
    <hr>
      <form class="needs-validation" novalidate="">
        <div class="row g-3">
          <p class="h2">
            <span class="badge bg-primary1">&nbsp; 핸드폰으로 찾기 &nbsp;</span>
          </p>
          <div class="col-sm-2">
            <div class="input-group has-validation">  
              <span class="input-group-text"> &nbsp; &nbsp; 이 &nbsp; &nbsp; 름 &nbsp; &nbsp;</span>
            </div>
          </div>

          <div class="col-10">
              <div class="input-group has-validation">
                  <input type="text" class="form-control" id="userNeme">
              </div>
          </div>


          <div class="col-sm-2">
            <div class="input-group has-validation">  
              <span class="input-group-text">&nbsp; &nbsp; 핸드폰번호 &nbsp; &nbsp;</span>
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

          <div>
            <button class="btn btn-primary1" type="button" style="font-weight: 600; background-color: #ffc000; border: solid #ffc000">확 &nbsp; &nbsp; 인</button>
            &nbsp; &nbsp; &nbsp;
            <button class="btn btn-primary1" type="button" style="font-weight: 600; background-color: #ffc000; border: solid #ffc000">취 &nbsp; &nbsp; 소</button>
          </div>

          <hr>

          <p class="h2">
            <span class="badge bg-primary1">&nbsp; 이메일로 찾기 &nbsp;</span>
          </p>

          <div class="col-sm-2">
            <div class="input-group has-validation">  
              <span class="input-group-text"> &nbsp; &nbsp; 이 &nbsp; &nbsp; 름 &nbsp; &nbsp;</span>
            </div>
          </div>

          <div class="col-10">
              <div class="input-group has-validation">
                  <input type="text" class="form-control" id="userNeme">
              </div>
          </div>

          <div class="col-sm-2">
            <div class="input-group has-validation">  
              <span class="input-group-text">&nbsp; &nbsp; 이 &nbsp; 메 &nbsp; 일 &nbsp; &nbsp;</span>
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

          <div>
            <button class="btn btn-primary1" type="button" style="font-weight: 600; background-color: #ffc000; border: solid #ffc000">확 &nbsp; &nbsp; 인</button>
            &nbsp; &nbsp; &nbsp;
            <button class="btn btn-primary1" type="button" style="font-weight: 600; background-color: #ffc000; border: solid #ffc000">취 &nbsp; &nbsp; 소</button>
          </div>

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
.badge{
  width: 290px;
  height: 40px;
}
.btn{
  --bs-btn-hover-bg: #0b5ed7;
}
.btn-primary1 {
  width: 100px;
  height: 40px;
    --bs-btn-color: #fff;
    --bs-btn-bg: #0d6efd;
    --bs-btn-border-color: #0d6efd;
    --bs-btn-hover-color: #fff;
    --bs-btn-hover-bg: #913012;
    --bs-btn-hover-border-color: #ab2221;
    --bs-btn-focus-shadow-rgb: 49,132,253;
    --bs-btn-active-color: #fff;
    --bs-btn-active-bg: #0a58ca;
    --bs-btn-active-border-color: #0a53be;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --bs-btn-disabled-color: #fff;
    --bs-btn-disabled-bg: #0d6efd;
    --bs-btn-disabled-border-color: #0d6efd;
}
.bg-primary1 {
    --bs-bg-opacity: 1;
    background-color: #3a99db;
}
</style>