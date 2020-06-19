export default {
  prop: String,
  label: String,
  labelWidth: String,
  required: {
    type: Boolean,
    default: false
  },
  rules: Object,
  error: String,
  showMessage: {
    type: Boolean,
    default: true
  },
  inlineMessage: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    validator: (value) => [ 'medium', 'small', 'mini' ].includes(value)
  }
};
