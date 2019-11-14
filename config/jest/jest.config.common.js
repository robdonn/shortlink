const { paths } = require('../paths');

module.exports = {
  roots: [paths.root],
  rootDir: paths.root,
  transform: {
    '^.+\\.(js|jsx|mjs)$': require.resolve('babel-jest')
  },
  testPathIgnorePatterns: ['/node_modules/', '/config/', '/coverage/', '/\\.vscode', '/\\.*.js'],
  setupFiles: [require.resolve('./setupEnvironment')]
};
