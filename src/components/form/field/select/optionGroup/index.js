import { OptionGroup } from 'element-ui';

import props from './props.config';

export default {
  components: {
    elOptionGroup: OptionGroup
  },
  props,
  render() {
    const self = this,
      attrs = { ...self.$props };

    return (
      <el-option-group attrs={attrs}>{self.$slots.default}</el-option-group>
    );
  }
};
