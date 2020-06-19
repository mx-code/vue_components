import mePagination from './source';

import { props, sourceProps } from './props.config';

export default {
  components: {
    mePagination
  },
  props,
  render() {
    const self = this,
      { $slots, $props } = self,
      attrs = $props.cover(Object.keys(sourceProps));

    return (
      <me-pagination
        attrs={attrs}
        on-size-change={self.onSizeChange}
        on-current-change={self.onCurrentChange}>
        {$slots.default}
      </me-pagination>
    );
  },
  methods: {
    onSizeChange(num) {
      this.$emit('size-change', num);
    },
    onCurrentChange(num) {
      this.$emit('current-change', num);
    }
  }
};
