// import meTableColumn from './source';

import { props, sourceProps,middlewareProps,fieldArr } from './props.config';

const meTableColumn = () => import('./source'),
  middleware = () => import('@/components/middleware');

export default {
  name: 'tableColumn',
  components: {
    meTableColumn,
    middleware
  },
  props,
  render() {
    const self = this,
      { $props, children = [],meType,remoteData,form,isForm,preType,preOption } = self,
      vmProps = $props.toCopy(),
      attrs = vmProps.cover(sourceProps),
      vmPropsKeys = Object.keys(props),
      middleAttrs = vmProps.cover(Object.keys(middlewareProps)),
      cLen = children?.length;


    const scopedSlots = {
      default: ({ row, column }) =>
      {
        const {property} = column,
          {rows,props} = preOption,
          flag = rows?.includes(row) && props?.includes(property),
          attrs = middleAttrs.toCopy(flag ? {
            meType: preType
          } : undefined),
          data = fieldArr.includes(preType) && isForm ? form : row;


        return flag || meType ? <middleware attrs={attrs} isSub={true} data={data} prop={property} remoteData={remoteData} on-callback={(fnName,args) => self.onCallback(fnName,args,row)}></middleware> : row[property];
      }
    };

    return (
      <me-table-column
        attrs={attrs}
        scopedSlots={cLen ? undefined : scopedSlots}
      >
        {cLen
          ? children.map((item) => (
            <table-column attrs={item.cover(vmPropsKeys)} remoteData={remoteData} form={form} isForm={isForm} preOption={preOption}></table-column>
          ))
          : undefined}
      </me-table-column>
    );
  },
  methods: {
    onCallback(fnName,args = {},row){
      // args 只能是object/undefined  这里不做判断
      this.$emit('callback',fnName,{}.toCopy(args,{row}));
    }
  }
};
