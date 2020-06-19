import { props } from './middleware/props.config';

const meLink = () => import('./middleware');

export default {
  components: {
    meLink
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
      <me-link attrs={args.cover(keys)} on-click={(event) => self.onClick(args, event)}>
        {text}
      </me-link>
    );

    if (Array.isArray(data)) {
      return <div class='me-link--group'>{data.map((item) => getContent(item))}</div>;
    }

    return getContent(data, $slots.default || text);
  },
  methods: {
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
