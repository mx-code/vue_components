import { DropdownItem } from 'element-ui';

import props from './props.config';

export default {
  components: {
    elDropdownItem: DropdownItem
  },
  props,
  render() {
    const self = this,
      { $slots, $props } = self,
      attrs = $props.toCopy();

    return (
      <el-dropdown-item class='me-dropdown-item' attrs={attrs}>
        {$slots.default}
      </el-dropdown-item>
    );
  }
};
