export default {
  value: Array,
  size: {
    type: String,
    validator: (value) => [ 'medium', 'small', 'mini' ].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  },
  min: Number,
  max: Number,
  textColor: {
    type: String,
    default: '#fff'
  },
  fill: {
    type: String,
    default: '#409eff'
  }
};
