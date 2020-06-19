export default {
  type: String,
  size: {
    type: String,
    validator: (value) => [ 'medium', 'small', 'mini' ].includes(value)
  },
  splitButton: {
    type: Boolean,
    default: false
  },
  placement: {
    type: String,
    default: 'bottom-end',
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
  trigger: {
    type: String,
    default: 'hover',
    validator: (value) => [ 'hover', 'click' ].includes(value)
  },
  hideOnClick: {
    type: Boolean,
    default: true
  },
  showTimeout: {
    type: Number,
    default: 250
  },
  hideTimeout: {
    type: Number,
    default: 150
  },
  tabindex: {
    type: Number,
    default: 0
  }
};
