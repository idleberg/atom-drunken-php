/* eslint-disable */
module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:json/recommended'
  ],
  globals: {
    atom: "readonly"
  },
  plugins: [
    "prettier"
  ],
  rules: {},
  ignorePatterns: [
    'bower_components',
    'lib',
    'node_modules'
  ]
};
