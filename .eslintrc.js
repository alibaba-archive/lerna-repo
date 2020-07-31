const { eslint, tslint, deepmerge } = require('@ice/spec');

const commonRules = {};

const jsRules = deepmerge(eslint, {
  rules: {
    ...commonRules,
  },
});

const tsRules = deepmerge(tslint, {
  rules: {
    ...commonRules,
  },
});

delete tsRules.root;

module.exports = {
  ...jsRules,
  overrides: [
    {
      ...tsRules,
      files: ['**/*.ts', '**/*.tsx'],
    },
  ],
  env: {
    "jest": true
  }
};
