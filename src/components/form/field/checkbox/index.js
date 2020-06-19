import groupProps from './group/props.config';
import sourceProps from './source/props.config';
import buttonProps from './button/props.config';

const meCheckboxGroup = () => import('./group'),
  meCheckbox = () => import('./source'),
  meCheckboxButton = () => import('./button');

export default {
  components: {
    meCheckboxGroup,
    meCheckbox,
    meCheckboxButton
  },
  props: {
    value: [ String, Number, Boolean, Array ],
    data: [ Array, Object ],
    groupOpts: Object,
    type: {
      type: String,
      default: 'checkbox',
      validator: (value) => [ 'checkbox', 'button' ].includes(value)
    },
    labelKey: {
      type: String,
      default: 'label'
    },
    textKey: {
      type: String,
      default: 'text'
    },
    isSub: {
      type: Boolean,
      default: false
    }
  },
  render() {
    const self = this,
      {
        $slots,
        value,
        data = {},
        groupOpts = {},
        type,
        labelKey,
        textKey
      } = self,
      checkboxKeys = Object.keys(sourceProps);

    if (Array.isArray(data)) {
      const groupAttrs = groupOpts.cover(Object.keys(groupProps)),
        buttonKeys = Object.keys(buttonProps);

      return (
        <me-checkbox-group
          attrs={groupAttrs}
          value={value}
          on-input={self.onInput}>
          {data.map((item) => {
            const attrs =
              typeof item === 'string' ? { label: item } : item.toCopy();
            attrs.label = attrs[labelKey];
            return type === 'button' ? (
              <me-checkbox-button attrs={attrs.cover(buttonKeys)}>
                {attrs[textKey]}
              </me-checkbox-button>
            ) : (
              <me-checkbox attrs={attrs.cover(checkboxKeys)}>
                {attrs[textKey]}
              </me-checkbox>
            );
          })}
        </me-checkbox-group>
      );
    }

    const attrs = data.cover(checkboxKeys);
    attrs.label = attrs[labelKey];
    return (
      <me-checkbox attrs={attrs} value={value} on-input={self.onInput}>
        {$slots.default || data[textKey]}
      </me-checkbox>
    );
  },
  methods: {
    onInput(value) {
      this.$emit('update:value', value);
      this.$emit('input', value);
      this.$subCallback(
        {
          default: 'change',
          sub: 'changeForCheckbox'
        },
        { value }
      );
    }
  }
};
