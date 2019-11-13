module.exports = api => {
  api.cache(true);
  return {
    plugins: ['react-hot-loader/babel'],
    presets: ['@babel/preset-env', '@babel/preset-react']
  };
};
