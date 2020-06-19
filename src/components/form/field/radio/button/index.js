import { RadioButton } from 'element-ui';

import props from './props.config';

export default {
  components: {
    elRadioButton: RadioButton
  },
  props,
  render() {
    const self = this,
      { $slots, $props } = self,
      attrs = $props.toCopy();

    return <el-radio-button attrs={attrs}>{$slots.default}</el-radio-button>;
  }
};
