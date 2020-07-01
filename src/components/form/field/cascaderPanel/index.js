import { CascaderPanel } from 'element-ui';

import props from './props.config';

export default {
  components: {
    elCascaderPanel: CascaderPanel
  },
  props,
  render() {
    const self = this,
      attrs = { ...self.$props },
      scopedSlots = {
        default: self.$scopedSlots.default
      };

    return (
      <el-cascader-panel
        ref='cascaderPanel'
        attrs={attrs}
        scopedSlots={scopedSlots}
        on-input={self.onInput}
        on-change={self.onChange}
        on-expand-change={self.onExpandChange}
      ></el-cascader-panel>
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
          sub: 'changeForCPanel'
        },
        { value }
      );
    },
    onExpandChange(pArr) {
      this.$subCallback(
        {
          default: 'expand-change',
          sub: 'expandChangeForCPanel'
        },
        { pArr }
      );
    }
  }
};
