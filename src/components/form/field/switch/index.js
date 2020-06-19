import meSwitch from './source';

import { props, sourceProps } from './props.config';

export default {
  components: {
    meSwitch
  },
  props,
  render() {
    const self = this,
      { $props } = self,
      attrs = $props.cover(Object.keys(sourceProps));

    return (
      <me-switch
        ref='switch'
        attrs={attrs}
        on-input={self.onInput}
        on-change={self.onChange}></me-switch>
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
          sub: 'changeForSwitch'
        },
        { value }
      );
    }
  }
};
