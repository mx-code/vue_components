import { TimePicker } from 'element-ui';

import props from './props.config';

export default {
  components: {
    elTimePicker: TimePicker
  },
  props,
  render() {
    const self = this,
      { $props } = self,
      attrs = $props.toCopy();

    return (
      <el-time-picker
        ref='timePicker'
        attrs={attrs}
        on-input={self.onInput}
        on-change={self.onChange}
        on-blur={self.onBlur}
        on-focus={self.onFocus}></el-time-picker>
    );
  },
  methods: {
    onInput(value) {
      this.$updateValue(value);
    },
    onChange(value) {
      this.$emit('change', value);
    },
    onBlur(event) {
      this.$emit('blur', event);
    },
    onFocus(event) {
      this.$emit('focus', event);
    }
  }
};
