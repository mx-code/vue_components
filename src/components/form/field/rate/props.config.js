export default {
  value: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 5
  },
  disabled: {
    type: Boolean,
    default: false
  },
  allowHalf: {
    type: Boolean,
    default: false
  },
  lowThreshold: {
    type: Number,
    default: 2
  },
  highThreshold: {
    type: Number,
    default: 4
  },
  colors: {
    type: [Array, Object],
    default: () => ['#f7ba2a', '#f7ba2a', '#f7ba2a']
  },
  voidColor: {
    type: String,
    default: '#c6d1de'
  },
  disabledVoidColor: {
    type: String,
    default: '#eff2f7'
  },
  iconClasses: {
    type: [Array, Object],
    default: () => ['el-icon-star-on', 'el-icon-star-on', 'el-icon-star-on']
  },
  voidIconClass: {
    type: String,
    default: 'el-icon-star-off'
  },
  disabledVoidIconClass: {
    type: String,
    default: 'el-icon-star-on'
  },
  showText: {
    type: Boolean,
    default: false
  },
  showScore: {
    type: Boolean,
    default: false
  },
  textColor: {
    type: String,
    default: '#1f2d3d'
  },
  texts: {
    type: Array,
    default: () => ['极差', '失望', '一般', '满意', '惊喜']
  },
  scoreTemplte: {
    type: String,
    default: '{value}'
  },
  isSub: {
    type: Boolean,
    default: false
  }
};
