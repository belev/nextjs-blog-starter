module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:@typescript-eslint/recommended', 'next', 'next/core-web-vitals', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/no-duplicate-imports': ['error'],
    'arrow-body-style': ['error', 'as-needed']
  }
};
