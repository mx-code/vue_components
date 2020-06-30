export default {
  value: {
    type: Number,
    default: 0
  },
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 100
  },
  disabled: {
    type: Boolean,
    default: false
  },
  step: {
    type: Number,
    default: 1
  },
  showInput: {
    type: Boolean,
    default: false
  },
  showInputControls: {
    type: Boolean,
    default: true
  },
  inputSize: {
    type: String,
    default: 'small',
    validator: (value) => ['large', 'medium', 'small', 'mini'].includes(value)
  },
  showStops: {
    type: Boolean,
    default: false
  },
  formatTooltip: Function,
  range: {
    type: Boolean,
    default: false
  },
  vertical: {
    type: Boolean,
    default: false
  },
  height: String,
  label: String,
  debounce: {
    type: Number,
    default: 300
  },
  tooltipClass: String,
  marks: Object,
  isSub: {
    type: Boolean,
    default: false
  }
};
