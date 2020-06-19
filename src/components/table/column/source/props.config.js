export default {
  type: {
    type: String,
    validator: (value) => [ 'selection', 'index', 'expand' ].includes(value)
  },
  index: [ Number, Function ],
  columnKey: String,
  label: String,
  prop: String,
  width: String,
  minWidth: String,
  fixed: {
    type: [ String, Boolean ],
    validator: (value) => [ true, false, 'left', 'right' ].includes(value)
  },
  renderHeader: Function,
  sortable: {
    type: [ Boolean, String ],
    default: false,
    validator: (value) => [ true, false, 'custom' ].includes(value)
  },
  sortMethod: Function,
  sortBy: [ String, Array, Function ],
  sortOrders: {
    type: Array,
    default: () => [ 'ascending', 'descending', null ]
  },
  resizable: {
    type: Boolean,
    default: true
  },
  formatter: Function,
  showOverflowTooltip: {
    type: Boolean,
    default: false
  },
  align: {
    type: String,
    default: 'left',
    validator: (value) => [ 'left', 'center', 'right' ].includes(value)
  },
  headerAlign: {
    type: String,
    validator: (value) => [ 'left', 'center', 'right' ].includes(value)
  },
  className: String,
  labelClassName: String,
  selectable: Function,
  reserveSelection: {
    type: Boolean,
    default: false
  },
  filters: Array,
  filterPlacement: String,
  filterMultiple: {
    type: Boolean,
    default: true
  },
  filterMethod: Function,
  filteredValue: Array
};
