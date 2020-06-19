import meUpload from './source';

import { props, sourceProps } from './props.config';

export default {
  components: {
    meUpload
  },
  props,
  render() {
    const self = this,
      { $slots, $props } = self,
      attrs = $props.cover(Object.keys(sourceProps));

    return (
      <me-upload ref='upload' attrs={attrs}>
        {$slots.default}
        <template slot='trigger'>{$slots.trigger}</template>
        <template slot='tip'>{$slots.tip}</template>
      </me-upload>
    );
  }
};
