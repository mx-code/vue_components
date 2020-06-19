import { props, sourceProps, routerLinkProps } from './props.config';

const meLink = () => import('../source'),
  meRouterLink = () => import('../routerLink'),
  meIcon = () => import('@/components/icon');

export default {
  components: {
    meLink,
    meRouterLink,
    meIcon
  },
  props,
  render() {
    const self = this,
      { $slots, $props, to, text, icon, appendIcon } = self,
      ComponentName = to ? 'meRouterLink' : 'meLink',
      attrs = $props.cover(Object.keys(to ? routerLinkProps : sourceProps));

    return (
      <ComponentName attrs={attrs} isSub={true} on-click={self.onClick} >
        <me-icon icon={icon} position='prev' />
        {$slots.default || text}
        <me-icon icon={appendIcon} position='append' />
      </ComponentName>
    );
  },
  methods: {
    onClick(event){
      this.$emit('click',event);
    },
    onCallback(fnName,args){
      this.$subCallback({
        default: fnName,
        sub: fnName
      },args);
    }
  }
};
