module.exports = {
    env: { browser: true, "es2020": true },
    extends: ["eslint-config-airbnb-base"].map(require.resolve),
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module"
    },
    rules: {
        indent: ["error", 4],
        "max-len": ["error", { code: 150, ignoreStrings: true, ignoreTemplateLiterals: true, ignoreComments: true }],
        "no-restricted-syntax": ["off", "ForOfStatement"],
        "import/no-extraneous-dependencies": ["error", {devDependencies: true}],
        "import/extensions": ["error", "ignorePackages"]
    },
    ignorePatterns: [
        "dist/**/*",
        "build/**/*",
        "temp/**/*"
    ],
    overrides: [
        {
            files: ["**/*.ts"],
            env: { browser: true, es2020: true },
            extends: ["eslint-config-airbnb-typescript/base"].map(require.resolve),
            parser: "@typescript-eslint/parser",
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: "module",
                project: "./tsconfig.json"
            },
            rules: {
                "@typescript-eslint/indent": ["error", 4],
                "@typescript-eslint/type-annotation-spacing": ["error", { overrides: { returnType : { before : true, after : true }}}],
                "@typescript-eslint/consistent-type-imports": ["error"]
            }
        }
    ]
}