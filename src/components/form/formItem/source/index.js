import { FormItem } from 'element-ui';

import props from './props.config';

export default {
  components: {
    elFormItem: FormItem
  },
  props,
  render() {
    const self = this,
      { $scopedSlots, $slots, $props } = self,
      attrs = $props,
      scopedSlots = {
        error: $scopedSlots.error
      };

    return (
      <el-form-item
        attrs={attrs}
        scopedSlots={scopedSlots}
        on-resetField={self.onResetField}
        on-clearValidate={self.onClearValidate}>
        {$slots.default}
        <template slot='label'>{$slots.label}</template>
      </el-form-item>
    );
  },
  methods: {
    onResetField() {
      this.$emit('resetField');
    },
    onClearValidate() {
      this.$emit('clearValidate');
    }
  }
};
