module.exports = {
  extends: [
    '../../.eslintrc.cjs',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: `${__dirname}/tsconfig.json`,
    extraFileExtensions: ['.vue'],
  },
  // include: [
  //   '**/*.vue',
  //   '**/*.ts',
  //   '**/*.cjs',
  //   '.eslintrc.cjs',
  // ],
};
