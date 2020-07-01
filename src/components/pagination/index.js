import { Pagination } from 'element-ui';

import props from './props.config';

export default {
  components: {
    elPagination: Pagination
  },
  props,
  render() {
    const self = this,
      attrs = { ...self.$props };

    return (
      <el-pagination
        attrs={attrs}
        on-size-change={self.onSizeChange}
        on-current-change={self.onCurrentChange}
      >
        {self.$slots.default}
      </el-pagination>
    );
  },
  methods: {
    onSizeChange(num) {
      this.$emit('size-change', num);
    },
    onCurrentChange(num) {
      this.$emit('current-change', num);
    }
    //废弃 需要再启用
    // on-prev-click={self.onPrevClick}
    //     on-next-click={self.onNextClick}
    // onPrevClick(num) {
    //   this.$emit('prev-click', num);
    // },
    // onNextClick(num) {
    //   this.$emit('next-click', num);
    // }
  }
};
