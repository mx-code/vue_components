import { InputNumber } from 'element-ui';

import props from './props.config';

export default {
  components: {
    elInputNumber: InputNumber
  },
  props,
  render() {
    const self = this,
      attrs = { ...self.$props };

    return (
      <el-input-number
        ref='inputNumber'
        attrs={attrs}
        on-input={self.onInput}
        on-change={self.onChange}
        on-blur={self.onBlur}
        on-focus={self.onFocus}
      ></el-input-number>
    );
  },
  methods: {
    onInput(value) {
      this.$updateValue(value);
    },
    onChange(currentValue, oldValue) {
      this.$subCallback(
        {
          default: 'change',
          sub: 'changeForInputNumber'
        },
        { currentValue, oldValue }
      );
    },
    onBlur(event) {
      this.$subCallback(
        {
          default: 'blur',
          sub: 'blurForInputNumber'
        },
        { event }
      );
    },
    onFocus(event) {
      this.$subCallback(
        {
          default: 'focus',
          sub: 'focusForInputNumber'
        },
        { event }
      );
    }
  }
};
