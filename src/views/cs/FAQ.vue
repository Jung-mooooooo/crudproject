<template>
<br>
<div class="char">
<h2><b>&nbsp;자주하는질문</b></h2>
<br>

<div>
</div>
</div>
<div class="accordion" id="accordionPanelsStayOpenExample">
  <!-- <div class="common-buttons">
        <button type="button" class="btn btn-outline-primary" v-on:click="fnWrite">등록</button>
  </div> -->
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        <h5><b>Q. 회원탈퇴는 어떻게 해야 하나요?</b></h5>
      </button>
   
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body">
        마이페이지로 이동하시어 내정보보기 -> 비밀번호 입력 후  어쩌구 저쩌구
      </div>
    <!-- <div><button v-on:click="fnWrite">수정</button> &nbsp; <button v-on:click="fnDelete">삭제</button></div> -->
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        <h5><b>Q. 힐링스팟은 어떤 방식으로 제공되는 건가요?</b></h5>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div class="accordion-body">
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
         <h5><b>Q. 심도깊은 심리상담을 받고싶을 때는 어떻게 해야 하나요?</b></h5>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div class="accordion-body">
      </div>
    </div>
  </div>

    <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingfour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapsefour" aria-expanded="false" aria-controls="panelsStayOpen-collapsefour">
         <h5><b>Q. 자기분석 테스트는 어떻게 진행되는 건가요?</b></h5>
      </button>
    </h2>
    <div id="panelsStayOpen-collapsefour" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingfour">
      <div class="accordion-body">
      </div>
    </div>
  </div>

    <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingfive">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapsefive" aria-expanded="false" aria-controls="panelsStayOpen-collapsefive">
         <h5><b>Q. 복지프로그램은 어떻게 진행되는 건가요?</b></h5>
      </button>
    </h2>
    <div id="panelsStayOpen-collapsefive" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingfive">
      <div class="accordion-body">
      </div>
    </div>
  </div>

    <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingsix">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapsesix" aria-expanded="false" aria-controls="panelsStayOpen-collapsesix">
         <h5><b>Q. 채팅기능은 어떻게 이용하는 건가요?</b></h5>
      </button>
    </h2>
    <div id="panelsStayOpen-collapsesix" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingsix">
      <div class="accordion-body">
      </div>
    </div>
  </div>

    <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingseven">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseseven" aria-expanded="false" aria-controls="panelsStayOpen-collapseseven">
         <h5><b>Q. 불량유저 신고는 어디로 해야 하나요?</b></h5>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseseven" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingseven">
      <div class="accordion-body">
      </div>
    </div>
  </div>
</div>

</template>

<script>

export default {
   methods: {
        fnWrite() {
      this.$router.push({
        path: './AdminFAQWrite'
      })
    },
   }
}
</script>




<style scoped>
/* .accordion-button {
    width: 200px!important;
} */

.accordion{
  margin: 0 auto;
  width: 1000px!important;

}

.char{
  
  text-align: center;
}

.common-buttons{
  position: relative;
  left: 8px;
}

</style>