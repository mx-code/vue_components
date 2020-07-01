import { Input } from 'element-ui';

import props from './props.config';

export default {
  components: {
    elInput: Input
  },
  props,
  render() {
    const self = this,
      { $slots } = self,
      attrs = { ...self.$props };

    return (
      <el-input
        ref='input'
        attrs={{ ...attrs }}
        on-input={self.onInput}
        on-blur={self.onBlur}
        on-focus={self.onFocus}
        on-change={self.onChange}
        on-clear={self.onClear}
      >
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
