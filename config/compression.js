const CompressionWebpackPlugin = require('compression-webpack-plugin'); //构建时开启gzip

// 构建时开启gzip，降低服务器压缩对CPU资源的占用，服务器也要相应开启gzip
const productionGzipExtensions = [ 'js', 'css', 'svg', 'html', 'json', 'ttf' ]; // 需要gzip压缩的文件后缀

module.exports = new CompressionWebpackPlugin({
  filename: '[path].gz[query]',
  algorithm: 'gzip',
  test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
  threshold: 10240, // 只有大小大于该值的资源会被处理
  minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
  deleteOriginalAssets: false // 删除原文件
});
