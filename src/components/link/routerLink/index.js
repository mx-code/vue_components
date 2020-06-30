import props from './props.config';

export default {
  props,
  render() {
    const self = this;
    return (
      <router-link class='me-router-link me-link' attrs={self.$props}>
        {self.$slots.default}
      </router-link>
    );
  }
};
