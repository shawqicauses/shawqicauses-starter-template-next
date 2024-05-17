// DONE REVIEWING: GITHUB COMMIT
module.exports = {
  extends: [
    "next",
    "next/core-web-vitals",
    "airbnb",
    "airbnb/hooks",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  plugins: ["react", "@typescript-eslint"],
  parserOptions: {ecmaVersion: 2021, sourceModule: "module"},
  rules: {}
}
