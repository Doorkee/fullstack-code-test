module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'import',
    'react-hooks',
    'jest'
  ],
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended'
  ],
  parserOptions: {
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true
    }
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      'typescript': {
        'directory': './tsconfig.json'
      }
    }
  },
  env: {
    'browser': true,
    'node': true,
    'jest': true
  },
  rules: {
    '@typescript-eslint/no-angle-bracket-type-assertion': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/no-unused-vars': 2,
    'jsx-quotes': ['error', 'prefer-single'],
    'operator-linebreak': [
      'error',
      'before',
      { 'overrides': {
        '&&': 'after',
        '||': 'after'
        }
      }
    ],
    'import/prefer-default-export': [
      'off'
    ],
    'no-underscore-dangle': [
      'off'
    ],
    'react/jsx-filename-extension': [
      0,
      { 'extensions': ['.ts, .tsx'] }
    ],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        'components': [
          'Link'
        ],
        'specialLink': [
          'to',
          'hrefLeft',
          'hrefRight'
        ],
        'aspects': [
          'noHref',
          'invalidHref',
          'preferButton'
        ]
      }
    ],
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        'required': {
          'some': [
            'nesting',
            'id'
          ]
        }
      }
    ],
    'jsx-a11y/label-has-for': [
      'error',
      {
        'required': {
          'some': [
            'nesting',
            'id'
          ]
        }
      }
    ],
    'jsx-a11y/no-autofocus': [ 0, {
      'ignoreNonDOM': true
    }],
    'max-len': ['error', {
      'code': 100,
      'ignoreUrls': true,
      'ignoreComments': true,
      'ignoreStrings': true,
      'ignorePattern': '<p[^>]*>.*?</p>'
    }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-multiple-empty-lines': [
      'error',
      { 'max': 1, 'maxEOF': 1 }
    ],
    'react/jsx-one-expression-per-line': [2, { 'allow': 'single-child' }],
    'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
    'import/no-extraneous-dependencies': [
      'error',
      {
        'devDependencies': true,
        'optionalDependencies': false,
        'peerDependencies': false
      }
    ]
  }
}
