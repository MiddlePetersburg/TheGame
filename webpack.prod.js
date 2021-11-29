const { merge } = require('webpack-merge');
const WorkboxPlugin = require('workbox-webpack-plugin');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      maximumFileSizeToCacheInBytes: 100 * 1024 * 1024,
      swDest: 'sw.js',
    })
  ],
});
