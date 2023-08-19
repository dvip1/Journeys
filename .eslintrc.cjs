module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: "@babel/eslint-parser",
  plugins: [
    'react-refresh',
    "prismjs",
    {
      languages: ["javascript", "css", "markup"],
      plugins: ["line-numbers"],
      theme: "okaidia",
      css: true,
    },

  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
