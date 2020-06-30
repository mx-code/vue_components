import { Checkbox } from 'element-ui';

import props from './props.config';

export default {
  components: {
    elCheckbox: Checkbox
  },
  props,
  render() {
    const self = this,
      attrs = self.$props;

    return (
      <el-checkbox attrs={attrs} on-input={self.onInput}>
        {self.$slots.default}
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
