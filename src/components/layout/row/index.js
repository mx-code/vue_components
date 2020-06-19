import { Row } from 'element-ui';

import props from './props.config';

export default {
  components: {
    elRow: Row
  },
  props,
  render() {
    const self = this,
      { $slots, $props } = self,
      attrs = $props.toCopy();

    return <el-row attrs={attrs}>{$slots.default}</el-row>;
  }
};
