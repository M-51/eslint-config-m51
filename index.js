module.exports = {
    env: { browser: true, es2022: true, node: true },
    extends: ['eslint-config-airbnb-base'].map(require.resolve),
    parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module'
    },
    rules: {
        indent: ['error', 4],
        'max-len': ['error', { code: 150, ignoreStrings: true, ignoreTemplateLiterals: true, ignoreComments: true }],
        'no-restricted-syntax': ['off', 'ForOfStatement'],
        'import/no-extraneous-dependencies': ['off'],
        'import/extensions': ["error", "always", { ignorePackages: true }],
        'lines-between-class-members': ['error', 'always', { 'exceptAfterSingleLine': true }],
        'no-await-in-loop': 'off',
        'object-curly-newline': ['error', {
            ObjectExpression: { minProperties: 6, multiline: true, consistent: true },
            ObjectPattern: { minProperties: 6, multiline: true, consistent: true },
            ImportDeclaration: { minProperties: 6, multiline: true, consistent: true },
            ExportDeclaration: { minProperties: 6, multiline: true, consistent: true },
        }],
        "import/prefer-default-export": ["off"],
        "import/no-default-export": ["error"],
        "no-param-reassign": ["error", { "props": false }]
    },
    ignorePatterns: [
        'dist/**/*',
        'build/**/*',
        'temp/**/*'
    ],
    overrides: [
        {
            files: ['**/*.ts'],
            env: { browser: true, es2022: true, node: true },
            extends: ['eslint-config-airbnb-typescript/base'].map(require.resolve),
            parser: '@typescript-eslint/parser',
            parserOptions: {
                ecmaVersion: 2022,
                sourceType: 'module',
                project: './tsconfig.json'
            },
            rules: {
                '@typescript-eslint/indent': ['error', 4],
                '@typescript-eslint/type-annotation-spacing': ['error', { overrides: { returnType : { before : true, after : true }}}],
                '@typescript-eslint/consistent-type-imports': ['error'],
                "@typescript-eslint/consistent-type-exports": ["error"],
                '@typescript-eslint/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }]
            }
        }
    ]
}
