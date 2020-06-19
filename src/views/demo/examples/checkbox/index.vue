<template>
  <div>
    {{ value }}
    <me-checkbox v-model="value" :data="arrays" labelKey="name"></me-checkbox>
  </div>
</template>
<script>
import meCheckbox from '@/components/form/field/checkbox';

export default {
  components: {
    meCheckbox
  },
  data() {
    return {
      value: [],
      arrays: {
        name: 'abc'
      }
    };
  }
};
</script>
