import { Radio } from 'element-ui';

import props from './props.config';

export default {
  components: {
    elRadio: Radio
  },
  props,
  render() {
    const self = this,
      { $slots, $props } = self,
      attrs = $props.toCopy();

    return (
      <el-radio attrs={attrs} on-input={self.onInput}>
        {$slots.default}
      </el-radio>
    );
  },
  methods: {
    onInput(value) {
      this.$updateValue(value);
      this.$emit('change', value);
    }
  }
};
