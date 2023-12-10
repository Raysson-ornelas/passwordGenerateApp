module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },

  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],

  overrides: [{ files: ['*.ts', '*.tsx'] }],

  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  plugins: ['react', '@typescript-eslint', 'import-helpers', 'prettier'],

  rules: {
    indent: [
      'error',
      2,
      { SwitchCase: 1, ignoredNodes: ['ConditionalExpression'] },
    ],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'react/react-in-jsx-scope': 'off',

    // typescript-eslint
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-shadow': ['warn'],
    '@typescript-eslint/no-var-requires': 'off',

    'no-empty-function': 'off',
    'no-shadow': 'off',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'no-mixed-spaces-and-tabs': 'off',

    // eslint-plugin-react jsx-specific
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-pascal-case': 'warn',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',

    //eslint-plugin-react
    'react/no-array-index-key': 'warn',
    'react/no-children-prop': 'error',
    'react/self-closing-comp': 'warn',
    'prettier/prettier': ['warn', { endOfLine: 'auto' }],

    // //imports
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          ['/^react/', '/^redux/'],
          '/react-query/',
          '/@store/',
          '/@assets/',
          ['/@navigation/', '/@react-navigation/'],
          '/@screens/',
          '/@ui/',
          'module',
          ['parent', 'sibling', 'index'],
          '/types/',
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
};
