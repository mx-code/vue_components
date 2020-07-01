import { DropdownItem } from 'element-ui';

import props from './props.config';

export default {
  components: {
    elDropdownItem: DropdownItem
  },
  props,
  render() {
    const self = this,
      attrs = { ...self.$props };

    return (
      <el-dropdown-item class='me-dropdown-item' attrs={attrs}>
        {self.$slots.default}
      </el-dropdown-item>
    );
  }
};
