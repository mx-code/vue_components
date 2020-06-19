export default {
  placeholder: String,
  disabled: {
    type: Boolean,
    default: false
  },
  valueKey: {
    type: String,
    default: 'value'
  },
  debounce: {
    type: Number,
    default: 300
  },
  placement: {
    type: String,
    default: 'bottom-start',
    validator: (value) =>
      [
        'top',
        'top-start',
        'top-end',
        'bottom',
        'bottom-start',
        'bottom-end'
      ].includes(value)
  },
  fetchSuggestions: Function,
  popperClass: String,
  triggerOnFocus: {
    type: Boolean,
    default: true
  },
  name: String,
  selectWhenUnmatched: {
    type: Boolean,
    default: false
  },
  label: String,
  prefixIcon: String,
  suffixIcon: String,
  hideLoading: {
    type: Boolean,
    default: false
  },
  popperAppendToBody: {
    type: Boolean,
    default: true
  },
  highlightFirstItem: {
    type: Boolean,
    default: false
  }
};
