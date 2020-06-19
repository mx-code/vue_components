const home = () => import('@/views/demo');

export default {
  path: 'demo/:key?',
  name: 'demo',
  component: home
};
