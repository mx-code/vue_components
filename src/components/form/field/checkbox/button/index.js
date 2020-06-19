import { CheckboxButton } from 'element-ui';

import props from './props.config';

export default {
  components: {
    elCheckboxButton: CheckboxButton
  },
  props,
  render() {
    const self = this,
      { $slots, $props } = self,
      attrs = $props.toCopy();

    return (
      <el-checkbox-button attrs={attrs}>{$slots.default}</el-checkbox-button>
    );
  }
};
