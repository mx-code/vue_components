<template>
  <div>
    <me-rate v-model="value"></me-rate>
  </div>
</template>
<script>
import meRate from '@/components/form/field/rate';
export default {
  components: {
    meRate
  },
  data() {
    return {
      value: 0
    };
  }
};
</script>
