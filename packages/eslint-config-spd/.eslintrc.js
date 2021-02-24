module.exports = {
  extends: ['@headforwards-spd/spd-gts', 'plugin:sonarjs/recommended'],
  plugins: ['sonarjs', 'simple-import-sort', 'filenames', 'import'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'sonarjs/cognitive-complexity': 'warn',
    'prettier/prettier': ['error', { singleQuote: true }],
    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: true },
    ],
  },
  overrides: [
    {
      files: ['src/**/*.{j,t}s'],
      rules: {
        'import/prefer-default-export': 'error',
        'import/first': 'error',
        'import/newline-after-import': 'error',
        'filenames/match-exported': [
          2,
          'kebab',
          '\\.(local|staging|production|test|preview)$',
        ],
      },
    },
  ],
};
