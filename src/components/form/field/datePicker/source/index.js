import { DatePicker } from 'element-ui';

import props from './props.config';

export default {
  components: {
    elDatePicker: DatePicker
  },
  props,
  render() {
    const self = this,
      { $props } = self,
      attrs = $props.toCopy();

    return (
      <el-date-picker
        ref='datePicker'
        attrs={attrs}
        on-input={self.onInput}
        on-change={self.onChange}
        on-blur={self.onBlur}
        on-focus={self.onFocus}></el-date-picker>
    );
  },
  mounted() {
    // 防止时间格式错误
    const date = new Date(this.value);
    date.toString() === 'Invalid Date' && this.onInput('');
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
