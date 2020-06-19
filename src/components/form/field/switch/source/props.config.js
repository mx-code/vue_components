export default {
  value: [ Boolean, String, Number ],
  disabled: {
    type: Boolean,
    default: false
  },
  width: {
    type: Number,
    default: 40
  },
  activeIconClass: String,
  inactiveIconClass: String,
  activeText: String,
  inactiveText: String,
  activeValue: {
    type: [ Boolean, String, Number ],
    default: true
  },
  inactiveValue: {
    type: [ Boolean, String, Number ],
    default: false
  },
  activeColor: {
    type: String,
    default: '#409eff'
  },
  inactiveColor: {
    type: String,
    default: '#c0ccda'
  },
  name: String,
  validateEvent: {
    type: Boolean,
    default: true
  }
};
