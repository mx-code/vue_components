import { props } from './middleware/props.config';

const meButton = () => import('./middleware'),
  meDropdown = () => import('@/components/dropdown');

export default {
  components: {
    meButton,
    meDropdown
  },
  props: {
    data: [ Array, Object ],
    text: String,
    isSub: {
      type: Boolean,
      default: false
    }
  },
  render() {
    const self = this,
      { $slots, data = {},text } = self,
      keys = Object.keys(props);

    const getContent = (args, text) => (
      <me-button attrs={args.cover(keys)} on-click={(event) => self.onClick(args, event)}>
        {text}
      </me-button>
    );

    if (Array.isArray(data)) {
      return <div class='me-button--group'>{data.map((item) => item.isDropdown ? <me-dropdown attrs={item.dropOption} isSub={true} on-callback={self.onCallback}></me-dropdown>  : getContent(item))}</div>;
    }

    return getContent(data, $slots.default || text);
  },
  methods: {
    onCallback(fnName,args){
      this.$subCallback({
        default: fnName,
        sub: fnName
      },args);
    },
    onClick(args, event) {
      const fnName = args.fnName || 'click';
      this.$subCallback(
        {
          default: fnName,
          sub: fnName
        },
        { option: args, event }
      );
    }
  }
};
