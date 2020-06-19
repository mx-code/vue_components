<template>
  <div>
    <me-form :formItems="arrays"
             :form="form"
             :remoteData="remoteData"
             :formOpts="{labelWidth: '150px'}"
    ></me-form>
  </div>
</template>
<script>
const meForm = () => import('@/components/form');

export default {
  components: {
    meForm
  },
  data() {
    return {
      form: {
        good: 'asd',
        name: '123',
        sex: '234'
      },
      arrays: [
        {
          label: 'good',
          prop: 'good',
          meType: 'select',
          meOption: {
            options: [ {
              label: 'abc',
              value: '123'
            },{
              label: '123',
              value: '12'
            } ]
          }
        },
        {
          label: 'name',
          prop: 'name',
          meType: 'input'
        },
        {
          label: 'sex',
          prop: 'sex'
        }
      ],
      remoteData: {}
    };
  },
  created(){
    setTimeout(() => {

      this.remoteData = this.remoteData.toCopy({
        good: [ {
          label: 'qqq',
          value: '111'
        },{
          label: 'wwww',
          value: '222'
        } ]
      });
    },3000);
  }
};
</script>
