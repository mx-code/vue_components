import meSelect from './source';

import { props, sourceProps } from './props.config';
import optionGroupProps from './optionGroup/props.config';
import optionProps from './option/props.config';

const meOptionGroup = () => import('./optionGroup'),
  meOption = () => import('./option');

export default {
  components: {
    meSelect,
    meOptionGroup,
    meOption
  },
  props,
  render() {
    const self = this,
      { $slots, $props, options = [],labelKey,valueKey } = self,
      attrs = $props.cover(Object.keys(sourceProps)),
      groupKeys = Object.keys(optionGroupProps),
      optionKeys = Object.keys(optionProps);

    const getOption = (args) => {
      const attrs = typeof args === 'string' ? {label: args,value: args} : args.cover(optionKeys);
      attrs.label = attrs[labelKey];
      attrs.value = attrs[valueKey];

      return <me-option attrs={attrs}></me-option>;
    };

    return (
      <me-select
        attrs={attrs}
        on-input={self.onInput}
        on-change={self.onChange}
        on-visible-change={self.onVisibleChange}
        on-remove-tag={self.onRemoveTag}
        on-clear={self.onClear}
        on-blur={self.onBlur}
        on-focus={self.onFocus}>
        {$slots.default
          ? $slots.default
          : options.map((item) =>
            item.children ? (
              <me-option-group attrs={item.cover(groupKeys)}>
                {item.children.map((cItem) => getOption(cItem))}
              </me-option-group>
            ) : (
              getOption(item)
            )
          )}
      </me-select>
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
          sub: 'changeForSelect'
        },
        { value }
      );
    },
    onVisibleChange(isShow) {
      this.$subCallback(
        {
          default: 'visibleChange',
          sub: 'visibleChangeForSelect'
        },
        { isShow }
      );
    },
    onRemoveTag(tag) {
      this.$subCallback(
        {
          default: 'removeTag',
          sub: 'removeTagForSelect'
        },
        { tag }
      );
    },
    onClear() {
      this.$subCallback({
        default: 'clear',
        sub: 'clearForSelect'
      });
    },
    onBlur(event) {
      this.$subCallback(
        {
          default: 'blur',
          sub: 'blurForSelect'
        },
        { event }
      );
    },
    onFocus(event) {
      this.$subCallback(
        {
          default: 'focus',
          sub: 'focusForSelect'
        },
        { event }
      );
    }
  }
};
