export default {
  value: [ Date, String ],
  readonly: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  editable: {
    type: Boolean,
    default: true
  },
  clearable: {
    type: Boolean,
    default: true
  },
  size: {
    type: String,
    validator: (value) => [ 'medium', 'small', 'mini' ].includes(value)
  },
  placeholder: String,
  startPlaceholder: String,
  endPlaceholder: String,
  isRange: {
    type: Boolean,
    default: false
  },
  arrowControl: {
    type: Boolean,
    default: false
  },
  align: {
    type: String,
    default: 'left',
    validator: (value) => [ 'left', 'center', 'right' ].includes(value)
  },
  popperClass: String,
  pickerOptions: {
    type: Object,
    default: () => ({})
  },
  rangeSeparator: {
    type: String,
    default: '-'
  },
  valueFormat: String,
  defaultValue: [ Date, String ],
  name: String,
  prefixIcon: {
    type: String,
    default: 'el-icon-time'
  },
  clearIcon: {
    type: String,
    default: 'el-icon-circle-close'
  }
};
