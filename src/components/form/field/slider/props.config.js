import sourceProps from './source/props.config';

const props = {}.toCopy(sourceProps, {
  isSub: {
    type: Boolean,
    default: false
  }
});

export { props, sourceProps };
