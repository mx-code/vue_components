import { RadioGroup } from 'element-ui';

import props from './props.config';

export default {
  components: {
    elRadioGroup: RadioGroup
  },
  props,
  render() {
    const self = this,
      attrs = self.$props;

    return (
      <el-radio-group attrs={attrs} on-input={self.onInput}>
        {self.$slots.default}
      </el-radio-group>
    );
  },
  methods: {
    onInput(value) {
      this.$updateValue(value);
    }
  }
};
