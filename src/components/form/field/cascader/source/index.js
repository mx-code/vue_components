import { Cascader } from 'element-ui';

import props from './props.config';

export default {
  components: {
    elCascader: Cascader
  },
  props,
  render() {
    const self = this,
      { $scopedSlots, $slots, $props } = self,
      attrs = $props.toCopy(),
      scopedSlots = {
        default: $scopedSlots.default
      };

    return (
      <el-cascader
        ref='cascader'
        attrs={attrs}
        scopedSlots={scopedSlots}
        on-input={self.onInput}
        on-change={self.onChange}
        on-expand-change={self.onExpandChange}
        on-blur={self.onBlur}
        on-focus={self.onFocus}
        on-visible-change={self.onVisibleChange}
        on-remove-tag={self.onRemoveTag}>
        <template slot='empty'>{$slots.empty}</template>
      </el-cascader>
    );
  },
  methods: {
    onInput(value) {
      this.$updateValue(value);
    },
    onChange(value) {
      this.$emit('change', value);
    },
    onExpandChange(pArr) {
      this.$emit('expand-change', pArr);
    },
    onBlur(event) {
      this.$emit('blur', event);
    },
    onFocus(event) {
      this.$emit('focus', event);
    },
    onVisibleChange(isShow) {
      this.$emit('visible-change', isShow);
    },
    onRemoveTag(tag) {
      this.$emit('remove-tag', tag);
    }
  }
};
