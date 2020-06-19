import { Link } from 'element-ui';

import props from './props.config';

export default {
  components: {
    elLink: Link
  },
  props,
  render() {
    const self = this,
      { $slots, $props } = self,
      attrs = $props.toCopy();

    return (
      <el-link attrs={attrs} on-click={(event) => self.$emit('click', event)}>
        {$slots.default}
      </el-link>
    );
  }
};
