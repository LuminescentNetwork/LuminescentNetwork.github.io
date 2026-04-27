/** @type {import("stylelint").Config} */
module.exports = {
  defaultSeverity: "warning",
  extends: ["stylelint-config-standard"],
  customSyntax: "postcss-html",
  rules: {
    "declaration-block-no-duplicate-properties": true,
    "declaration-block-no-shorthand-property-overrides": true,
    "no-descending-specificity": true,
    "selector-max-specificity": ["0,3,0"],
    "selector-no-qualifying-type": true,
    "property-no-vendor-prefix": true,
    "value-no-vendor-prefix": true,
    "font-family-no-missing-generic-family-keyword": true,
    "color-function-alias-notation": "without-alpha",
    "color-function-notation": "legacy",
  },
};

//npm i -D stylelint stylelint-config-standard postcss-html