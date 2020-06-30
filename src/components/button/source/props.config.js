export default {
  size: {
    type: String,
    validator: (value) => ['medium', 'small', 'mini'].includes(value)
  },
  type: {
    type: String,
    validator: (value) =>
      ['primary', 'success', 'warning', 'danger', 'info', 'text'].includes(
        value
      )
  },
  plain: {
    type: Boolean,
    default: false
  },
  round: {
    type: Boolean,
    default: false
  },
  circle: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  // icon: String,
  autofocus: {
    type: Boolean,
    default: false
  },
  nativeType: {
    type: String,
    default: 'button',
    validator: (value) => ['button', 'submit', 'reset'].includes(value)
  },
  text: String,
  icon: String,
  appendIcon: String
};
