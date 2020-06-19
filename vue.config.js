// const path = require('path');

const ENV = process.env.NODE_ENV,
  isDevelopment = ENV === 'development'; //开发环境

module.exports = {
  publicPath: process.env.BASE_URL,
  productionSourceMap: false,
  lintOnSave: isDevelopment,
  transpileDependencies: [],
  devServer: (isDevelopment && require('./config/devServer')) || {},
  configureWebpack: Object.assign(
    {
      resolve: {
        alias: {
          // '@_com': path.resolve(__dirname, 'src/views/accounts/components/')
        }
      },
      plugins:
        (isDevelopment && []) ||
        [
          // require('./config/webpackPlugins')
          // require('./config/compression')
        ]
    },
    require('./config/optimization')
  ),
  chainWebpack: isDevelopment
    ? undefined
    : (config) => {
      config.optimization.minimizer('terser').tap((args) => {
        args[0].terserOptions.compress = Object.assign(
          args[0].terserOptions.compress,
          {
            drop_console: true,
            drop_debugger: true,
            pure_funcs: [
              'console.log',
              'window.console.log',
              'alert',
              'debugger',
              'confirm',
              'prompt'
            ]
          }
        );
        return args;
      });
    }
};
