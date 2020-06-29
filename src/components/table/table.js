import meTable from './source';

import tableProps from './source/props.config';
import { props as columnProps } from './column/props.config';

const meTableColumn = () => import('./column'),
  mePagination = () => import('@/components/pagination');

export default {
  components: {
    meTable,
    meTableColumn,
    mePagination
  },
  props: {
    columns: Array,
    data: Array,
    tableOpts: Object, // element的el-table参数
    pagination: Object // 分页参数 请参考element 可根据自己的项目调整参数
  },
  render() {
    const self = this,
      {
        $slots,
        $scopedSlots,
        columns = [],
        data = [],
        tableOpts,
        pagination
      } = self,
      tableAttrs = tableOpts?.cover(Object.keys(tableProps)),
      columnKeys = Object.keys(columnProps),
      scopedSlots = {
        default: $scopedSlots.content
      };

    return (
      <div class='me-table-wrap'>
        <me-table
          ref='table'
          attrs={tableAttrs}
          data={data}
          on-select={self.onSelect}
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
          on-expand-change={self.onExpandChange}
        >
          {$slots.default
            ? $slots.default
            : columns.map((item) => (
                <me-table-column
                  key={item.key || item.prop || item.label}
                  attrs={item.cover(columnKeys)}
                  scopedSlots={scopedSlots}
                ></me-table-column>
              ))}
        </me-table>
        {pagination?.total > 0 ? (
          <me-pagination
            attrs={pagination}
            on-size-change={self.onSizeChange}
            on-current-change={self.onPaginationChange}
          ></me-pagination>
        ) : undefined}
      </div>
    );
  },
  methods: {
    // table callback start
    onSelect(selection, row) {
      this.$emit('callback', 'select', { selection, row });
    },
    onSelectAll(selection) {
      this.$emit('callback', 'select-all', { selection });
    },
    onSelectionChange(selection) {
      this.$emit('callback', 'selection-change', { selection });
    },
    onCellMouseEnter(row, column, cell, event) {
      this.$emit('callback', 'cell-mouse-enter', { row, column, cell, event });
    },
    onCellMouseLeave(row, column, cell, event) {
      this.$emit('callback', 'cell-mouse-leave', { row, column, cell, event });
    },
    onCellClick(row, column, cell, event) {
      this.$emit('callback', 'cell-click', { row, column, cell, event });
    },
    onCellDBLClick(row, column, cell, event) {
      this.$emit('callback', 'cell-dblclick', { row, column, cell, event });
    },
    onRowClick(row, column, event) {
      this.$emit('callback', 'row-click', { row, column, event });
    },
    onRowContextmenu(row, column, event) {
      this.$emit('callback', 'row-contextmenu', { row, column, event });
    },
    onRowDBLClick(row, column, event) {
      this.$emit('callback', 'row-dblclick', { row, column, event });
    },
    onHeaderClick(column, event) {
      this.$emit('callback', 'header-click', { column, event });
    },
    onHeaderContextmenu(column, event) {
      this.$emit('callback', 'header-contextmenu', { column, event });
    },
    onSortChange({ column, prop, order }) {
      this.$emit('callback', 'sort-change', { column, prop, order });
    },
    onFilterChange(filters) {
      this.$emit('callback', 'filter-change', { filters });
    },
    onCurrentChange(currentRow, oldCurrentRow) {
      this.$emit('callback', 'current-change', { currentRow, oldCurrentRow });
    },
    onHeaderDragend(newWidth, oldWidth, column, event) {
      this.$emit('callback', 'header-dragend', {
        newWidth,
        oldWidth,
        column,
        event
      });
    },
    onExpandChange(row, expanded) {
      this.$emit('callback', 'expand-change', { row, expanded });
    },
    // pagination callback start
    onSizeChange(num) {
      this.$emit('callback', 'size-change', { num });
    },
    onPaginationChange(num) {
      // 与table事件重名 改成paginationChange
      this.$emit('callback', 'pagination-change', { num });
    }
  }
};
