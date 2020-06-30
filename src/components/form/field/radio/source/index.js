import { Radio } from 'element-ui';

import props from './props.config';

export default {
  components: {
    elRadio: Radio
  },
  props,
  render() {
    const self = this,
      attrs = self.$props;

    return (
      <el-radio attrs={attrs} on-input={self.onInput}>
        {self.$slots.default}
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
