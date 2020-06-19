import { CheckboxGroup } from 'element-ui';

import props from './props.config';

export default {
  components: {
    elCheckboxGroup: CheckboxGroup
  },
  props,
  render() {
    const self = this,
      { $slots, $props } = self,
      attrs = $props.toCopy();

    return (
      <el-checkbox-group attrs={attrs} on-input={self.onInput}>
        {$slots.default}
      </el-checkbox-group>
    );
  },
  methods: {
    onInput(value) {
      this.$updateValue(value);
    }
  }
};
