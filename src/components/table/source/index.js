import { Table } from 'element-ui';

import props from './props.config';

export default {
  components: {
    elTable: Table
  },
  props,
  render() {
    const self = this,
      { $slots, $props } = self,
      attrs = { ...$props };

    return (
      <el-table
        class='me-table'
        ref='table'
        attrs={attrs}
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
        {$slots.default}
        <slot name='append'>{$slots.append}</slot>
      </el-table>
    );
  },
  methods: {
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
    }
  }
};
