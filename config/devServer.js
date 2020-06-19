// process.env.NODE_ENV === 'development'
const proxyTarget = require('./proxy.target'),
  getConfig = (output) => ({
    // 基础代理配置
    target: output,
    changeOrigin: true,
    ws: false, // WebSocket
    pathRewrite: {},
    secure: false,
    timeout: 1920000,
    bypass(req, res, proxyOptions) {
      proxyOptions;
      if (req.headers.accept && req.headers.accept.indexOf('html') !== -1) {
        return '/index.html';
      }
    },
    stats: {
      warningsFilter: (warning) => /Conflicting order/gm.test(warning)
    } //删除mini-css-extract-plugin打包警告
  }),
  proxy = {};
// {
//   '/dahua-b-usercenter': getConfig(
//     'http://dahua-b.dahua-b-dahua-b.testms.com'
//   ) // user默认代理到测试服
// };

// 配置多个代理
(Array.isArray(proxyTarget.extends) ? proxyTarget.extends : []).forEach(
  ({ path, target }) => {
    proxy[path] = getConfig(target);
  }
);
proxy['/'] = getConfig(proxyTarget.output); // 默认值放在最后

module.exports = {
  disableHostCheck: true,
  headers: {},
  progress: false,
  proxy
};
