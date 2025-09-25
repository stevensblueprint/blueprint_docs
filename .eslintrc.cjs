/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = {
  root: true,
  env: { browser: true, es2022: true, node: true },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  settings: {
    react: { version: 'detect' },
  },
  plugins: ['react', 'react-hooks', 'import', '@typescript-eslint', 'mdx'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:mdx/recommended',
    'prettier',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/order': ['warn', { 'newlines-between': 'always' }],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
  },

  overrides: [
    {
      files: ['**/*.mdx'],
      extends: ['plugin:mdx/recommended'],
      parser: 'eslint-mdx',
      settings: {
        'mdx/code-blocks': true,
      },
      rules: {
        'mdx/no-jsx-html-comments': 'off',
      },
    },
    {
      files: ['**/*.md'],
      processor: 'mdx/markdown',
    },
    {
      files: ['**/*.{ts,tsx}'],
      rules: {},
    },
  ],

  ignorePatterns: ['build/', '.docusaurus/', 'node_modules/', 'dist/', '.cache/', '*.min.js'],
};
