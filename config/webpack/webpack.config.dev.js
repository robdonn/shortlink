const webpack = require('webpack');

const baseConfig = require('./webpack.config.base');

const config = {
  ...baseConfig,
  entry: {
    app: ['webpack-hot-middleware/client', ...baseConfig.entry.app]
  },
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // enable HMR globally
    ...baseConfig.plugins
  ]
};

module.exports = config;
