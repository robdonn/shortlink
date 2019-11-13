const webpack = require('webpack');
const { paths } = require('../paths');

const config = {
  context: paths.client,
  entry: {
    app: [
      'webpack-hot-middleware/client', // bundle the client for hot reloading
      './main.js' // the entry point of app
    ]
  },
  mode: 'development',
  output: {
    path: paths.buildClient,
    filename: 'client.bundle.js',
    publicPath: paths.publicPath
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // enable HMR globally
    new webpack.NoEmitOnErrorsPlugin() // do not emit compiled assets that include errors
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    },
    extensions: ['.js', '.web.js', '.mjs', '.json', '.jsx', '.css']
  },
  devtool: 'inline-source-map'
};

module.exports = config;
