module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:vue/vue3-recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  ignorePatterns: [
    'components.d.ts',
  ],
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    semi: ['error', 'always'],
    '@typescript-eslint/indent': ['warn', 2],
  },
};
