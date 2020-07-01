import { DatePicker } from 'element-ui';

import props from './props.config';

export default {
  components: {
    elDatePicker: DatePicker
  },
  props,
  render() {
    const self = this,
      attrs = { ...self.$props };

    return (
      <el-date-picker
        ref='datePicker'
        attrs={attrs}
        on-input={self.onInput}
        on-change={self.onChange}
        on-blur={self.onBlur}
        on-focus={self.onFocus}
      ></el-date-picker>
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
      this.$subCallback(
        {
          default: 'change',
          sub: 'changeForDate'
        },
        { value }
      );
    },
    onBlur(event) {
      this.$subCallback(
        {
          default: 'blur',
          sub: 'blurForDate'
        },
        { event }
      );
    },
    onFocus(event) {
      this.$subCallback(
        {
          default: 'focus',
          sub: 'focusForDate'
        },
        { event }
      );
    }
  }
};
