const pluginVue = require('eslint-plugin-vue')
const vueParser = require('vue-eslint-parser')
const babelParser = require('@babel/eslint-parser')
const globals = require('globals')

module.exports = [
  ...pluginVue.configs['flat/vue2-recommended'],
  {
    files: ['**/*.js', '**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: babelParser,
        ecmaVersion: 2017,
        sourceType: 'module',
        // 关键新增这一行！
        requireConfigFile: false
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        $: 'writable',
        axios: 'writable',
        Vue: 'writable'
      }
    },
    rules: {
      "no-unused-vars": [2,{"args":"none"}],
      "strict": "off",
      "valid-jsdoc": "off",
      "jsdoc/require-param-description": "off",
      "jsdoc/require-param-type": "off",
      "jsdoc/check-param-names": "off",
      "jsdoc/require-param": "off",
      "jsdoc/check-tag-names": "off",
      "linebreak-style": "off",
      "array-bracket-spacing": "off",
      "prefer-promise-reject-errors": "off",
      "comma-dangle": "off",
      "newline-per-chained-call": "off",
      "no-loop-func": "off",
      "no-empty": "off",
      "no-else-return": "off",
      "no-unneeded-ternary": "off",
      "no-eval": "off",
      "prefer-destructuring": "off",
      "no-param-reassign": "off",
      "max-len": "off",
      "no-restricted-syntax": "off",
      "no-plusplus": "off",
      "no-useless-escape": "off",
      "no-nested-ternary": "off",
      "radix": "off",
      "arrow-body-style": "off",
      "arrow-parens": "off",
      "vue/multi-word-component-names": "off",
      "vue/valid-v-for": "off",
      "vue/no-multiple-template-root": "off"
    }
  }
]
