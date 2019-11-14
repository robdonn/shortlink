const common = require('./jest.config.common');

module.exports = {
  ...common,
  testMatch: ['**/__tests__/*.unit.test.js?(x)']
};
