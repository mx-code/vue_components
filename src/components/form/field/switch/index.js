import { Switch } from 'element-ui';

import props from './props.config';

export default {
  components: {
    elSwitch: Switch
  },
  props,
  render() {
    const self = this,
      attrs = { ...self.$props };

    return (
      <el-switch
        ref='switch'
        attrs={attrs}
        on-input={self.onInput}
        on-change={self.onChange}
      ></el-switch>
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
          sub: 'changeForSwitch'
        },
        { value }
      );
    }
  }
};
