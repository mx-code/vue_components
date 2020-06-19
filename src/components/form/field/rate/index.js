import meRate from './source';

import { props, sourceProps } from './props.config';

export default {
  components: {
    meRate
  },
  props,
  render() {
    const self = this,
      { $props } = self,
      attrs = $props.cover(Object.keys(sourceProps));

    return <me-rate attrs={attrs} on-change={self.onChange}></me-rate>;
  },
  methods: {
    onChange(value) {
      this.$emit('update:value', value);
      this.$emit('input', value);
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
