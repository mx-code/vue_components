export default {
  value: [ String, Number, Boolean ],
  multiple: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  valueKey: {
    type: String,
    default: 'value'
  },
  size: {
    type: String,
    validator: (value) => [ 'medium', 'small', 'mini' ].includes(value)
  },
  clearable: {
    type: Boolean,
    default: false
  },
  collapseTags: {
    type: Boolean,
    default: false
  },
  multipleLimit: {
    type: Number,
    default: 0
  },
  name: String,
  autocomplete: {
    type: String,
    default: 'off'
  },
  placeholder: {
    type: String,
    default: '请选择'
  },
  filterable: {
    type: Boolean,
    default: false
  },
  allowCreate: {
    type: Boolean,
    default: false
  },
  filterMethod: Function,
  remote: {
    type: Boolean,
    default: false
  },
  remoteMethod: Function,
  loading: {
    type: Boolean,
    default: false
  },
  loadingText: {
    type: String,
    default: '加载中'
  },
  noMatchText: {
    type: String,
    default: '无匹配数据'
  },
  noDataText: {
    type: String,
    default: '无数据'
  },
  popperClass: String,
  reserveKeyword: {
    type: Boolean,
    default: false
  },
  defaultFirstOption: {
    type: Boolean,
    default: false
  },
  popperAppendToBody: {
    type: Boolean,
    default: true
  },
  automaticDropdown: {
    type: Boolean,
    default: false
  }
};
