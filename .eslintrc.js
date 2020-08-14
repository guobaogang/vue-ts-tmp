// eslint-disable-next-line no-undef
module.exports = {
    "env": {
        "browser": true,
        "es2020": true
    },
    "parser": "vue-eslint-parser",
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential",
        "plugin:@typescript-eslint/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": 2017,
        "parser": "babel-eslint",
        "sourceType": "module"
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "rules": {
        "no-console": 2
    }
};
