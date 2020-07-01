import { RadioButton } from 'element-ui';

import props from './props.config';

export default {
  components: {
    elRadioButton: RadioButton
  },
  props,
  render() {
    const self = this,
      attrs = { ...self.$props };

    return (
      <el-radio-button attrs={attrs}>{self.$slots.default}</el-radio-button>
    );
  }
};
