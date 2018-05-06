module.exports = {
  // full config on https://github.com/marionebl/commitlint/blob/master/@commitlint/config-conventional/index.js
  // All rules on https://github.com/marionebl/commitlint/blob/master/docs/reference-rules.md
  rules: {
    'body-leading-blank': [1, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 72],
    'header-min-length': [2, 'always', 8]
  }
};
