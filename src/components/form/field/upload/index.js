import { Upload } from 'element-ui';

import props from './props.config';

export default {
  components: {
    elUpload: Upload
  },
  props,
  render() {
    const self = this,
      { $slots } = self,
      attrs = self.$props;

    return (
      <el-upload ref='upload' attrs={attrs}>
        {$slots.default}
        <template slot='trigger'>{$slots.trigger}</template>
        <template slot='tip'>{$slots.tip}</template>
      </el-upload>
    );
  }
};
