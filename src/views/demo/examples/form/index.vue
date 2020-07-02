<template>
  <div>
    <me-form
      :formItems="arrays"
      :form="form"
      :formOpts="{ labelWidth: '150px' }"
    >
      <template slot-scope="scope"> </template>
    </me-form>
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
              options: [
                {
                  label: 'abc',
                  value: '123'
                },
                {
                  label: '123',
                  value: '12'
                }
              ]
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
        ]
      };
    }
  };
</script>
