export default {
  value: [ Date, Array, String ],
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
    validator: (value) => [ 'large', 'small', 'mini' ].includes(value)
  },
  placeholder: String,
  startPlaceholder: String,
  endPlaceholder: String,
  type: {
    type: String,
    default: 'date',
    validator: (value) =>
      [
        'year',
        'month',
        'date',
        'dates',
        'week',
        'datetime',
        'datetimerange',
        'daterange',
        'monthrange'
      ].includes(value)
  },
  format: {
    type: String,
    default: 'yyyy-MM-dd'
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
  defaultValue: Date,
  defaultTime: Array,
  valueFormat: String,
  name: String,
  unlinkPanels: {
    type: Boolean,
    default: false
  },
  prefixIcon: {
    type: String,
    default: 'el-icon-date'
  },
  clearIcon: {
    type: String,
    default: 'el-icon-circle-close'
  },
  validateEvent: {
    type: Boolean,
    default: true
  }
};
