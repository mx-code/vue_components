import groupProps from './group/props.config';
import sourceProps from './source/props.config';
import buttonProps from './button/props.config';

const meRadioGroup = () => import('./group'),
  meRadio = () => import('./source'),
  meRadioButton = () => import('./button');

export default {
  components: {
    meRadioGroup,
    meRadio,
    meRadioButton
  },
  props: {
    value: [ String, Number, Boolean ],
    data: [ Array, Object ],
    groupOpts: Object,
    labelKey: {
      type: String,
      default: 'label'
    },
    textKey: {
      type: String,
      default: 'text'
    },
    type: {
      type: String,
      default: 'radio',
      validator: (value) => [ 'radio', 'button' ].includes(value)
    },
    isSub: {
      type: Boolean,
      default: false
    }
  },
  render() {
    const self = this,
      { $slots, value, data = {}, groupOpts = {}, type, labelKey, textKey } = self,
      radioKeys = Object.keys(sourceProps);

    if (Array.isArray(data)) {
      const groupAttrs = groupOpts.cover(Object.keys(groupProps)),
        buttonKeys = Object.keys(buttonProps);

      return (
        <me-radio-group attrs={groupAttrs} value={value} on-input={self.onInput}>
          {data.map((item) => {
            const attrs = typeof item === 'string' ? { label: item } : item.toCopy();
            attrs.label = attrs[labelKey];
            return type === 'button' ? (
              <me-radio-button attrs={attrs.cover(buttonKeys)}>{attrs[textKey]}</me-radio-button>
            ) : (
              <me-radio attrs={attrs.cover(radioKeys)}>{attrs[textKey]}</me-radio>
            );
          })}
        </me-radio-group>
      );
    }

    const attrs = data.cover(radioKeys);
    attrs.label = attrs[labelKey];
    return (
      <me-radio attrs={attrs} value={value} on-input={self.onInput}>
        {$slots.default || data[textKey]}
      </me-radio>
    );
  },
  methods: {
    onInput(value) {
      this.$emit('update:value', value);
      this.$emit('input', value);
      this.$subCallback(
        {
          default: 'change',
          sub: 'changeForRadio'
        },
        { value }
      );
    }
  }
};
