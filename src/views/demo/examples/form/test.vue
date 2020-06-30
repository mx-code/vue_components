<template>
  <div>
    <h1>
      {{ prop }}
    </h1>
    <h2>
      {{ remoteData[prop] }}
    </h2>
  </div>
</template>
<script>
  export default {
    props: {
      prop: String,
      remoteData: Object
    },
    updated() {
      console.log('test');
    }
  };
</script>
