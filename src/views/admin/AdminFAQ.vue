<template>
  <div class="char">
    <h2><b>&nbsp;자주하는질문</b></h2>
    <br>
    <div class="accordion" id="accordionPanelsStayOpenExample">
      <div class="common-buttons">
        <button type="button" class="btn btn-outline-primary" v-on:click="fnWrite">등록</button>
      </div>
      <div class="accordion-item" v-for="(item, index) in list" :key="index">
        <h2 class="accordion-header" :id="'faqHeading' + index">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="'#faqCollapse' + index" aria-expanded="true" :aria-controls="'faqCollapse' + index">
            <h5><b>{{ item.faqTitle }}</b></h5>
          </button>
        </h2>
        <div :id="'faqCollapse' + index" class="accordion-collapse collapse" :class="{ show: index === 0 }" :aria-labelledby="'faqHeading' + index">
          <div class="accordion-body">
            {{ item.faqContent }}
          </div>
          <div>
            <button @click="fnEdit(item)">수정</button>
            <button @click="fnDelete(item)">삭제</button>
          </div>
        </div>
      </div>
    </div>

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
</template>

<script>
import dayjs from 'dayjs';
import axios from 'axios';
axios.defaults.withCredentials = true;
import AdminFAQ from '@/views/admin/AdminFAQ.vue';
export default {
  name: 'AdminFAQ',
  components: { AdminFAQ, dayjs },
  data() {
    return {
      requestBody: {},
      list: [],
      no: '',
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
      },
      page: this.$route.query.page ? this.$route.query.page : 1,
      size: this.$route.query.size ? this.$route.query.size : 10,
      search_key: this.$route.query.sk ? this.$route.query.sk : '',
      search_value: this.$route.query.sv ? this.$route.query.sv : '',
    };
  },

  mounted() {
    this.fnGetList();
  },

  methods: {
    fnGetList() {
      this.requestBody = {
        keyword: this.keyword,
        page: this.page,
        size: this.size,
        sk: this.search_key,
        sv: this.search_value,
      };

      axios
        .get('/admin/AdminFAQ', {
          params: this.requestBody,
          headers: {},
        })
        .then((res) => {
          if (res.data.resultCode === 'OK') {
            this.list = res.data.data;
            this.paging = res.data.pagination;
            this.no = this.paging.totalListCnt - (this.paging.page - 1) * this.paging.pageSize;
          }
        })
        .catch((err) => {
          if (err.message.indexOf('Network Error') > -1) {
            alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.');
          }
        });
    },

    formatDate: function (datetime) {
      return dayjs(datetime).format('YYYY년 MM월 DD일 HH:mm:ss');
    },

    fnWrite() {
      this.$router.push({
        path: './AdminFAQWrite',
      });
    },

    fnPage(n) {
      if (this.page !== n) {
        this.page = n;
      }

      this.fnGetList();
    },
  },

  filters: {
    formatDate: function (datetime) {
      return dayjs(datetime).format('YYYY년 MM월 DD일 HH:mm:ss');
    },
  },
};
</script>

<style scoped>
.accordion {
  margin: 0 auto;
  width: 1000px !important;
}

.char {
  text-align: center;
}

.common-buttons {
  position: relative;
  left: 8px;
}
</style>
