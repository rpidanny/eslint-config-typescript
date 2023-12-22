module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 10,
    sourceType: 'module',
  },
  env: {
    node: true,
    jest: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx'],
      },
    },
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'simple-import-sort', 'import', 'unicorn'],
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    camelcase: 'error',
    'arrow-parens': ['error', 'as-needed'],
    'unicorn/numeric-separators-style': ['error', { number: { minimumDigits: 0, groupLength: 3 } }],
  },
}
