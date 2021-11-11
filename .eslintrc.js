module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
    // es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'default-param-last': 'off',
    'react/prop-types': 'off',
    'react/button-has-type': 'off',
    'react/jsx-filename-extension': 'off',
    'react/destructuring-assignment': 'off',
    'react/function-component-definition': [
      2,
      { namedComponents: 'function-declaration' },
    ],
  },
};
