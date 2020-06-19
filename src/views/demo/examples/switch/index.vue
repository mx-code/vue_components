<template>
  <div>
    <me-switch v-model="value"></me-switch>
  </div>
</template>
<script>
import meSwitch from '@/components/form/field/switch';
export default {
  components: {
    meSwitch
  },
  data() {
    return {
      value: false
    };
  }
};
</script>
