import sourceProps from '../source/props.config';
import routerLinkProps from '../routerLink/props.config';

const props = {}.toCopy(sourceProps, routerLinkProps, {
  text: String,
  icon: String,
  appendIcon: String,
  isSub: {
    type: Boolean,
    default: false
  }
});

export { props, sourceProps, routerLinkProps };
