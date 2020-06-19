export default {
  action: String,
  headers: Object,
  multiple: Boolean,
  data: Object,
  name: {
    type: String,
    default: 'file'
  },
  withCredentials: {
    type: Boolean,
    default: false
  },
  showFileList: {
    type: Boolean,
    default: true
  },
  drag: {
    type: Boolean,
    default: false
  },
  accept: String,
  onPreview: Function,
  onRemove: Function,
  onSuccess: Function,
  onError: Function,
  onProgress: Function,
  onChange: Function,
  beforeUpload: Function,
  beforeRemove: Function,
  listType: {
    type: String,
    default: 'text',
    validator: (value) => [ 'text','picture','picture-card' ].includes(value)
  },
  autoUpload: {
    type: Boolean,
    default: true
  },
  fileList: {
    type: Array,
    default: () => ([])
  },
  httpRequest: Function,
  disabled: {
    type: Boolean,
    default: false
  },
  limit: Number,
  onExceed: Function
};