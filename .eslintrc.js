module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    "prettier/prettier": [
      "error",
      {
        trailingComma: "es5",
        singleQuote: true,
        printWidth: 100
      }
    ],
    "comma-dangle": 0,
  }
};
