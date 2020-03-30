// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    "ecmaFeatures": {
      "jsx": true
    }
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended'
  ],
  // required to lint *.vue files
  plugins: [
    '@typescript-eslint',
    "react-hooks",
    'react'
  ],
  // add your custom rules here
  'rules': {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'react/display-name': 'off',
    "react/jsx-no-duplicate-props": "error",
    "react/no-direct-mutation-state": "error",
    "react/no-string-refs": "error",
    "react/jsx-tag-spacing": [
      "error",
      {
        "closingSlash": "never",
        "beforeSelfClosing": "always",
        "afterOpening": "never"
      }
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/indent": ['error', 2],
    '@typescript-eslint/interface-name-prefix': ['error', 'always'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    "@typescript-eslint/class-name-casing": "error",
    "@typescript-eslint/func-call-spacing": ["error", "never"],
    "@typescript-eslint/type-annotation-spacing": "error"
  }
}
