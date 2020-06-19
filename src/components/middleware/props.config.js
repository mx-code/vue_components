const fieldArr = [ 'autocomplete',
    'cascader',
    'checkbox',
    'date',
    'input',
    'inputNumber',
    'radio',
    'rate',
    'select',
    'slider',
    'switch',
    'time',
    'upload' ],
  typeArr = [ 'button',
    'link',
    'text',...fieldArr ];

const props =  {
  data: Object,
  prop: String,
  remoteData: Object,
  meType: {
    type: String,
    validator: (value) => typeArr.includes(value)
  },
  meOption: Object,
  isSub: {
    type: Boolean,
    default: false
  }
};


export {props,fieldArr};