import meFormItem from './source';

import { props, sourceProps } from './props.config';

export default {
  components: {
    meFormItem
  },
  props,
  render() {
    const self = this,
      { $scopedSlots, $slots, $props } = self,
      attrs = $props.cover(Object.keys(sourceProps)),
      scopedSlots = {
        error: $scopedSlots.error
      };

    return (
      <me-form-item
        attrs={attrs}
        scopedSlots={scopedSlots}
        on-resetField={self.onResetField}
        on-clearValidate={self.onClearValidate}>
        {$slots.default}
        <template slot='label'>{$slots.label}</template>
      </me-form-item>
    );
  },
  methods: {
    onResetField() {
      this.$subCallback({
        default: 'resetField',
        sub: 'resetFieldForFItem'
      });
    },
    onClearValidate() {
      this.$subCallback({
        default: 'clearValidate',
        sub: 'clearValidateForFItem'
      });
    }
  }
};
