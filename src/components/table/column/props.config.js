import sourceProps from './source/props.config';
import {props as middlewareProps,fieldArr} from '@/components/middleware/props.config';

const props = {}.toCopy(sourceProps,middlewareProps, {
  children: Array,
  remoteData: Object,
  form: Object,
  isForm: {
    type: Boolean,
    default: false
  },
  preType: String, // 当preOption满足条件时 赋值给middlewareProps.meType
  preOption: Object
});

export { props, sourceProps,middlewareProps,fieldArr };
