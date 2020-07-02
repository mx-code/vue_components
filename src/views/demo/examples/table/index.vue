<template>
  <div>
    <me-table
      ref="table"
      :columns="columns"
      :data="tableData"
      @row-click="onRowClick"
    >
    </me-table>
  </div>
</template>
<script>
  import meTable from '@/components/table';

  export default {
    components: {
      meTable
    },
    data() {
      return {
        inputRows: [],
        inputProps: [],
        middlewareOption: {
          good: {
            type: 'link'
          }
        },
        form: {
          test: '',
          fn: ''
        },
        columns: [
          {
            label: 'good',
            prop: 'good',
            meType: 'link',
            meOption: {
              data: {
                fnName: 'clickForLink'
              }
            }
          },
          {
            label: 'name',
            prop: 'name',
            children: [
              {
                label: 'test',
                prop: 'test',
                meType: 'input'
              },
              {
                label: 'fn',
                prop: 'fn',
                preType: 'input'
              }
            ]
          },
          {
            label: 'sex',
            prop: 'sex'
          }
        ],
        tableData: [
          {
            good: 'first -',
            name: 'xia',
            sex: 1,
            test: 'good',
            fn: ''
          },
          {
            good: 'second -',
            name: 'wei',
            sex: 1,
            test: '',
            fn: ''
          },
          {
            good: 'third -',
            name: 'tan',
            sex: 0,
            test: '',
            fn: ''
          }
        ]
      };
    },
    methods: {
      onRowClick({ row }) {
        this.$refs.table.changeInputProps({
          rows: [row],
          props: ['fn', 'test', 'sex']
        });
      }
    }
  };
</script>
