module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  plugins: ['import', 'react', 'react-hooks', 'jsx-a11y'],
  env: {node: true, es6: true},
  parser: require.resolve('babel-eslint'),

  settings: {
    react: {
      version: 'detect',
    },
    'import/parser': 'babel-eslint',
    'import/resolver': {
      'babel-module': {alias: {'^@root/(.+)': './src/\\1'}},
    },
  },

  overrides: [
    {
      files: [
        '**/__tests__/**/*.js',
        '**/__mocks__/**/*.js',
        '*.spec.js',
        '*.test.js',
      ],
      rules: {
        '@wayfair/wf-rules/react-translate-text': 'off',
      },
    },
    {
      files: ['**/__tests__/**/*.test.js'],
      env: {
        jest: true,
      },
      plugins: ['jest'],
      rules: {
        // Test Overrides
        'jest/no-focused-tests': 'error',
        'jest/valid-expect-in-promise': 'error',
        'jest/expect-expect': 'error',
        'jest/valid-expect': 'error',
        'no-console': ['warn', {allow: ['warn', 'error']}],
      },
    },
  ],

  rules: {
    // Possible code errors
    'no-empty': 'warn',
    'no-extra-boolean-cast': 'warn',
    'no-unexpected-multiline': 'off',
    'no-unreachable': 'warn',
    'no-console': 'error',

    // Best practices
    'no-fallthrough': 'warn',
    'no-octal': 'warn',
    'no-self-assign': 'warn',
    'no-with': 'warn',
    curly: 'error',
    'no-eval': 'error',
    'no-implied-eval': 'error',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-new-func': 'error',
    'no-self-compare': 'error',
    radix: 'error',
    eqeqeq: ['error', 'allow-null'],
    'array-callback-return': 'warn',
    'consistent-return': 'warn',
    'dot-notation': 'warn',
    'no-caller': 'warn',
    'no-extra-bind': 'warn',
    'no-new-wrappers': 'warn',
    'no-octal-escape': 'warn',
    'no-param-reassign': ['warn', {props: false}],
    'no-proto': 'warn',
    'no-script-url': 'warn',
    'no-unused-expressions': ['warn', {allowTernary: true}],
    'no-useless-call': 'warn',
    'no-useless-concat': 'warn',
    'no-void': 'warn',

    // Variables
    'no-unused-vars': [
      'error',
      {
        vars: 'local',
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],
    'no-label-var': 'error',
    'no-undef-init': 'error',
    'no-catch-shadow': 'error',
    'no-use-before-define': ['error', {functions: false, variables: false}],
    'no-undefined': 'warn',

    // Stylistic issues
    camelcase: ['error', {properties: 'never'}],
    'max-params': 'warn',
    'no-lonely-if': 'warn',
    'no-nested-ternary': 'warn',
    'no-new-object': 'warn',
    'no-unneeded-ternary': 'warn',
    'spaced-comment': ['warn', 'always'],
    'max-nested-callbacks': ['warn', 5],
    'new-cap': ['warn', {capIsNewExceptions: ['Deferred', 'DataTable']}],

    // ES6 Specific Rules
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-var': 'warn',
    'object-shorthand': ['warn', 'always', {avoidExplicitReturnArrows: true}],
    'prefer-arrow-callback': 'warn',
    'prefer-const': [
      'warn',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true,
      },
    ],
    'prefer-rest-params': 'warn',

    // Imports Plugin Overrides
    'import/no-unresolved': 'error',
    'import/no-namespace': 'error',
    'import/first': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-named-default': 'error',
    'import/no-anonymous-default-export': 'error',
    'import/newline-after-import': 'warn',
    'import/no-deprecated': 'warn',
    'import/named': 'error',
    'import/no-useless-path-segments': 'warn',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: true,
        peerDependencies: true,
      },
    ],

    // React
    'react/no-danger-with-children': 'off',
    'react/jsx-no-bind': [
      'error',
      {ignoreRefs: true, allowArrowFunctions: true},
    ],
    'react/jsx-pascal-case': 'error',
    'react/no-array-index-key': 'error',
    'react/prefer-es6-class': ['error', 'always'],
    'react/prefer-stateless-function': ['error', {ignorePureComponents: true}],
    'react/self-closing-comp': 'error',
    'react/sort-comp': 'error',
    'react/forbid-component-props': ['error', {forbid: ['style']}],
    'react/forbid-prop-types': ['error', {forbid: ['any']}],
    'react/jsx-boolean-value': ['error', 'never'],
    'react/no-unsafe': ['warn', {checkAliases: true}],
    'react/require-default-props': 'warn',

    // React Hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',

    // Accessibility
    'jsx-a11y/anchor-has-content': 'warn',
    'jsx-a11y/media-has-caption': 'warn',
    'jsx-a11y/no-autofocus': 'warn',
    'jsx-a11y/no-onchange': 'warn',
    'jsx-a11y/no-static-element-interactions': 'warn',
    'jsx-a11y/label-has-for': ['error', {required: {some: ['nesting', 'id']}}],
  },
};
