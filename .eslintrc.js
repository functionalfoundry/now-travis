module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ['standard', 'prettier'],
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': ['error', 'unix'],
    semi: ['error', 'never'],
  },
}
