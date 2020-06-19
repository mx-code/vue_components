import { Col } from 'element-ui';

import props from './props.config';

export default {
  components: {
    elCol: Col
  },
  props,
  render() {
    const self = this,
      { $slots, $props } = self,
      attrs = $props.toCopy();

    return <el-col attrs={attrs}>{$slots.default}</el-col>;
  }
};
