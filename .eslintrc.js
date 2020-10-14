module.exports = {
  extends: ["plugin:react/recommended", "airbnb"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "no-console": "off",
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "react/jsx-filename-extension": "off",
    "no-undef": "off",
    "linebreak-style": "off",
    "import/prefer-default-export": "off",
  },
};
