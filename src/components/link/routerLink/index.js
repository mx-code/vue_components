import props from './props.config';

export default {
  props,
  render() {
    const { $props, $slots } = this;
    return (
      <router-link class='me-router-link me-link' attrs={$props}>
        {$slots.default}
      </router-link>
    );
  }
};
