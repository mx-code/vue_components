<template>
  <div>
    <el-button @click="dialogShow=true">show</el-button>
    <me-dialog :visible.sync="dialogShow"
               @before-close="beforeClose"
    ></me-dialog>
  </div>
</template>
<script>
import meDialog from '@/components/dialog';

export default {
  components: {
    meDialog
  }  ,
  data(){
    return {
      dialogShow: false
    };
  },
  methods: {
    beforeClose(){
      this.dialogShow = false;
    }
  }
};
</script>