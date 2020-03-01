module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 7,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb",
    "prettier"
  ],
  rules: {
    semi: 1,
    "react/prop-types": 1,
    "react/jsx-max-props-per-line": 1,
    "linebreak-style": 0,
    "react/jsx-filename-extension": 0,
    "no-unused-vars":0,
    "import/extensions":0,
    "import/order":0,
    "import/prefer-default-export":0,
    "no-console":0,
    "react/prefer-stateless-function": 0,
    "react/forbid-prop-types": 0,
    "react/require-default-props": 0,
    "import/no-cycle":0,
    "import/no-extraneous-dependencies":0,
    
    // quotes: [0, 'single'],
    // 'prettier/prettier': ['error']
  },
  plugins : ['prettier']
};
