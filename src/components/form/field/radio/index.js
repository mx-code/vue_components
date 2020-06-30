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
    value: [String, Number, Boolean],
    data: [Array, Object],
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
      validator: (value) => ['radio', 'button'].includes(value)
    },
    isSub: {
      type: Boolean,
      default: false
    }
  },
  render() {
    const self = this,
      { value, data = {}, groupOpts = {}, type, labelKey, textKey } = self;

    if (Array.isArray(data)) {
      return (
        <me-radio-group attrs={groupOpts} value={value} on-input={self.onInput}>
          {data.map((item) => {
            const attrs =
              typeof item === 'string' ? { label: item } : { ...item };
            attrs.label = attrs[labelKey];
            return type === 'button' ? (
              <me-radio-button attrs={attrs}>{attrs[textKey]}</me-radio-button>
            ) : (
              <me-radio attrs={attrs}>{attrs[textKey]}</me-radio>
            );
          })}
        </me-radio-group>
      );
    }

    const attrs = data;
    attrs.label = attrs[labelKey];
    return (
      <me-radio attrs={attrs} value={value} on-input={self.onInput}>
        {self.$slots.default || data[textKey]}
      </me-radio>
    );
  },
  methods: {
    onInput(value) {
      this.$updateValue(value);
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
