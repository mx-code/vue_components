export default {
  type: {
    type: String,
    default: 'default',
    validator: (value) =>
      [ 'primary', 'success', 'warning', 'danger', 'info', 'default' ].includes(
        value
      )
  },
  underline: {
    type: Boolean,
    default: true
  },
  disabled: {
    type: Boolean,
    default: false
  },
  href: String,
  // icon: String
  download: String,
  // href: String,
  hreflang: String,
  rel: String,
  target: {
    type: String
    // validator: (value) => ['_blank','_parent','_self','_top'].includes(value)
  }
};
