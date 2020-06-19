import { Slider } from 'element-ui';

import props from './props.config';

export default {
  components: {
    elSlider: Slider
  },
  props,
  render() {
    const self = this,
      { $props } = self,
      attrs = $props.toCopy();

    return (
      <el-slider
        attrs={attrs}
        on-input={self.onInput}
        on-change={self.onChange}></el-slider>
    );
  },
  methods: {
    onInput(value) {
      this.$updateValue(value);
    },
    onChange(value) {
      this.$emit('change', value);
    }
  }
};
