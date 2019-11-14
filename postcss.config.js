module.exports = () => ({
  plugins: [
    require('postcss-import')(),
    require('postcss-nested')(),
    require('postcss-flexbugs-fixes')(),
    require('autoprefixer')(),
    require('postcss-custom-properties')(),
    require('postcss-normalize')()
  ],
  sourceMap: true
});
