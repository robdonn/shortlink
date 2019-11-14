module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  plugins: ['prettier'],
  parser: 'babel-eslint',
  rules: {
    semi: 2,
    curly: 2,
    eqeqeq: 2,
    'spaced-comment': 2,
    'space-infix-ops': 2,
    'newline-before-return': 2,
    'linebreak-style': [2, 'unix'],
    camelcase: [2, { properties: 'never' }],
    quotes: [2, 'single', { allowTemplateLiterals: true }],
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/no-unescaped-entities': 0
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
