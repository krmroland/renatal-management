module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  globals: {},
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': [0, { extensions: ['.js', '.jsx'] }],
    'array-callback-return': 0,
    'no-shadow': 0,
    'arrow-parens': 0,
    'arrow-body-style': 0,
    'func-names': 0,
    'prefer-arrow-callback': 0,
    'consistent-return': 0,
    'space-before-function-paren': 0,
    'import/prefer-default-export': 0,
    'no-console': 0,
    'object-curly-newline': 0,
    'no-unused-expressions': 0,
    'react/no-unescaped-entities': 0,
    'react/prop-types': 0 /* to be removed later */,
    'react/no-unescaped-entities': 0,
    'react/jsx-curly-newline': 0,
    'react/static-property-placement': 0,
    'react/display-name': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-fragments': 0,
    'react/destructuring-assignment': 0,
  },
  settings: {
    'import/extensions': ['.js', '.jsx'],
    'import/resolver': {
      alias: {
        map: [['@@', './src']],
        extensions: ['.ts', '.js', '.jsx', '.json'],
      },
    },
  },
};
