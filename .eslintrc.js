module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    // https://github.com/babel/babel-eslint/issues/681#issuecomment-420663038
    'template-curly-spacing': 'off',
    indent: 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/script-indent': 'off',
    'quotes': 'off',
    'space-before-function-paren': 'off',
    'semi': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'space-before-blocks': 'off',
    'keyword-spacing': 'off',
    'object-curly-spacing': 'off',
    'comma-dangle': 'off',
    'vue/html-indent': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/html-self-closing': 'off',
    'camelcase': 'off',
    'vue/valid-v-slot': 'off',
    'quote-props': 'off',
    //
    'no-unused-vars': 'warn',
    'prefer-promise-reject-errors': 'off',
    'node/handle-callback-err': 'off'
  }
}
