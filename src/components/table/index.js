import meTable from './source';

import tableProps from './source/props.config';
import { props as columnProps } from './column/props.config';

const meTableColumn = () => import('./column'),
  mePagination = () => import('@/components/pagination');

let upTimer = null;

export default {
  components: {
    meTable,
    meTableColumn,
    mePagination
  },
  props: {
    columns: Array,
    data: Array,
    tableOpts: Object,   // element的el-table参数
    pagination: Object,   // 分页参数 请参考element 可根据自己的项目调整参数
    remoteData: Object,
    form: Object,  // isForm: true 必传
    isForm: { // td中的输入框 使用form/row为更新对象
      type: Boolean,
      default: false
    }
  },
  data(){
    return {
      preOption: {  // 动态改变td内容 一般是将文本改成表单
        rows: null,
        props: null
      },
      tableKey: 1
    };
  },
  watch: {
    remoteData(){
      this.updateTable();
    }
  },
  render() {
    const self = this,
      {
        $slots,
        columns = [],
        data = [],
        tableOpts,
        pagination,
        remoteData,
        form,
        isForm,
        preOption,
        tableKey
      } = self,
      tableAttrs = tableOpts?.cover(Object.keys(tableProps)),
      columnKeys = Object.keys(columnProps);

    return (
      <div class='me-table-wrap'>
        <me-table ref='table' key={tableKey} attrs={tableAttrs}  data={data} on-select={self.onSelect}
          on-select-all={self.onSelectAll}
          on-selection-change={self.onSelectionChange}
          on-cell-mouse-enter={self.onCellMouseEnter}
          on-cell-mouse-leave={self.onCellMouseLeave}
          on-cell-click={self.onCellClick}
          on-cell-dblclick={self.onCellDBLClick}
          on-row-click={self.onRowClick}
          on-row-contextmenu={self.onRowContextmenu}
          on-row-dblclick={self.onRowDBLClick}
          on-header-click={self.onHeaderClick}
          on-header-contextmenu={self.onHeaderContextmenu}
          on-sort-change={self.onSortChange}
          on-filter-change={self.onFilterChange}
          on-current-change={self.onCurrentChange}
          on-header-dragend={self.onHeaderDragend}
          on-expand-change={self.onExpandChange}>
          {$slots.default
            ? $slots.default
            : columns.map((item) => (
              <me-table-column
                key={item.key || item.prop || item.label}
                attrs={item.cover(columnKeys)} remoteData={remoteData} form={form} isForm={isForm}
                preOption={preOption}
                on-callback={self.onCallback}></me-table-column>
            ))}
        </me-table>
        {pagination?.total > 0 ? (
          <me-pagination
            attrs={pagination}
            on-size-change={self.onSizeChange}
            on-current-change={self.onPaginationChange}></me-pagination>
        ) : undefined}
      </div>
    );
  },
  methods: {
    onCallback(fnName,args){
      typeof fnName === 'string' && this.$emit(fnName,args);
    },
    updateTable(){
      // 触发el-table-column scopedSlots的更新  方法很蠢但是管用
      clearTimeout(upTimer);
      upTimer = setTimeout(() => {
        this.tableKey += 1;
      },100);
    },
    changeColumn({rows,props}){
      this.updateTable();
      this.preOption = this.preOption.toCopy({
        rows,
        props
      });
    },
    // table callback start
    onSelect(selection, row) {
      this.$emit('select', selection, row);
    },
    onSelectAll(selection) {
      this.$emit('select-all', selection);
    },
    onSelectionChange(selection) {
      this.$emit('selection-change', selection);
    },
    onCellMouseEnter(row, column, cell, event) {
      this.$emit('cell-mouse-enter', row, column, cell, event);
    },
    onCellMouseLeave(row, column, cell, event) {
      this.$emit('cell-mouse-leave', row, column, cell, event);
    },
    onCellClick(row, column, cell, event) {
      this.$emit('cell-click', row, column, cell, event);
    },
    onCellDBLClick(row, column, cell, event) {
      this.$emit('cell-dblclick', row, column, cell, event);
    },
    onRowClick(row, column, event) {
      this.$emit('row-click', row, column, event);
    },
    onRowContextmenu(row, column, event) {
      this.$emit('row-contextmenu', row, column, event);
    },
    onRowDBLClick(row, column, event) {
      this.$emit('row-dblclick', row, column, event);
    },
    onHeaderClick(column, event) {
      this.$emit('header-click', column, event);
    },
    onHeaderContextmenu(column, event) {
      this.$emit('header-contextmenu', column, event);
    },
    onSortChange({ column, prop, order }) {
      this.$emit('sort-change', { column, prop, order });
    },
    onFilterChange(filters) {
      this.$emit('filter-change', filters);
    },
    onCurrentChange(currentRow, oldCurrentRow) {
      this.$emit('current-change', currentRow, oldCurrentRow);
    },
    onHeaderDragend(newWidth, oldWidth, column, event) {
      this.$emit('header-dragend', newWidth, oldWidth, column, event);
    },
    onExpandChange(row, expanded) {
      this.$emit('expand-change', row, expanded);
    },
    // pagination callback start
    onSizeChange(num) {
      this.$emit('size-change', num);
    },
    onPaginationChange(num) {
      // 与table事件重名 改成paginationChange
      this.$emit('pagination-change', num);
    }
  }
};
