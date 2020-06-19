<template>
  <div>
    <me-table ref="table"
              :columns="columns"
              :data="tableData"
              :form="form"
              :remoteData="remoteData"
              :isForm="true"
              @clickForLink="onTest"
    ></me-table>
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
      form: {
        test: '',
        fn: ''
      },
      remoteData: {

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
    onTest({row}){
      this.$refs.table.changeColumn({
        rows: [ row ],
        props: [ 'fn' ]
      });

    }

  }
};
</script>
