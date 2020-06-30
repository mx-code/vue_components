import { Cascader } from 'element-ui';

import props from './props.config';

export default {
  components: {
    elCascader: Cascader
  },
  props,
  render() {
    const self = this,
      { $scopedSlots, $slots } = self,
      attrs = self.$props,
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
        on-remove-tag={self.onRemoveTag}
      >
        <template slot='empty'>{$slots.empty}</template>
      </el-cascader>
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
          sub: 'changeForCascader'
        },
        { value }
      );
    },
    onExpandChange(pArr) {
      this.$subCallback(
        {
          default: 'expand-change',
          sub: 'expandChangeForCascader'
        },
        { pArr }
      );
    },
    onBlur(event) {
      this.$subCallback(
        {
          default: 'blur',
          sub: 'blurForCascader'
        },
        { event }
      );
    },
    onFocus(event) {
      this.$subCallback(
        {
          default: 'focus',
          sub: 'focusForCascader'
        },
        { event }
      );
    },
    onVisibleChange(isShow) {
      this.$subCallback(
        {
          default: 'visible-change',
          sub: 'visibleChangeForCascader'
        },
        { isShow }
      );
    },
    onRemoveTag(tag) {
      this.$subCallback(
        {
          default: 'remove-tag',
          sub: 'removeTagForCascader'
        },
        { tag }
      );
    }
  }
};
