import { CheckboxGroup } from 'element-ui';

import props from './props.config';

export default {
  components: {
    elCheckboxGroup: CheckboxGroup
  },
  props,
  render() {
    const self = this,
      attrs = self.$props;

    return (
      <el-checkbox-group attrs={attrs} on-input={self.onInput}>
        {self.$slots.default}
      </el-checkbox-group>
    );
  },
  methods: {
    onInput(value) {
      this.$updateValue(value);
    }
  }
};
