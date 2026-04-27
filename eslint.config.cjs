/** @type {import("eslint").FlatConfig[]} */
const stylistic = require("@stylistic/eslint-plugin")
const html = require("eslint-plugin-html")
const globalsLib = require("globals")

const globals = {
    ...globalsLib.browser
}

const baseRules = {
    "no-extra-parens": ["warn", "all"],
    "no-undef": "warn",
    "no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
    curly: "warn",
    quotes: ["warn", "double"],
    "no-dupe-keys": "warn",
    "consistent-return": "warn",
    "no-else-return": "warn",
    "no-unneeded-ternary": "warn",
    "no-duplicate-imports": "warn",
    semi: ["warn", "never"],
    "no-throw-literal": "warn",
    "no-unsafe-negation": "warn",
    "prefer-spread": "warn",
    "no-new-func": "warn",
    "array-callback-return": "warn",
    "prefer-const": "warn",
    "no-var": "warn",
    "no-return-await": "warn",
    "no-duplicate-case": "warn",
    "prefer-template": "warn",
    "@stylistic/brace-style": ["warn", "stroustrup", { allowSingleLine: false }],
    eqeqeq: ["warn", "always"],
    "no-use-before-define": ["warn", { functions: false, classes: true, variables: false }],
    "no-restricted-syntax": [
        "warn",
        {
            selector: "CallExpression[callee.property.name='forEach']",
            message: "Avoid using forEach loops; consider a for/of or for loop instead."
        }
    ],
    "no-const-assign": "warn",

    "no-implicit-globals": "warn",
    "no-global-assign": "warn",
    "no-unsafe-finally": "warn",
    "no-fallthrough": "warn",
    "no-self-compare": "warn",
    "require-atomic-updates": "warn",
    "no-useless-return": "warn",
    "no-unreachable": "warn",
}

const sharedPlugins = {
    "@stylistic": stylistic
}

module.exports = [
    {
        files: ["**/*.js"],
        plugins: sharedPlugins,
        languageOptions: {
            globals: globals,
            ecmaVersion: 2022,
            sourceType: "module"
        },
        rules: baseRules
    },
    {
        files: ["**/*.html"],
        plugins: {
            ...sharedPlugins,
            html
        },
        languageOptions: {
            globals: globals,
            ecmaVersion: 2022,
            sourceType: "module"
        },
        rules: baseRules
    }
]
//npm install --save-dev eslint @stylistic/eslint-plugin eslint-plugin-html globals