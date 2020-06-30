import { Option } from 'element-ui';

import props from './props.config';

export default {
  components: {
    elOption: Option
  },
  props,
  render() {
    const self = this,
      attrs = self.$props;

    return <el-option attrs={attrs}>{self.$slots.default}</el-option>;
  }
};
