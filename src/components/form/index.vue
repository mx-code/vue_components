<template>
  <me-form
    :formItems="formItems"
    :form="form"
    :formOpts="formOpts"
    :rowOpts="rowOpts"
    :colOpts="colOpts"
  >
    <template slot-scope="scope">
      <middleware
        :data="form"
        :prop="scope.prop"
        :middlewareOption="middlewareOption[scope.prop]"
        :isSub="true"
      ></middleware>
    </template>
  </me-form>
</template>
<script>
  export default {
    props: {
      formItems: Array,
      form: Object,
      formOpts: Object,
      rowOpts: {},
      colOpts: {},
      middlewareOption: {
        type: Object,
        default: () => ({})
      }
    }
  };
</script>
