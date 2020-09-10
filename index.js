module.exports = {
  extends: [
    'standard-with-typescript',
    'standard-jsx'
  ],
  parserOptions: {
    project: './tsconfig.json'
  },
  overrides: [{
    files: ['*.ts', '*.tsx'],
    parser: '@typescript-eslint/parser',
    rules: {
      '@typescript-eslint/camelcase': 0,
      '@typescript-eslint/explicit-function-return-type': 0,
      '@typescript-eslint/no-floating-promises': 0,
      '@typescript-eslint/no-misused-promises': 0,
      '@typescript-eslint/no-unused-expressions': 0,
      '@typescript-eslint/no-unused-vars': [1, {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^(createElement|h)$|^_'
      }],
      '@typescript-eslint/no-var-requires': 0,
      '@typescript-eslint/prefer-ts-expect-error': 0,
      '@typescript-eslint/promise-function-async': 0,
      '@typescript-eslint/restrict-plus-operands': 0,
      '@typescript-eslint/restrict-template-expressions': 0,
      '@typescript-eslint/strict-boolean-expressions': 0,
      'arrow-parens': [1, 'as-needed'],
      'func-style': [1, 'declaration', {
        allowArrowFunctions: true
      }],
      'no-unused-vars': 0,
      'no-var': 1,
      'react/jsx-closing-bracket-location': 0,
      'react/jsx-closing-tag-location': 0,
      'react/jsx-fragments': 0,
      'sort-imports': 0
    }
  }]
}
