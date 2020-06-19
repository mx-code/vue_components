import { Input } from 'element-ui';

import props from './props.config';

export default {
  components: {
    elInput: Input
  },
  props,
  render() {
    const self = this,
      { $slots, $props } = self,
      attrs = $props.toCopy();

    return (
      <el-input
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
      </el-input>
    );
  },
  methods: {
    onInput(value) {
      this.$updateValue(value);
    },
    onBlur(event) {
      this.$emit('blur', event);
    },
    onFocus(event) {
      this.$emit('focus', event);
    },
    onChange(value) {
      this.$emit('change', value);
    },
    onClear() {
      this.$emit('clear');
    }
  }
};
