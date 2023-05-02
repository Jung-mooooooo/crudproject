<!-- PageFooter.vue -->

<template>
  <hr />
  <footer>
    <div class="footer">
      <div class="row justify-content-center mb-0 pt-4 pb-2 row-2 px-5">
        <div class="col-12">
          <div class="row row-2">
            <div class="col-sm-2 text-md-center">
              <h5>
                <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                  <img class="footer_img" alt="Vue homelogo" src="@/assets/footer2.png">
                        </a>
                      </h5>
                    </div>
                    
                    <div class="col-sm-2  my-sm-0 mt-5">
                      <ul class="list-unstyled">
                        <li class="mt-0">
                          <router-link style="text-decoration: none; color: #d4d4d4;" to="/welfareProgram/welfareFacilityMap">
                            상담센터찾기
                          </router-link>
                        </li>
                        <li>
                          <router-link style="text-decoration: none; color: #d4d4d4;" to="/counseling/chattinglist">
                            1:1 채팅
                          </router-link>
                        </li>
                        <li>
                          <router-link style="text-decoration: none; color: #d4d4d4;" to="/counseling/chatbot">
                            챗봇 상담하기
                          </router-link>
                        </li>
                      </ul>
                    </div>
                    
                    <div class="col-sm-2  my-sm-0 mt-5">
                      <ul class="list-unstyled">
                        <li class="mt-0">
                          <router-link style="text-decoration: none; color: #d4d4d4;" to="/test/mbti">
                            MBTI
                          </router-link>
                        </li>
                        <li>
                          <router-link style="text-decoration: none; color: #d4d4d4;" to="/test/stress">
                            스트레스 검사
                          </router-link>
                        </li>
                        <li>
                          <router-link style="text-decoration: none; color: #d4d4d4;" to="/test/depression">
                            우울증 검사
                          </router-link>
                        </li>
                      </ul>
                    </div>
                    
                    <div class="col-sm-2  my-sm-0 mt-5">
                      <ul class="list-unstyled">
                        <li class="mt-0">
                          <router-link style="text-decoration: none; color: #d4d4d4;" to="/welfareProgram/touristSpot">
                            힐링관광명소
                          </router-link>
                        </li>
                        <li>
                          <router-link style="text-decoration: none; color: #d4d4d4;" to="/welfareProgram/welfareFacility">
                            사회복지시설
                          </router-link>
                        </li>
                        <li>
                          <router-link style="text-decoration: none; color: #d4d4d4;" to="/welfareProgram/hobby">
                            원데이클래스
                          </router-link>
                        </li>
                      </ul>
                    </div>
                    
                    <div class="col-sm-2  my-sm-0 mt-5">
                      <ul class="list-unstyled">
                        <li class="mt-0">
                          <router-link style="text-decoration: none; color: #d4d4d4;" to="/admin/AdminNotice">
                            공지사항
                          </router-link>
                        </li>
                        <li>
                          <router-link style="text-decoration: none; color: #d4d4d4;" to="/admin/AdminFAQ">
                            FAQ
                          </router-link>
                        </li>
                        <li>
                          <router-link style="text-decoration: none; color: #d4d4d4;" to="/admin/AdminQnA">
                            QnA
                          </router-link>
                        </li>
                      </ul>
                    </div>
                    
                  </div>  
                </div>
              </div>
            </div>
            </footer>
          </template>

<script>
export default {};
</script>

<style scoped>
.footer{
  width: 1300px;
  margin: auto;
}

.col-sm-2 {
  margin: auto;
}
.footer_img{
  height: 140px;
}
@import url('https://fonts.googleapis.com/css?family=Rubik&display=swap');
body {
    font-family: 'Rubik', sans-serif;
    height: 100% !important;
    background-color: #F8F9FB !important;
}

.container-fluid{
    margin-top: 101px;
    color:#000 !important;
}

.card{
    background-color: #F8F9FB !important;
}

p{
    font-size: calc(12px + (14 - 12) * ((100vw - 360px) / (1600 - 360))) !important; 
    display: fkex;
}

h3{
    font-size: calc(24px + (30 - 24) * ((100vw - 360px) / (1600 - 360))) !important; 
}

.social{
    font-size: 21px !important; 
}


.color-text{
    color:#757575 !important;
}


button {
    font-size: calc(12px + (13 - 12) * ((100vw - 360px) / (1600 - 320))) !important;
    background-color: #2CA6FB !important;
    padding-left:  calc(20px + (28 - 20) * ((100vw - 360px) / (1600 - 360))) !important; 
    padding-right: calc(20px + (28 - 20) * ((100vw - 360px) / (1600 - 360))) !important; 
    padding-top:  calc(10px + (12 - 10) * ((100vw - 360px) / (1600 - 360))) !important; 
    padding-bottom:   calc(10px + (12 - 10) * ((100vw - 360px) / (1600 - 360))) !important; 
 }

 button:focus {
     -moz-box-shadow: none !important;
     -webkit-box-shadow: none !important;
     box-shadow: none !important;
     outline-width: 0
 }

 footer{
    color:#caced1 !important;
 }

 li{
     margin-top: 20px ;
     margin-bottom: 20px ;
 }
 
.Careers{ 
    cursor: pointer;
    color: #1E88E5;
}

.row-1{
    background-color:#1E242A !important;
}

.row-2{
    
    background-color: #28323C !important;
}
</style>
