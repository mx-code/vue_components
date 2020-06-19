import { Select } from 'element-ui';

import props from './props.config';

export default {
  components: {
    elSelect: Select
  },
  props,
  render() {
    const self = this,
      { $slots, $props } = self,
      attrs = $props.toCopy();

    return (
      <el-select
        ref='select'
        attrs={attrs}
        on-input={self.onInput}
        on-change={self.onChange}
        on-visible-change={self.onVisibleChange}
        on-remove-tag={self.onRemoveTag}
        on-clear={self.onClear}
        on-blur={self.onBlur}
        on-focus={self.onFocus}>
        {$slots.default}
        <template slot='prefix'>{$slots.prefix}</template>
        <template slot='empty'>{$slots.empty}</template>
      </el-select>
    );
  },
  methods: {
    onInput(value) {
      this.$updateValue(value);
    },
    onChange(value) {
      this.$emit('change', value);
    },
    onVisibleChange(isShow) {
      this.$emit('visible-change', isShow);
    },
    onRemoveTag(tag) {
      this.$emit('remove-tag', tag);
    },
    onClear() {
      this.$emit('clear');
    },
    onBlur(event) {
      this.$emit('blur', event);
    },
    onFocus(event) {
      this.$emit('focus', event);
    }
  }
};
