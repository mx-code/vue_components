import { TableColumn } from 'element-ui';

import props from './props.config';

export default {
  components: {
    elTableColumn: TableColumn
  },
  props,
  render() {
    const self = this,
      { $slots, $scopedSlots, $props } = self,
      attrs = $props,
      scopedSlots = {
        default: $scopedSlots.default,
        header: $scopedSlots.header || $slots.header
      };

    return (
      <el-table-column
        attrs={attrs}
        scopedSlots={scopedSlots}>
        {$slots.default}
      </el-table-column>
    );
  }
};
