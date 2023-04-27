<template>
    <AdminPageHeader />
    <router-view />
    <PageFooter />
</template>
  
<script>
import AdminPageHeader from "@/components/common/AdminPageHeader.vue";
import PageFooter from "@/components/common/PageFooter.vue";

export default {
    components: {
        AdminPageHeader,
        PageFooter,
    },
};
</script>