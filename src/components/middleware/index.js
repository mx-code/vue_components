import { props } from './props.config';
import comConfig from './component.config';

const meButton = () => import('@/components/button'),
  meLink = () => import('@/components/link'),
  meAutocomplete = () => import('@/components/form/field/autocomplete'),
  meCascader = () => import('@/components/form/field/cascader'),
  meCheckbox = () => import('@/components/form/field/checkbox'),
  meDate = () => import('@/components/form/field/datePicker'),
  meInput = () => import('@/components/form/field/input'),
  meInputNumber = () => import('@/components/form/field/inputNumber'),
  meRadio = () => import('@/components/form/field/radio'),
  meRate = () => import('@/components/form/field/rate'),
  meSelect = () => import('@/components/form/field/select'),
  meSlider = () => import('@/components/form/field/slider'),
  meSwitch = () => import('@/components/form/field/switch'),
  meTime = () => import('@/components/form/field/timePicker'),
  meUpload = () => import('@/components/form/field/upload');

export default {
  components: {
    meButton,
    meLink,
    meAutocomplete,
    meCascader,
    meCheckbox,
    meDate,
    meInput,
    meInputNumber,
    meRadio,
    meRate,
    meSelect,
    meSlider,
    meSwitch,
    meTime,
    meUpload
  },
  props,
  render() {
    const self = this,
      { data, prop, type = '', options = {} } = self,
      vmValue = data[prop],
      { hrefKey, routeKey } = options;
    // hrefKey给link设置href
    // routeKey给routerLink设置to

    if (type === 'text' || !type) {
      return <span class='me-middleware--text'>{vmValue}</span>;
    }

    const { comName, valueKey } = comConfig[type],
      ComName = comName;

    // 给子组件设置的valueKey赋值
    valueKey && (options[valueKey] = vmValue);
    hrefKey && (options.href = data[hrefKey]);
    routeKey && (options.to = data[routeKey]);

    return (
      <ComName
        attrs={options}
        isSub={true}
        on-input={self.onInput}
        on-callback={self.onCallback}
      />
    );
  },
  methods: {
    onInput(value) {
      // this.$updateValue(value);
      const { data, prop } = this;

      data[prop] = value;
    },
    onCallback(fnName, args) {
      this.$subCallback(
        {
          default: fnName,
          sub: fnName
        },
        args
      );
    }
  }
};
