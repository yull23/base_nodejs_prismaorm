module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		'node': true,
	},
	'extends': ['standard-with-typescript', 'eslint-config-prettier'],
	'overrides': [
		{
			'env': {
				'node': true,
			},
			'files': ['.eslintrc.{js,cjs}'],
			'parserOptions': {
				'sourceType': 'script',
			},
		},
	],
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module',
		// project: './tsconfig.json'
	},
	'rules': {
		'eqeqeq': ['error', 'always'],
		'no-empty-function': 'error',
		'no-implicit-coercion': 'error',
		'@typescript-eslint/no-explicit-any': 'error',
		'@typescript-eslint/no-duplicate-enum-values': 'error',
		'@typescript-eslint/no-inferrable-types': 'off',
	},
	'ignorePatterns': [
		'node_modules/',
		'**/node_modules/',
		'/**/node_modules/*',
		'out/',
		'dist/',
		'build/',
	],
}
