module.exports = {
  extends: [
    'airbnb',
  ],
  plugins: [
    'import',
  ],
  env: {
    node: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    emcaFeatures: {
      'jsx': true
    },
  },
  rules: {
    strict: 0,
    'import/prefer-default-export': 0,
    'no-param-reassign': [2, { props: false }],
    'jsx-quotes': ['error', 'prefer-single'],
    'react/require-default-props': 0,
  },
};
