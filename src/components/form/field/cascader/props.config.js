import sourceProps from './source/props.config';
import panelProps from './panel/props.config';

const props = {}.toCopy(sourceProps, panelProps, {
  type: {
    type: String,
    validator: (value) => [ 'panel' ].includes(value)
  },
  isSub: {
    type: Boolean,
    default: true
  }
});

export { props, sourceProps, panelProps };
