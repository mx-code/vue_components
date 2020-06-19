<template>
  <div>
    <me-select v-model="value"
               :options="options"
    > </me-select>
  </div>
</template>
<script>
import meSelect from '@/components/form/field/select';
export default {
  components: {
    meSelect
  },
  data() {
    return {
      value: '',
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ]
    };
  }
};
</script>
