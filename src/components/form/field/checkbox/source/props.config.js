export default {
  value: [ String, Number, Boolean, Array ],
  label: [ String, Number, Boolean ],
  trueLabel: [ String, Number ],
  falseLabel: [ String, Number ],
  disabled: {
    type: Boolean,
    default: false
  },
  border: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    validator: (value) => [ 'medium', 'small', 'mini' ].includes(value)
  },
  name: String,
  checked: {
    type: Boolean,
    default: false
  },
  indeterminate: {
    type: Boolean,
    default: false
  }
};
