import { TimePicker } from 'element-ui';

import props from './props.config';

export default {
  components: {
    elTimePicker: TimePicker
  },
  props,
  render() {
    const self = this,
      attrs = { ...self.$props };

    return (
      <el-time-picker
        ref='timePicker'
        attrs={attrs}
        on-input={self.onInput}
        on-change={self.onChange}
        on-blur={self.onBlur}
        on-focus={self.onFocus}
      ></el-time-picker>
    );
  },
  methods: {
    onInput(value) {
      this.$updateValue(value);
    },
    onChange(value) {
      this.$subCallback(
        {
          default: 'change',
          sub: 'changeForTime'
        },
        { value }
      );
    },
    onBlur(event) {
      this.$subCallback(
        {
          default: 'blur',
          sub: 'blurForTime'
        },
        { event }
      );
    },
    onFocus(event) {
      this.$subCallback(
        {
          default: 'focus',
          sub: 'focusForTime'
        },
        { event }
      );
    }
  }
};
