// import meTableColumn from './source';

import { props, sourceProps } from './props.config';

const meTableColumn = () => import('./source');

export default {
  name: 'tableColumn',
  components: {
    meTableColumn
  },
  props,
  render() {
    const self = this,
      { $props, $scopedSlots, children = [] } = self,
      vmProps = $props.toCopy(),
      attrs = vmProps.cover(sourceProps),
      vmPropsKeys = Object.keys(props),
      // middleAttrs = vmProps.cover(Object.keys(middlewareProps)),
      cLen = children?.length;

    const scopedSlots = {
      default: $scopedSlots.default
      // ||
      // (({ row, column }) => {
      //   const { property } = column,
      //     { rows, props } = preOption,
      //     flag = rows?.includes(row) && props?.includes(property),
      //     attrs = middleAttrs.toCopy(
      //       flag
      //         ? {
      //             meType: preType
      //           }
      //         : undefined
      //     ),
      //     data = fieldArr.includes(preType) && isForm ? form : row;
      //   return flag || meType ? (
      //     <middleware
      //       attrs={attrs}
      //       isSub={true}
      //       data={data}
      //       prop={property}
      //       remoteData={remoteData}
      //       on-callback={(fnName, args) => self.onCallback(fnName, args, row)}
      //     ></middleware>
      //   ) : (
      //     row[property]
      //   );
      // })
    };
    // !cLen && (scopedSlots.default = $scopedSlots.default);

    return (
      <me-table-column
        attrs={attrs}
        scopedSlots={cLen ? undefined : scopedSlots}
      >
        {cLen
          ? children.map((item) => (
              <table-column
                attrs={item.cover(vmPropsKeys)}
                scopedSlots={scopedSlots}
              ></table-column>
            ))
          : undefined}
      </me-table-column>
    );
  }
};
