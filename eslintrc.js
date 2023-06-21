module.exports = {
    root: true,
    env: {
      node: true,
      // https://eslint.vuejs.org/user-guide/#compiler-macros-such-as-defineprops-and-defineemits-generate-no-undef-warnings
      'vue/setup-compiler-macros': true,
    },
    extends: [
      'eslint:recommended',
      'plugin:vue/vue3-recommended',
      '@vue/typescript/recommended',
      '@vue/prettier',
      '@vue/prettier/@typescript-eslint',
      'prettier',
    ],
    parserOptions: {
      ecmaVersion: 2020,
    },
    rules: {
      'no-console': ['warn', { allow: ['error'] }],
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      // https://eslint.vuejs.org/rules/block-tag-newline.html
      'vue/block-tag-newline': ['error', { singleline: 'never', multiline: 'always' }],
      // https://eslint.vuejs.org/rules/component-options-name-casing.html
      'vue/component-options-name-casing': ['error', 'PascalCase'],
      // https://eslint.vuejs.org/rules/component-tags-order.html
      'vue/component-tags-order': ['error', { order: ['script', 'template', 'style'] }],
      // https://eslint.vuejs.org/rules/multi-word-component-names.html
      'vue/multi-word-component-names': 0,
      // https://eslint.vuejs.org/rules/padding-line-between-blocks.html
      'vue/padding-line-between-blocks': ['error', 'always'],
    },
    // overrides: [
    //   {
    //     files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
    //     env: {
    //       jest: true,
    //     },
    //   },
    // ],
  };
  