const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader'
          },
          {
            test: /\.css$/,
            use: [
              require.resolve('css-hot-loader'),
              MiniCssExtractPlugin.loader,
              require.resolve('css-loader'),
              {
                loader: require.resolve('postcss-loader'),
                options: {
                  sourceMap: true,
                  config: {
                    path: paths.root
                  }
                }
              }
            ]
          }
        ]
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
