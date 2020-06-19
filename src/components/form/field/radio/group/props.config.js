export default {
  value: [ String, Number, Boolean ],
  size: {
    type: String,
    validator: (value) => [ 'medium', 'small', 'mini' ].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  },
  textColor: {
    type: String,
    default: '#fff'
  },
  fill: {
    type: String,
    default: '#409eff'
  }
};
