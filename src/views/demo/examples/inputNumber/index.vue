<template>
  <div>
    <h1>{{ value }}</h1>
    <me-input-number v-model="value"></me-input-number>
  </div>
</template>
<script>
import meInputNumber from '@/components/form/field/inputNumber';
export default {
  components: {
    meInputNumber
  },
  data() {
    return {
      value: 10
    };
  }
};
</script>
