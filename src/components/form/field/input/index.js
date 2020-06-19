import meInput from './source';

import { props, sourceProps } from './props.config';

export default {
  components: {
    meInput
  },
  props,
  render() {
    const self = this,
      { $slots, $props } = self,
      attrs = $props.cover(Object.keys(sourceProps));

    return (
      <me-input
        ref='input'
        attrs={attrs}
        on-input={self.onInput}
        on-blur={self.onBlur}
        on-focus={self.onFocus}
        on-change={self.onChange}
        on-clear={self.onClear}>
        <template slot='prefix'>{$slots.prefix}</template>
        <template slot='suffix'>{$slots.suffix}</template>
        <template slot='prepend'>{$slots.prepend}</template>
        <template slot='append'>{$slots.append}</template>
      </me-input>
    );
  },
  methods: {
    onInput(value) {
      this.$emit('update:value', value);
      this.$emit('input', value);
    },
    onBlur(event) {
      this.$subCallback(
        {
          default: 'blur',
          sub: 'blurForInput'
        },
        { event }
      );
    },
    onFocus(event) {
      this.$subCallback(
        {
          default: 'focus',
          sub: 'focusForInput'
        },
        { event }
      );
    },
    onChange(value) {
      this.$subCallback(
        {
          default: 'change',
          sub: 'changeForInput'
        },
        { value }
      );
    },
    onClear() {
      this.$subCallback({
        default: 'clear',
        sub: 'clearForInput'
      });
    }
  }
};
