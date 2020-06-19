import { props, sourceProps } from './props.config';

const meButton = () => import('../source'),
  meIcon = () => import('@/components/icon');

export default {
  components: {
    meButton,
    meIcon
  },
  props,
  render() {
    const self = this,
      { $slots, $props, text, icon, appendIcon } = self,
      attrs = $props.cover(Object.keys(sourceProps));

    return (
      <me-button attrs={attrs} on-click={(event) => self.$emit('click', event)}>
        <me-icon icon={icon} position='prev' />
        {$slots.default || text}
        <me-icon icon={appendIcon} position='append' />
      </me-button>
    );
  }
};
