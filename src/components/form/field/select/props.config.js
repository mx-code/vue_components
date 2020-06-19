import sourceProps from './source/props.config';

const props = {}.toCopy(sourceProps, {
  options: Array,
  labelKey: {
    type: String,
    default: 'label'
  },
  valueKey: {
    type: String,
    default: 'value'
  },
  isSub: {
    type: Boolean,
    default: false
  }
});

export { props, sourceProps };
