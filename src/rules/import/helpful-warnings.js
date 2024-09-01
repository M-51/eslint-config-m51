const importHelpfulWarnings = Object.freeze({
    /**
     * Forbid any invalid exports, i.e. re-export of the same name.
     * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/export.md | import-x/export}
     */
    'import-x/export': 'error',

    /**
     * Forbid imported names marked with `@deprecated` documentation tag.
     * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-deprecated.md | import-x/no-deprecated}
     */
    'import-x/no-deprecated': 'warn',

    /**
     * Forbid empty named import blocks.
     * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-empty-named-blocks.md | import-x/no-empty-named-blocks}
     */
    'import-x/no-empty-named-blocks': 'error',

    /**
     * Forbid the use of extraneous packages.
     * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-extraneous-dependencies.md | import-x/no-extraneous-dependencies}
     */
    'import-x/no-extraneous-dependencies': 'warn',

    /**
     * Forbid the use of mutable exports with `var` or `let`.
     * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-mutable-exports.md | import-x/no-mutable-exports}
     */
    'import-x/no-mutable-exports': 'error',

    /**
     * Forbid use of exported name as identifier of default export.
     * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-named-as-default.md | import-x/no-named-as-default}
     */
    'import-x/no-named-as-default': 'error',

    /**
     * Forbid use of exported name as property of default export.
     * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-named-as-default-member.md | import-x/no-named-as-default-member}
     */
    'import-x/no-named-as-default-member': 'error',

    /**
     * Prohibit importing a default export by another name.
     * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-rename-default.md | import-x/no-rename-default}
     */
    'import-x/no-rename-default': 'error',

    /**
     * Forbid modules without exports, or exports without matching import in another module.
     * There is bug @see {@link https://github.com/import-js/eslint-plugin-import/issues/2678 | [no-unused-modules] Error with ESLint configuration non-standard name}
     * enabling `unusedExports` with flat config breaks eslint
     * So rule is disabled for now
     * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-unused-modules.md | import-x/no-unused-modules}
     */
    'import-x/no-unused-modules': ['off',
        {
            unusedExports: true,
            missingExports: true,
            ignoreUnusedTypeExports: true,
        },
    ],
});

export { importHelpfulWarnings };
