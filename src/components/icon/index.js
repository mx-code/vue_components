export default {
  props: {
    icon: String,
    position: {
      type: String,
      validator: (value) => [ 'prev', 'append' ].includes(value)
    }
  },
  render() {
    const self = this,
      { icon, position } = self,
      posClassName = position ? `is-${ position }` : '';

    return icon ? <i class={`me-icon ${ icon } ${ posClassName }`}></i> : undefined;
  }
};
