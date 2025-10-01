import { fixupPluginRules } from '@eslint/compat'
import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import typescriptEslintEslintPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import { defineConfig } from 'eslint/config'
import _import from 'eslint-plugin-import'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import unicorn from 'eslint-plugin-unicorn'
import globals from 'globals'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default defineConfig([
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
