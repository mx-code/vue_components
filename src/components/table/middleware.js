const middleware = () => import('@/components/middleware');

export default {
  components: {
    middleware
  },
  props: {
    data: {
      // table rowData
      type: Object,
      required: true
    },
    prop: String,
    middlewareOption: {
      type: Object,
      default: () => ({})
    },
    useForm: {
      type: Boolean,
      default: false
    },
    form: Object,
    isInputing: {
      type: Boolean,
      default: false
    }
  },
  render() {
    const self = this,
      { data, prop, middlewareOption = {}, useForm, form, isInputing } = self,
      { type, formType = 'input', options } = middlewareOption;

    return (
      <middleware
        data={isInputing && useForm ? form : data}
        prop={prop}
        type={isInputing ? formType : type}
        options={options}
        isSub={true}
      ></middleware>
    );
  }
};
