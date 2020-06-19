import meInputNumber from './source';

import { props, sourceProps } from './props.config';

export default {
  components: {
    meInputNumber
  },
  props,
  render() {
    const self = this,
      { $props } = self,
      attrs = $props.cover(Object.keys(sourceProps));

    return (
      <me-input-number
        ref='inputNumber'
        attrs={attrs}
        on-input={self.onInput}
        on-change={self.onChange}
        on-blur={self.onBlur}
        on-focus={self.onFocus}></me-input-number>
    );
  },
  methods: {
    onInput(value) {
      this.$emit('update:value', value);
      this.$emit('input', value);
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
