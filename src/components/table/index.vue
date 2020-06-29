<template>
  <me-table
    ref="table"
    :columns="columns"
    :data="data"
    :tableOpts="tableOpts"
    :pagination="pagination"
    @callback="callback"
  >
    <template slot="content" slot-scope="scope">
      <middleware
        :data="scope.row"
        :prop="scope.column.property"
        :remoteData="remoteData"
        :middlewareOption="middlewareOption"
        :isInputing="
          inputRows.includes(scope.row) &&
          inputProps.includes(scope.column.property)
        "
        :isSub="true"
      ></middleware>
    </template>
  </me-table>
</template>
<script>
  import meTable from './table';
  import middleware from './middleware';

  export default {
    components: {
      meTable,
      middleware
    },
    props: {
      columns: {
        type: Array,
        default: () => []
      },
      data: {
        type: Array,
        default: () => []
      },
      tableOpts: {
        type: Object,
        default: () => ({})
      },
      pagination: {
        type: Object,
        default: () => ({})
      },
      remoteData: {
        type: Object,
        default: () => ({})
        // 改变会触发所有更新  待优化
      },
      middlewareOption: {
        type: Object,
        default: () => ({})
        // 改变会触发所有更新  待优化
      }
    },
    data() {
      return {
        inputRows: [],
        inputProps: []
      };
    },
    methods: {
      callback(fnName, ...args) {
        this.$emit(fnName, ...args);
      },
      changeInputProps({ rows, props }) {
        this.inputRows = rows;
        this.inputProps = props;
      }
    }
  };
</script>
