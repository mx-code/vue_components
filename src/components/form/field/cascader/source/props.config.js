export default {
  value: true,
  options: Array,
  props: Object,
  size: {
    type: String,
    validator: (value) => [ 'medium', 'small', 'mini' ].includes(value)
  },
  placeholder: {
    type: String,
    default: '请选择'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  clearable: {
    type: Boolean,
    default: false
  },
  showAllLevels: {
    type: Boolean,
    default: true
  },
  collapseTags: {
    type: Boolean,
    default: false
  },
  separator: {
    type: String,
    default: '/'
  },
  filterable: Boolean,
  filterMethod: Function,
  debounce: {
    type: Number,
    default: 300
  },
  beforeFilter: Function,
  popperClass: String
};
