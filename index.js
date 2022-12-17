module.exports = {
    env: { browser: true, es2022: true, node: true },
    extends: ["eslint-config-airbnb-base"].map(require.resolve),
    parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module"
    },
    rules: {
        indent: ["error", 4],
        "max-len": ["error", { code: 150, ignoreStrings: true, ignoreTemplateLiterals: true, ignoreComments: true }],
        "no-restricted-syntax": ["off", "ForOfStatement"],
        "import/no-extraneous-dependencies": ["error", {devDependencies: true}],
        "import/extensions": ["error", "ignorePackages"],
        "lines-between-class-members": ["error", "always", { "exceptAfterSingleLine": true }],
        "object-curly-newline": ["error", { "minProperties": 7 }]
    },
    ignorePatterns: [
        "dist/**/*",
        "build/**/*",
        "temp/**/*"
    ],
    overrides: [
        {
            files: ["**/*.ts"],
            env: { browser: true, es2022: true, node: true },
            extends: ["eslint-config-airbnb-typescript/base"].map(require.resolve),
            parser: "@typescript-eslint/parser",
            parserOptions: {
                ecmaVersion: 2022,
                sourceType: "module",
                project: "./tsconfig.json"
            },
            rules: {
                "@typescript-eslint/indent": ["error", 4],
                "@typescript-eslint/type-annotation-spacing": ["error", { overrides: { returnType : { before : true, after : true }}}],
                "@typescript-eslint/consistent-type-imports": ["error"],
                "@typescript-eslint/lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }]
            }
        }
    ]
}