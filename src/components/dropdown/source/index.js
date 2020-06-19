import { Dropdown } from 'element-ui';

import props from './props.config';

export default {
  components: {
    elDropdown: Dropdown
  },
  props,
  render() {
    const self = this,
      { $slots, $props } = self,
      attrs = $props.toCopy();

    return (
      <el-dropdown
        class='me-dropdown'
        attrs={attrs}
        on-click={self.onClick}
        on-command={self.onCommand}
        on-visible-change={self.onVisibleChange}>
        {$slots.default}
        <slot name='dropdown'>{$slots.dropdown}</slot>
      </el-dropdown>
    );
  },
  methods: {
    onClick(event) {
      this.$emit('click', event);
    },
    onCommand(command) {
      this.$emit('command', command);
    },
    onVisibleChange(isShow) {
      this.$emit('visible-change', isShow);
    }
  }
};
