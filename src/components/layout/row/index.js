import { Row } from 'element-ui';

import props from './props.config';

export default {
  components: {
    elRow: Row
  },
  props,
  render() {
    const self = this,
      attrs = self.$props;

    return <el-row attrs={attrs}>{self.$slots.default}</el-row>;
  }
};
