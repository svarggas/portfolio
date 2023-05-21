module.exports = {
  env: { browser: true, es2020: true },
  ignorePatterns: ["**/*.svg", "**/*.png", "**/*.css", "**/*.pdf", "**/*.jpg"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  plugins: ["@typescript-eslint/eslint-plugin", "react-hooks"],
  rules: {
    "new-cap": 0,
    "require-jsdoc": 0,
    "quotes": ["error", "double"],
    "object-curly-spacing": ["error", "always"],
    "indent": [
      "error", 2, 
      { ignoredNodes: ["PropertyDefinition[decorators]", "TSUnionType"] }
    ],
    "react-hooks/exhaustive-deps": "warn",
  },
}
