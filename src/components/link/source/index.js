import { Link } from 'element-ui';

import props from './props.config';

export default {
  components: {
    elLink: Link
  },
  props,
  render() {
    const self = this,
      attrs = self.$props;

    return (
      <el-link attrs={attrs} on-click={(event) => self.$emit('click', event)}>
        {self.$slots.default}
      </el-link>
    );
  }
};
