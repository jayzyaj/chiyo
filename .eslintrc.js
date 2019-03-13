module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": "airbnb",
    "parser": "babel-eslint",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/jsx-filename-extension": "off",
        "react/prefer-stateless-function": [0, { "ignorePureComponents": false }],
        "quotes": [0, "double", { "avoidEscape": true }],
        "no-underscore-dangle":  ["error", { "allow": ["_navigator"] }],
        "arrow-parens": ["error", "as-needed"],
        "import/no-unresolved": 2
    }
};