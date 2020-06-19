<template>
  <div>
    <me-slider v-model="value"></me-slider>
  </div>
</template>
<script>
import meSlider from '@/components/form/field/slider';
export default {
  components: {
    meSlider
  },
  data() {
    return {
      value: 0
    };
  }
};
</script>
