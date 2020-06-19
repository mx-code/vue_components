import meSlider from './source';

import { props, sourceProps } from './props.config';

export default {
  components: {
    meSlider
  },
  props,
  render() {
    const self = this,
      { $props } = self,
      attrs = $props.cover(Object.keys(sourceProps));

    return (
      <me-slider
        attrs={attrs}
        on-input={self.onInput}
        on-change={self.onChange}></me-slider>
    );
  },
  methods: {
    onInput(value) {
      this.$emit('update:value', value);
      this.$emit('input', value);
    },
    onChange(value) {
      this.$subCallback(
        {
          default: 'change',
          sub: 'changeForSlider'
        },
        { value }
      );
    }
  }
};
