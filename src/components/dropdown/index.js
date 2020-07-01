import { DropdownMenu } from 'element-ui';

import props from './props.config';

const meDropdown = () => import('./source'),
  meDropdownItem = () => import('./menuItem');

export default {
  components: {
    elDropdownMenu: DropdownMenu,
    meDropdown,
    meDropdownItem
  },
  props,
  render() {
    const self = this,
      { $slots, data = [], value } = self,
      attrs = { ...self.$props };

    return (
      <me-dropdown
        attrs={attrs}
        on-click={self.onClick}
        on-command={self.onCommand}
        on-visible-change={self.onVisibleChange}
      >
        <div class='me-dropdown__text'>{$slots.default || value}</div>
        {$slots.dropdown ? (
          $slots.dropdown
        ) : data.length ? (
          <el-dropdown-menu class='me-dropdown-menu'>
            {data.map((item) => (
              <me-dropdown-item attrs={item}>{item.text}</me-dropdown-item>
            ))}
          </el-dropdown-menu>
        ) : undefined}
      </me-dropdown>
    );
  },
  methods: {
    onClick(event) {
      this.$subCallback(
        {
          default: 'click',
          sub: 'clickforDropdown'
        },
        { event }
      );
    },
    onCommand(command) {
      const self = this;
      // 更新value值 start
      self.$emit('update:value', command);
      self.$emit('input', command);
      // 更新value值 end
      self.$subCallback(
        {
          default: 'command',
          sub: 'commandForDropdown'
        },
        { command }
      );
    },
    onVisibleChange(isShow) {
      this.$subCallback(
        {
          default: 'visibleChange',
          sub: 'visibleChangeForDropdown'
        },
        { isShow }
      );
    }
  }
};
