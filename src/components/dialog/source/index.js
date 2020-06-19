import { Dialog } from 'element-ui';

import props from './props.config';

export default {
  components: {
    elDialog: Dialog
  },
  props,
  render() {
    const self = this,
      { $slots, $props } = self,
      attrs = $props.toCopy();

    return (
      <el-dialog
        class='me-dialog'
        attrs={attrs}
        beforeClose={self.onBeforeClose}
      >
        {$slots.default}
        <slot name='title'>{$slots.title}</slot>
        <slot name='footer'>{$slots.footer}</slot>
      </el-dialog>
    );
  },
  methods: {
    onBeforeClose(hide){
      this.$emit('before-close',hide);
    }
    // 用到再开启
    // on-open={self.onOpen}
    //     on-opened={self.onOpened}
    //     on-close={self.onClose}
    //     on-closed={self.onClosed}
    // onOpen() {
    //   this.$emit('open');
    // },
    // onOpened() {
    //   this.$emit('opened');
    // },
    // onClose() {
    //   this.$emit('close');
    // },
    // onClosed() {
    //   this.$emit('closed');
    // }
  }
};
