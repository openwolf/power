module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module",
	    "ecmaFeatures":{
		    "impliedStrict": true
	    }
    },
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        // disable
        "init-declarations": "off",
        "no-console": "off",
        "no-inline-comments": "off",
        "no-mixed-spaces-and-tabs": "off"
    }
};