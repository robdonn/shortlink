const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { paths } = require('../paths');

const config = {
  context: paths.client,
  entry: {
    app: ['./main.js']
  },
  output: {
    path: paths.buildClient,
    filename: 'client.bundle.js',
    publicPath: paths.publicPath
  },
  plugins: [
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
    extensions: ['.js', '.web.js', '.mjs', '.json', '.jsx', '.css'],
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  devtool: 'hidden-source-map'
};

module.exports = config;
