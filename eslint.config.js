import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import eslintPluginImport from 'eslint-plugin-import';

export default [
  {
    ignores: ['dist', '**/*.d.ts', '.eslintrc.cjs', 'vite.config.ts'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        sourceType: 'module',
        project: './tsconfig.eslint.json', // Указываем специальный tsconfig для ESLint
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'import': eslintPluginImport,
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.eslint.json',
        },
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
    rules: {
      // Стилевые правила
      'quotes': ['error', 'single', { avoidEscape: true }],
      'semi': ['error', 'always'],
      'indent': ['error', 2, { SwitchCase: 1 }],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      
      // React правила
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      
      // Импорты
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
            'object',
            'type'
          ],
          pathGroups: [
            {
              pattern: '@/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@mui/**',
              group: 'external',
              position: 'before',
            },
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          warnOnUnassignedImports: true,
        },
      ],
      'import/no-unresolved': 'error',
      
      // Дополнительные правила
      'comma-dangle': ['error', 'only-multiline'],
      'no-trailing-spaces': 'error',
      'eol-last': ['error', 'always'],
      'max-len': ['warn', { code: 120, ignoreUrls: true }],
    },
  },
];