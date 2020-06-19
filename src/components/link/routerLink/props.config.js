export default {
  props: {
    to: {
      type: [ String, Location, Object ],
      required: true
    },
    replace: {
      type: Boolean,
      default: false
    },
    append: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: 'a'
    },
    activeClass: {
      type: String,
      default: 'router-link-active'
    },
    exact: {
      type: Boolean,
      default: false
    },
    event: {
      type: [ String, Array ],
      default: 'click'
    },
    exactActiveClass: {
      type: String,
      default: 'router-link-exact-active'
    },
    target: String
  }
};
