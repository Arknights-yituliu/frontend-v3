module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: ["prettier"],
  extends: ["plugin:vue/vue3-recommended", "eslint:recommended", "prettier"],
  rules: { "prettier/prettier": "warn" },
};
