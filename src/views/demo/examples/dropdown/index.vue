<template>
  <div>
    <me-dropdown v-model="value" :data="arrays"></me-dropdown>
  </div>
</template>

<script>
import meDropdown from '@/components/dropdown';
export default {
  components: {
    meDropdown
  },
  data() {
    return {
      arrays: [
        {
          text: 'good',
          command: 'good'
        },
        {
          text: 'h1',
          command: 'h1'
        },
        {
          text: 'go',
          command: 'go'
        }
      ],
      value: 'good'
    };
  }
};
</script>
