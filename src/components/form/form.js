import meForm from './source';

const meFormItem = () => import('./formItem'),
  middleware = () => import('@/components/middleware'),
  meRow = () => import('@/components/layout/row'),
  meCol = () => import('@/components/layout/col');

export default {
  components: {
    meForm,
    meFormItem,
    middleware,
    meRow,
    meCol
  },
  props: {
    formItems: Array,
    form: Object,
    formOpts: Object,
    rowOpts: {},
    colOpts: {}
  },
  render() {
    const self = this,
      {
        $scopedSlots,
        formItems = [],
        form,
        formOpts = {},
        rowOpts,
        colOpts
      } = self,
      formAttrs = { ...formOpts };

    const scopeDefault = ({ prop }) => $scopedSlots.default?.({ prop });

    return (
      <me-form
        ref='form'
        attrs={formAttrs}
        model={form}
        on-input={self.onInput}
      >
        {formAttrs.inline ? (
          formItems.map((item) => (
            <me-form-item attrs={{ ...item }}>
              {scopeDefault(item)}
            </me-form-item>
          ))
        ) : (
          <me-row attrs={{ ...rowOpts }}>
            {formItems.map((item) => {
              const colAttrs = {}.toCopy(colOpts, item.colOpts);
              return (
                <me-col attrs={colAttrs}>
                  <me-form-item attrs={{ ...item }}>
                    {scopeDefault(item)}
                  </me-form-item>
                </me-col>
              );
            })}
          </me-row>
        )}
      </me-form>
    );
  },
  methods: {
    onInput(value) {
      this.$updateValue(value);
    }
  }
};
