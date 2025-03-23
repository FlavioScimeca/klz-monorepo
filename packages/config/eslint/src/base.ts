import * as eslintJs from '@eslint/js';
import * as tseslint from '@typescript-eslint/eslint-plugin';
import { Linter } from 'eslint';
import * as prettierConfig from 'eslint-config-prettier';
import * as reactPlugin from 'eslint-plugin-react';
import * as reactHooksPlugin from 'eslint-plugin-react-hooks';

const config: Linter.Config = {
  name: 'base-config',
  // Language options block for better organization
  languageOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
    globals: {
      // Common browser and Node.js globals
      window: false,
      document: false,
      process: false,
      console: false,
    },
  },
  // Linter options for better control
  linterOptions: {
    reportUnusedDisableDirectives: true,
    noInlineConfig: false,
  },
  // File patterns to include/exclude
  files: ['**/*.{ts,tsx,js,jsx}'],
  ignores: [
    '**/node_modules/**',
    '**/dist/**',
    '**/build/**',
    '**/.next/**',
    '**/coverage/**',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {},
    },
  },
  // Combine rules from all configurations
  rules: {
    ...eslintJs.configs.recommended.rules,
    ...tseslint.configs?.recommended?.rules,
    ...reactPlugin.configs?.recommended?.rules,
    ...reactHooksPlugin.configs?.recommended?.rules,
    ...prettierConfig.rules,

    // Our custom rules overrides
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
};

export default config;
