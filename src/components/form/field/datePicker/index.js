import meDatePicker from './source';

import { props, sourceProps } from './props.config';

export default {
  components: {
    meDatePicker
  },
  props,
  render() {
    const self = this,
      { $props } = self,
      attrs = $props.cover(Object.keys(sourceProps));

    return (
      <me-date-picker
        ref='datePicker'
        attrs={attrs}
        on-input={self.onInput}
        on-change={self.onChange}
        on-blur={self.onBlur}
        on-focus={self.onFocus}></me-date-picker>
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
          sub: 'changeForDatePicker'
        },
        { value }
      );
    },
    onBlur(event) {
      this.$subCallback(
        {
          default: 'blur',
          sub: 'blurForDatePicker'
        },
        { event }
      );
    },
    onFocus(event) {
      this.$subCallback(
        {
          default: 'focus',
          sub: 'focusForDatePicker'
        },
        { event }
      );
    }
  }
};
