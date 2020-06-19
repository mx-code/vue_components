import meDialog from './source';

import props from './source/props.config';

export default {
  components: {
    meDialog
  },
  props: {}.toCopy(props),
  render() {
    const self = this,
      { $slots, $props } = self,
      attrs = $props.toCopy();

    return (
      <me-dialog class='me-dialog' attrs={attrs} on-before-close={() => self.onBeforeClose('cancel')}>
        <slot name='title'>{$slots.title}</slot>
        {$slots.default}
        <slot name='footer'>{$slots.footer}</slot>
      </me-dialog>
    );
  },
  methods: {
    onBeforeClose(action){
      this.$emit('before-close',action);
    }
  }
};
