export default {
  data: Array,
  height: [ String, Number ],
  maxHeight: [ String, Number ],
  stripe: {
    type: Boolean,
    default: false
  },
  border: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    validator: (value) => [ 'medium', 'small', 'mini' ].includes(value)
  },
  fit: {
    type: Boolean,
    default: true
  },
  showHeader: {
    type: Boolean,
    default: true
  },
  highlightCurrentRow: {
    type: Boolean,
    default: false
  },
  currentRowKey: [ String, Number ],
  rowClassName: [ Function, String ],
  rowStyle: [ Function, Object ],
  cellClassName: [ Function, String ],
  cellStyle: [ Function, Object ],
  headerRowClassName: [ Function, String ],
  headerRowStyle: [ Function, Object ],
  headerCellClassName: [ Function, String ],
  headerCellStyle: [ Function, Object ],
  rowKey: [ Function, String ],
  emptyText: {
    type: String,
    default: '暂无数据'
  },
  defaultExpandAll: {
    type: Boolean,
    default: false
  },
  expandRowKeys: Array,
  defaultSort: {
    type: Object
    // order: ascending, descending
  },
  tooltipEffect: {
    type: String,
    validator: (value) => [ 'dark', 'light' ].includes(value)
  },
  showSummary: {
    type: Boolean,
    default: false
  },
  sumText: {
    type: String,
    default: '合计'
  },
  summaryMethod: {
    type: Function
  },
  spanMethod: Function,
  selectOnIndeterminate: {
    type: Boolean,
    default: true
  },
  indent: {
    type: Number,
    default: 16
  },
  lazy: Boolean,
  load: Function,
  treeProps: {
    type: Object,
    default: () => ({ hasChildren: 'hasChildren', children: 'children' })
  }
};
