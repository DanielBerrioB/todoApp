module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "no-console": "warn",
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "react/jsx-filename-extension": "off",
    "no-undef": "off",
    "linebreak-style": "off",
    "import/prefer-default-export": "off",
  },
};