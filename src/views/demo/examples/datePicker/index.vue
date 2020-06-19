<template>
  <div>
    <me-date-picker v-model="value"></me-date-picker>
    <me-time-picker v-model="timeValue"></me-time-picker>
  </div>
</template>
<script>
import meDatePicker from '@/components/form/field/datePicker';
import meTimePicker from '@/components/form/field/timePicker';
export default {
  components: {
    meDatePicker,
    meTimePicker
  },
  data() {
    return {
      value: '',
      timeValue: ''
    };
  }
};
</script>
