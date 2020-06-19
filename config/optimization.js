// //公共代码抽离

module.exports = {
  optimization: {
    splitChunks: {
      cacheGroups: {
        // 这里开始设置缓存的 chunks
        vendor: {
          // key 为entry中定义的 入口名称
          chunks: 'async', // 必须三选一： "initial" | "all" | "async"(默认就是异步)
          test: /node_modules/, // 正则规则验证，如果符合就提取 chunk (指定是node_modules下的第三方包)
          name: 'vendor', // 要缓存的 分隔出来的 chunk 名称
          minChunks: 1,
          maxInitialRequests: 5,
          minSize: 0,
          maxSize: 1048576,
          priority: 100
        },
        common: {
          chunks: 'async',
          test: /[\\/]src[\\/]js[\\/]/,
          name: 'common',
          minChunks: 2,
          maxInitialRequests: 5,
          minSize: 0,
          maxSize: 1048576,
          priority: 60
        },
        styles: {
          name: 'styles',
          test: /\.(sa|sc|c)ss$/,
          chunks: 'async',
          enforce: true
        },
        runtimeChunk: {
          name: 'manifest'
        }
      }
    }
  }
};
