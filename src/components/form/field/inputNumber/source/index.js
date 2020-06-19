import { InputNumber } from 'element-ui';

import props from './props.config';

export default {
  components: {
    elInputNumber: InputNumber
  },
  props,
  render() {
    const self = this,
      { $props } = self,
      attrs = $props.toCopy();

    return (
      <el-input-number
        ref='inputNumber'
        attrs={attrs}
        on-input={self.onInput}
        on-change={self.onChange}
        on-blur={self.onBlur}
        on-focus={self.onFocus}></el-input-number>
    );
  },
  methods: {
    onInput(value) {
      this.$updateValue(value);
    },
    onChange(currentValue, oldValue) {
      this.$emit('change', currentValue, oldValue);
    },
    onBlur(event) {
      this.$emit('blur', event);
    },
    onFocus(event) {
      this.$emit('focus', event);
    }
  }
};
