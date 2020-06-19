import meAutocomplete from './source';

import { props, sourceProps } from './props.config';

export default {
  components: {
    meAutocomplete
  },
  props,
  render() {
    const self = this,
      { $scopedSlots, $slots, $props } = self,
      attrs = $props.cover(Object.keys(sourceProps)),
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
      this.$subCallback(
        {
          default: 'select',
          sub: 'selectForAutocomplete'
        },
        { selected }
      );
    },
    onChange(value) {
      this.$subCallback(
        {
          default: 'change',
          sub: 'changeForAutocomplete'
        },
        { value }
      );
    }
  }
};
