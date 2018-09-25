module.exports = {
	"env": {
	  "browser": true,
	  "node": true,
	  "commonjs": true,
	  "es6": true
	},
	"parserOptions": {
	   "parser": "babel-eslint",
	   "sourceType": "module",
	   "ecmaVersion": 8,
	},
	"extends": [
		"eslint:recommended",
		"plugin:vue/recommended"
	],
	"rules": {
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"single"
		],
		"semi": [
			"error",
			"always"
		],
		"no-console": "off"
	},
	"globals":{
		"Vue":true
	}
};