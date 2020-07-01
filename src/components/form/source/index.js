import { Form } from 'element-ui';

import props from './props.config';

export default {
  components: {
    elForm: Form
  },
  props,
  render() {
    const self = this,
      attrs = { ...self.$props };

    return (
      <el-form
        class='me-form'
        ref='form'
        attrs={attrs}
        on-submit={self.onSubmit}
      >
        {self.$slots.default}
      </el-form>
    );
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
    }
  }
};
