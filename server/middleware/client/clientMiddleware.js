const clientMiddleware = app => {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpackConfig = require('../../../config/webpack/webpack.config.dev');

  const webpackDevMiddlewareSettings = {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  };

  const compiler = webpack(webpackConfig);

  app.use(webpackDevMiddleware(compiler, webpackDevMiddlewareSettings));
  app.use(webpackHotMiddleware(compiler));
};

module.exports = {
  clientMiddleware
};
