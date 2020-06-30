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
    value: [String, Number, Boolean, Array],
    data: [Array, Object],
    groupOpts: Object,
    type: {
      type: String,
      default: 'checkbox',
      validator: (value) => ['checkbox', 'button'].includes(value)
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
      { value, data = {}, groupOpts = {}, type, labelKey, textKey } = self;

    if (Array.isArray(data)) {
      return (
        <me-checkbox-group
          attrs={groupOpts}
          value={value}
          on-input={self.onInput}
        >
          {data.map((item) => {
            const attrs =
              typeof item === 'string' ? { label: item } : { ...item };
            attrs.label = attrs[labelKey];
            return type === 'button' ? (
              <me-checkbox-button attrs={attrs}>
                {attrs[textKey]}
              </me-checkbox-button>
            ) : (
              <me-checkbox attrs={attrs}>{attrs[textKey]}</me-checkbox>
            );
          })}
        </me-checkbox-group>
      );
    }

    const attrs = data;
    attrs.label = attrs[labelKey];
    return (
      <me-checkbox attrs={attrs} value={value} on-input={self.onInput}>
        {self.$slots.default || data[textKey]}
      </me-checkbox>
    );
  },
  methods: {
    onInput(value) {
      this.$updateValue(value);
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
