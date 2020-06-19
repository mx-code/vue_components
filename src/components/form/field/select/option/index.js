import { Option } from 'element-ui';

import props from './props.config';

export default {
  components: {
    elOption: Option
  },
  props,
  render() {
    const self = this,
      { $slots, $props } = self,
      attrs = $props.toCopy();

    return <el-option attrs={attrs}>{$slots.default}</el-option>;
  }
};
