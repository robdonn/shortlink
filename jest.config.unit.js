module.exports = {
  testMatch: ['**/__tests__/*.unit.test.js?(x)'],
  roots: [__dirname],
  rootDir: __dirname,
  transform: {
    '^.+\\.(js|jsx|mjs)$': require.resolve('babel-jest')
  },
  testPathIgnorePatterns: ['/node_modules/', '/config/', '/coverage/', '/\\.vscode', '/\\.*.js'],
  setupFiles: [require.resolve('./config/jest/setupEnvironment')]
};
