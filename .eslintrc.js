module.exports = {
  env: {
    browser: true,
    'cypress/globals': true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'eslint-plugin-cypress',
  ],
  rules: {
  },
};
