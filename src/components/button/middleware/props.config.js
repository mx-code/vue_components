import sourceProps from '../source/props.config';

const props = {}.toCopy(sourceProps, {
  text: String,
  icon: String,
  appendIcon: String
});

export { props, sourceProps };
