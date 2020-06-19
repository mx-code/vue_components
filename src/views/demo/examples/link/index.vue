<template>
  <div>
    <me-link :data="{ href: '/', target: '_blank', download: '/abc/a.png' }">good</me-link>
  </div>
</template>

<script>
import meLink from '@/components/link';

export default {
  components: {
    meLink
  }
};
</script>
