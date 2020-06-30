<template>
  <div>
    <h1>{{ value }}</h1>
    <me-input v-model="value" :readonly="true"></me-input>
  </div>
</template>
<script>
  import meInput from '@/components/form/field/input';

  export default {
    components: {
      meInput
    },
    data() {
      return {
        value: ''
      };
    }
  };
</script>
