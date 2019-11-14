const baseConfig = require('./webpack.config.base');

var config = {
  ...baseConfig,
  mode: 'production'
};

module.exports = config;
