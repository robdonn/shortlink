const path = require('path');
const fs = require('fs');

const resolveApp = (...relativePath) => {
  const appDirectory = fs.realpathSync(process.cwd());

  return path.resolve(appDirectory, ...relativePath);
};

const paths = {
  root: resolveApp('.'),
  buildClient: resolveApp('build', 'client'),
  configWebpack: resolveApp('config', 'webpack'),
  dotenv: resolveApp('.env'),
  nodeModules: resolveApp('node_modules'),
  public: resolveApp('public'),
  publicPath: '/static/',
  client: resolveApp('client'),
  server: resolveApp('server')
};

module.exports = {
  resolveApp,
  paths
};
