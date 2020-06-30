import { Rate } from 'element-ui';

import props from './props.config';

export default {
  components: {
    elRate: Rate
  },
  props,
  render() {
    const self = this,
      attrs = self.$props;

    return <el-rate attrs={attrs} on-change={self.onChange}></el-rate>;
  },
  methods: {
    onChange(value) {
      this.$updateValue(value);
      this.$subCallback(
        {
          default: 'change',
          sub: 'changeForRate'
        },
        { value }
      );
    }
  }
};
