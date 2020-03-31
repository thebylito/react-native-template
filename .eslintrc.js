module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        singleQuote: true
      }
    ],
    'comma-dangle': 0
  }
};
