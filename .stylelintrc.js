module.exports = {
    extends: [
      'stylelint-config-standard-scss',
      'stylelint-config-recommended-vue',
    ],
    rules: {
      'at-rule-no-unknown': [
        true,
        { 'ignoreAtRules': ['use', 'extend'] },
      ]
    },
}