import { Rate } from 'element-ui';

import props from './props.config';

export default {
  components: {
    elRate: Rate
  },
  props,
  render() {
    const self = this,
      { $props } = self,
      attrs = $props.toCopy();

    return <el-rate attrs={attrs} on-change={self.onChange}></el-rate>;
  },
  methods: {
    onChange(value) {
      this.$updateValue(value);
      this.$emit('change', value);
    }
  }
};
