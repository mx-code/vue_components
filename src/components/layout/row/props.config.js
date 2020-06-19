export default {
  gutter: {
    type: Number,
    default: 0
  },
  type: {
    type: String,
    validator: (value) => [ 'flex' ].includes(value)
  },
  justity: {
    type: String,
    default: 'start',
    validator: (value) =>
      [ 'start', 'end', 'center', 'space-around', 'space-between' ].includes(
        value
      )
  },
  align: {
    type: String,
    default: 'top',
    validator: (value) => [ 'top', 'middle', 'bottom' ].includes(value)
  },
  tag: {
    type: String,
    default: 'div'
  }
};
