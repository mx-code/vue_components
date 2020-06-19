export default {
  model: Object,
  rules: Object,
  inline: {
    type: Boolean,
    default: false
  },
  labelPosition: {
    type: String,
    default: 'right',
    validator: (value) => [ 'right','left','top' ].includes(value)
  },
  labelWidth: String,
  labelSuffix: String,
  hideRequiredAsterisk: {
    type: Boolean,
    default: false
  },
  showMessage: {
    type: Boolean,
    default: true
  },
  inlineMessage: {
    type: Boolean,
    default: false
  },
  statusIcon: {
    type: Boolean,
    default: false
  },
  validateOnRuleChange: {
    type: Boolean,
    default: true
  },
  size: {
    type: String,
    validator: (value) => [ 'medium','small','mini' ].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  }
};