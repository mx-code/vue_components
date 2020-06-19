import { CascaderPanel } from 'element-ui';

import props from './props.config';

export default {
  components: {
    elCascaderPanel: CascaderPanel
  },
  props,
  render() {
    const self = this,
      { $scopedSlots, $props } = self,
      attrs = $props.toCopy(),
      scopedSlots = {
        default: $scopedSlots.default
      };

    return (
      <el-cascader-panel
        ref='cascaderPanel'
        attrs={attrs}
        scopedSlots={scopedSlots}
        on-input={self.onInput}
        on-change={self.onChange}
        on-expand-change={self.onExpandChange}></el-cascader-panel>
    );
  },
  methods: {
    onInput(value) {
      this.$emit('update:value', value);
      this.$emit('input', value);
    },
    onChange(value) {
      this.$emit('change', value);
    },
    onExpandChange(pArr) {
      this.$emit('expand-change', pArr);
    }
  }
};
