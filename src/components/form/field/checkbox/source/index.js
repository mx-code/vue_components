import { Checkbox } from 'element-ui';

import props from './props.config';

export default {
  components: {
    elCheckbox: Checkbox
  },
  props,
  render() {
    const self = this,
      { $slots, $props } = self,
      attrs = $props.toCopy();

    return (
      <el-checkbox attrs={attrs} on-input={self.onInput}>
        {$slots.default}
      </el-checkbox>
    );
  },
  methods: {
    onInput(value) {
      this.$updateValue(value);
      this.$emit('change', value);
    }
  }
};
