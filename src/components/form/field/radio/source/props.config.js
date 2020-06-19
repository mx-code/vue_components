export default {
  value: [ String, Number, Boolean ],
  label: [ String, Number, Boolean ],
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
  name: String
};
