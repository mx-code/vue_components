import { props, sourceProps, panelProps } from './props.config';

const meCascader = () => import('./source'),
  meCascaderPanel = () => import('./panel');

export default {
  components: {
    meCascader,
    meCascaderPanel
  },
  props,
  render() {
    const self = this,
      { $scopedSlots, $slots, $props, type } = self,
      attrs = $props.cover(Object.keys(sourceProps)),
      panelAttrs = $props.cover(Object.keys(panelProps)),
      scopedSlots = {
        default: $scopedSlots.default
      };

    return type === 'panel' ? (
      <me-cascader-panel
        attrs={panelAttrs}
        scopedSlots={scopedSlots}
        on-input={self.onInput}
        on-change={self.onChange}
        on-expand-change={self.onExpandChange}></me-cascader-panel>
    ) : (
      <me-cascader
        attrs={attrs}
        scopedSlots={scopedSlots}
        on-input={self.onInput}
        on-change={self.onChange}
        on-expand-change={self.onExpandChange}
        on-blur={self.onBlur}
        on-focus={self.onFocus}
        on-visible-change={self.onVisibleChange}
        on-remove-tag={self.onRemoveTag}>
        <template slot='empty'>{$slots.empty}</template>
      </me-cascader>
    );
  },
  methods: {
    onInput(value) {
      this.$updateValue(value);
    },
    onChange(value) {
      this.$subCallback(
        {
          default: 'change',
          sub: 'changeForCascader'
        },
        { value }
      );
    },
    onExpandChange(pArr) {
      this.$subCallback(
        {
          default: 'expandChange',
          sub: 'expandChangeForCascader'
        },
        { pArr }
      );
    },
    onBlur(event) {
      this.$subCallback(
        {
          default: 'blur',
          sub: 'blurForCascader'
        },
        { event }
      );
    },
    onFocus(event) {
      this.$subCallback(
        {
          default: 'focus',
          sub: 'focusForCascader'
        },
        { event }
      );
    },
    onVisibleChange(isShow) {
      this.$subCallback(
        {
          default: 'visibleChange',
          sub: 'visibleChangeForCascader'
        },
        { isShow }
      );
    },
    onRemoveTag(tag) {
      this.$subCallback(
        {
          default: 'removeTag',
          sub: 'removeTagForCascader'
        },
        { tag }
      );
    }
  }
};
