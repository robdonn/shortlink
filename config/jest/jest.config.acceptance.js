const common = require('./jest.config.common');

module.exports = {
  ...common,
  testMatch: ['**/__tests__/*.acceptance.test.js?(x)'],
  transform: {
    ...common.transform,
    '^.+\\.(css|scss)$': require.resolve('./cssTransform.js')
  }
};
