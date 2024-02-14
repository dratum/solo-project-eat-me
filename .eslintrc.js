module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'airbnb-base'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-console': 0,
    'react/prop-types': 0,
    'react/jsx-one-expression-per-line': 0,
    'linebreak-style': 0,
    'comma-dangle': ['error', 'only-multiline'],
    'no-unused-vars': 0,
    'import/extensions': 0,
  },
};
