const common = require('./jest.config.common');

module.exports = {
  ...common,
  testMatch: ['**/__tests__/*.visual.test.js?(x)'],
  setupFilesAfterEnv: [require.resolve('./setupEnvironmentVisual')]
};
