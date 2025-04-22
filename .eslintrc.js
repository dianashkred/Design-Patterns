module.exports = {
    parser: '@typescript-eslint/parser',
    extends: ['airbnb-typescript/base'],
    parserOptions: {
      project: './tsconfig.json',
    },
    rules: {
      'no-console': 'off',
      'import/prefer-default-export': 'off',
      'class-methods-use-this': 'off',
    },
  };
  