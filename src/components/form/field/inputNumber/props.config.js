export default {
  value: {
    type: Number,
    default: 0
  },
  min: {
    type: Number,
    default: -1e28 // -Infinity
  },
  max: {
    type: Number,
    default: 1e28 // Infinity  未知错误
  },
  step: {
    type: Number,
    default: 1
  },
  stepStrictly: {
    type: Boolean,
    default: false
  },
  precision: Number,
  size: {
    type: String,
    validator: (value) => ['large', 'small'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  },
  controls: {
    type: Boolean,
    default: true
  },
  controlsPosition: {
    type: String,
    validator: (value) => ['right'].includes(value)
  },
  name: String,
  label: String,
  placeholder: String,
  isSub: {
    type: Boolean,
    default: false
  }
};
