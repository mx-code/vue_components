export default {
  small: {
    type: Boolean,
    default: false
  },
  background: {
    type: Boolean,
    default: false
  },
  pageSize: {
    type: Number,
    default: 10
  },
  total: Number,
  pageCount: Number,
  pagerCount: {
    type: Number,
    default: 7,
    validator: (value) => value >= 5 && value <= 21 && value % 2 === 1
  },
  currentPage: {
    type: Number,
    default: 1
  },
  layout: {
    type: String,
    default: 'prev, pager, next, jumper,sizes, ->, total'
  },
  pageSizes: {
    type: Array,
    default: () => [ 10, 20, 50, 100 ]
  },
  popperClass: String,
  prevText: String,
  nextText: String,
  disabled: {
    type: Boolean,
    default: false
  },
  hideOnSinglePage: Boolean
};
