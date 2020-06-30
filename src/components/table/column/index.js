// import meTableColumn from './source';

import { props } from './props.config';

const meTableColumn = () => import('./source');

export default {
  name: 'tableColumn',
  components: {
    meTableColumn
  },
  props,
  render() {
    const self = this,
      { children = [] } = self,
      attrs = self.$props,
      cLen = children?.length;

    const scopedSlots = {
      default: self.$scopedSlots.default
    };

    return (
      <me-table-column
        attrs={attrs}
        scopedSlots={cLen ? undefined : scopedSlots}
      >
        {cLen
          ? children.map((item) => (
              <table-column
                key={item.key || item.prop || item.label}
                attrs={{ ...item }}
                scopedSlots={scopedSlots}
              ></table-column>
            ))
          : undefined}
      </me-table-column>
    );
  }
};
