import { Col } from 'element-ui';

import props from './props.config';

export default {
  components: {
    elCol: Col
  },
  props,
  render() {
    const self = this,
      attrs = { ...self.$props };

    return <el-col attrs={attrs}>{self.$slots.default}</el-col>;
  }
};
