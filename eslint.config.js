const { defineConfig } = require('eslint/config')

const tsParser = require('@typescript-eslint/parser')
const globals = require('globals')
const typescriptEslintEslintPlugin = require('@typescript-eslint/eslint-plugin')
const simpleImportSort = require('eslint-plugin-simple-import-sort')
const _import = require('eslint-plugin-import')
const unicorn = require('eslint-plugin-unicorn')

const { fixupPluginRules } = require('@eslint/compat')

const js = require('@eslint/js')

const { FlatCompat } = require('@eslint/eslintrc')

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

module.exports = defineConfig([
  {
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 10,
      sourceType: 'module',
      parserOptions: {},

      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },

    settings: {
      'import/resolver': {
        node: {
          extensions: ['.ts', '.tsx'],
        },
      },
    },

    plugins: {
      '@typescript-eslint': typescriptEslintEslintPlugin,
      'simple-import-sort': simpleImportSort,
      import: fixupPluginRules(_import),
      unicorn,
    },

    extends: compat.extends(
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
      'plugin:prettier/recommended',
    ),

    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
      camelcase: 'error',
      'arrow-parens': ['error', 'as-needed'],

      // "unicorn/numeric-separators-style": ["error", {
      //     number: {
      //         minimumDigits: 0,
      //         groupLength: 3,
      //     },
      // }],
    },
  },
])
