import { OptionGroup } from 'element-ui';

import props from './props.config';

export default {
  components: {
    elOptionGroup: OptionGroup
  },
  props,
  render() {
    const self = this,
      { $slots, $props } = self,
      attrs = $props.toCopy();

    return <el-option-group attrs={attrs}>{$slots.default}</el-option-group>;
  }
};
