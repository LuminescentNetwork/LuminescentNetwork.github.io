/** @type {import("stylelint").Config} */
module.exports = {
  defaultSeverity: "warning",
  extends: [
    "stylelint-config-standard",
    "stylelint-config-html"
  ],
  overrides: [
    {
      files: ["**/*.html"],
      customSyntax: "postcss-html"
    }
  ],
  rules: {
    "declaration-block-no-duplicate-properties": [true, { ignore: [] }],
    "declaration-block-no-shorthand-property-overrides": true,
    "no-descending-specificity": true,
    "selector-no-qualifying-type": true,
    "property-no-vendor-prefix": true,
    "value-no-vendor-prefix": true,
    "font-family-no-missing-generic-family-keyword": true,
    "color-function-alias-notation": "without-alpha",
    "color-function-notation": "legacy"
  }
};

//npm i -D stylelint stylelint-config-standard stylelint-config-html