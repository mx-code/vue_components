export default {
  type: {
    type: String,
    default: 'text'
  },
  value: [ String, Number ],
  maxlength: Number,
  minlength: Number,
  showWordLimit: {
    type: Boolean,
    default: false
  },
  placeholder: String,
  clearable: {
    type: Boolean,
    default: false
  },
  showPassword: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    validator: (value) => [ 'medium', 'small', 'mini' ].includes(value)
  },
  prefixIcon: String,
  suffixIcon: String,
  rows: {
    type: Number,
    default() {
      return this.type === 'textarea' ? 2 : undefined;
    }
  },
  autocomplete: {
    type: String,
    default: 'off',
    validator: (value) => [ 'on', 'off' ].includes(value)
  },
  name: String,
  readonly: {
    type: Boolean,
    default: false
  },
  max: true,
  min: true,
  step: true,
  resize: {
    type: String,
    validator: (value) =>
      [ 'none', 'both', 'horizontal', 'vertical' ].includes(value)
  },
  autofocus: {
    type: Boolean,
    default: false
  },
  form: String,
  label: String,
  tabindex: String,
  validateEvent: {
    type: Boolean,
    default: true
  }
};
