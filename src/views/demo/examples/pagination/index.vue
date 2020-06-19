<template>
  <div>
    <me-pagination
      :current-page="currentPage"
      :page-size="pageSize"
      :total="total"
    ></me-pagination>
  </div>
</template>

<script>
import mePagination from '@/components/pagination';
export default {
  components: {
    mePagination
  },
  data() {
    return {
      currentPage: 1,
      pageSize: 20,
      total: 100
    };
  }
};
</script>
