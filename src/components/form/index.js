import meForm from './source';

import formProps from './source/props.config';
import {props as formItemProps} from './formItem/props.config';
import {props as middlewareProps} from '@/components/middleware/props.config';
import rowProps from '@/components/layout/row/props.config';
import colProps from '@/components/layout/col/props.config';

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
    remoteData: Object,
    formOpts: Object,
    rowOpts: {},
    colOpts: {}
  },
  render() {
    const self = this,
      { $slots, formItems = [], form, formOpts = {},remoteData,rowOpts,colOpts } = self,
      formAttrs = formOpts.cover(Object.keys(formProps)),
      formItemKeys = Object.keys(formItemProps),
      middleKeys = Object.keys(middlewareProps);

    const getContent = (args) =>
      (<me-form-item
        attrs={args.cover(formItemKeys)}
      >
        <middleware attrs={args.cover(middleKeys)} data={form} remoteData={remoteData}></middleware>
      </me-form-item>);

    return (
      <me-form ref='form' attrs={formAttrs} model={form} on-input={self.onInput}>
        {$slots.default
          ? $slots.default
          :
          formOpts.inline ? formItems.map((item) => getContent(item)) :
            <me-row attrs={rowOpts?.cover(Object.keys(rowProps))}>
              {
                formItems.map((item) => {
                  const colAttrs = {}.toCopy(colOpts,item.colOpts).cover(Object.keys(colProps));
                  return <me-col attrs={colAttrs}>
                    {getContent(item)}
                  </me-col>;
                })
              }
            </me-row>}
      </me-form>
    );
  },
  methods: {
    onInput(value){
      this.$updateValue(value);
    }
  }
};
