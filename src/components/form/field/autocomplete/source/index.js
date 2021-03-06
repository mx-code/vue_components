import { Autocomplete } from 'element-ui';

import props from './props.config';

export default {
  components: {
    elAutocomplete: Autocomplete
  },
  props,
  render() {
    const self = this,
      { $scopedSlots, $slots, $props } = self,
      attrs = $props.toCopy(),
      scopedSlots = {
        default: $scopedSlots.default
      };

    return (
      <el-autocomplete
        ref='autocomplete'
        attrs={attrs}
        scopedSlots={scopedSlots}
        on-input={self.onInput}
        on-select={self.onSelect}
        on-change={self.onChange}>
        <template slot='prefix'>{$slots.prefix}</template>
        <template slot='suffix'>{$slots.suffix}</template>
        <template slot='prepend'>{$slots.prepend}</template>
        <template slot='append'>{$slots.append}</template>
      </el-autocomplete>
    );
  },
  methods: {
    onInput(value) {
      this.$updateValue(value);
    },
    onSelect(selected) {
      this.$emi('select', selected);
    },
    onChange(value) {
      this.$emit('change', value);
    }
  }
};
