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
    remoteData: {
      type: Object,
      default: () => ({})
    },
    middlewareOption: {
      type: Object,
      default: () => ({})
    },
    isForm: {
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
      {
        data,
        prop,
        remoteData,
        middlewareOption,
        isForm,
        form,
        isInputing
      } = self,
      { type, formType = 'input', option } = middlewareOption[prop] || {};

    return (
      <middleware
        data={isInputing && isForm ? form : data}
        prop={prop}
        remoteData={remoteData}
        meType={isInputing ? formType : type}
        meOption={option}
        isSub={true}
      ></middleware>
    );
  }
};
