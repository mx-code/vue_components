import dropdownProps from './source/props.config';

const props = {}.toCopy(dropdownProps, {
  data: Array,
  value: [ String, Number, Object ],
  isSub: {
    type: Boolean,
    default: false
  }
});

export {props,dropdownProps};