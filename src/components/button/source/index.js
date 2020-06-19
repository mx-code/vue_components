import { Button } from 'element-ui';
import props from './props.config';

export default {
  components: {
    elButton: Button
  },
  props,
  render() {
    const self = this,
      { $slots, $props } = self,
      attrs = $props.toCopy();

    return (
      <el-button class='me-button' attrs={attrs} on-click={(event) => self.$emit('click', event)}>
        {$slots.default}
      </el-button>
    );
  }
};
