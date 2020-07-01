import { CheckboxButton } from 'element-ui';

import props from './props.config';

export default {
  components: {
    elCheckboxButton: CheckboxButton
  },
  props,
  render() {
    const self = this,
      attrs = { ...self.$props };

    return (
      <el-checkbox-button attrs={attrs}>
        {self.$slots.default}
      </el-checkbox-button>
    );
  }
};
