import { Button } from 'element-ui';

import props from './props.config';

const meIcon = () => import('@/components/icon');

export default {
  components: {
    elButton: Button,
    meIcon
  },
  props,
  render() {
    const self = this,
      { text, icon, appendIcon } = self,
      attrs = { ...self.$props };

    return (
      <el-button attrs={attrs} on-click={(event) => self.$emit('click', event)}>
        <me-icon icon={icon} position='prev' />
        {self.$slots.default || text}
        <me-icon icon={appendIcon} position='append' />
      </el-button>
    );
  }
};
