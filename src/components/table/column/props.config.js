import sourceProps from './source/props.config';

const props = {}.toCopy(sourceProps, {
  children: Array
});

export { props, sourceProps };
