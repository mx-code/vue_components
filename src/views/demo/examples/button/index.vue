<template>
  <div>
    <me-button :data="arrays" @fn="onClick">good</me-button>
  </div>
</template>

<script>
import meButton from '@/components/button';

export default {
  components: {
    meButton
  },
  data() {
    return {
      arrays: [
        {
          text: 'asd',
          fnName: 'fn'
        }
      ]
    };
  },
  methods: {
    onClick() {}
  }
};
</script>
