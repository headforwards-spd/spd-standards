module.exports = {
  extends: ["eslint:recommended", "prettier"],
  plugins: ['prettier'],
  rules: {
    "prettier/prettier": "error",
    "block-scoped-var": "error",
    eqeqeq: "error",
    "no-var": "error",
    "prefer-const": "error",
    "eol-last": "error",
    "prefer-arrow-callback": "error",
    "no-trailing-spaces": "error",
    quotes: ["warn", "single", { avoidEscape: true }],
    "no-restricted-properties": [
      "error",
      {
        object: "describe",
        property: "only",
      },
      {
        object: "it",
        property: "only",
      },
    ],
  },
};
