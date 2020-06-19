export default {
  span: {
    type: Number,
    default: 24,
    validator: (value) => value >= 0 && value <= 24
  },
  offset: {
    type: Number,
    default: 0,
    validator: (value) => value >= 0 && value <= 24
  },
  push: {
    type: Number,
    default: 0,
    validator: (value) => value >= 0 && value <= 24
  },
  pull: {
    type: Number,
    default: 0,
    validator: (value) => value >= 0 && value <= 24
  },
  xs: [ Number, Object ],
  sm: [ Number, Object ],
  md: [ Number, Object ],
  lg: [ Number, Object ],
  xl: [ Number, Object ],
  tag: {
    type: String,
    default: 'div'
  }
};
