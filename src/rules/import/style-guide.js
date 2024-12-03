const importStyleGuide = Object.freeze({
    /**
     * Enforce or ban the use of inline type-only markers for named imports.
     * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/consistent-type-specifier-style.md | import-x/consistent-type-specifier-style}
     */
    'import-x/consistent-type-specifier-style': ['error', 'prefer-inline'],

    /**
     * Enforce a leading comment with the webpackChunkName for dynamic imports.
     * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/dynamic-import-chunkname.md | import-x/dynamic-import-chunkname}
     */
    'import-x/dynamic-import-chunkname': 'off',

    /**
     * Ensure all exports appear after other statements.
     * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/exports-last.md | import-x/exports-last}
     */
    'import-x/exports-last': 'error',

    /**
     * Ensure consistent use of file extension within the import path.
     * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/extensions.md | import-x/extensions}
     */
    'import-x/extensions': ['error', 'always',
        {
            ignorePackages: true,
        },
    ],

    /**
     * Ensure all imports appear before other statements.
     * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/first.md | import-x/first}
     */
    'import-x/first': 'error',

    /**
     * Prefer named exports to be grouped together in a single export declaration.
     * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/group-exports.md | import-x/group-exports}
     */
    'import-x/group-exports': 'error',

    /**
     * Enforce the maximum number of dependencies a module can have.
     * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/max-dependencies.md | import-x/max-dependencies}
     */
    'import-x/max-dependencies': 'off',

    /**
     * Enforce a newline after import statements.
     * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/newline-after-import.md | import-x/newline-after-import}
     */
    'import-x/newline-after-import': 'error',

    /**
     * Forbid anonymous values as default exports.
     * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-anonymous-default-export.md | import-x/no-anonymous-default-export}
     */
    'import-x/no-anonymous-default-export': 'error',

    /**
     * Forbid default exports.
     * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-default-export.md | import-x/no-default-export}
     */
    'import-x/no-default-export': 'error',

    /**
     * Forbid repeated import of the same module in multiple places.
     * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-duplicates.md | import-x/no-duplicates}
     */
    'import-x/no-duplicates': 'error',

    /**
     * Forbid named default exports.
     * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-named-default.md | import-x/no-named-default}
     */
    'import-x/no-named-default': 'error',

    /**
     * Forbid named exports.
     * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-named-export.md | import-x/no-named-export}
     */
    'import-x/no-named-export': 'off',

    /**
     * Forbid namespace (a.k.a. "wildcard" *) imports.
     * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-namespace.md | import-x/no-namespace}
     */
    'import-x/no-namespace': 'off',

    /**
     * Forbid unassigned imports.
     * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-unassigned-import.md | import-x/no-unassigned-import}
     */
    'import-x/no-unassigned-import': [
        'error',
        {
            allow: ['**/*.css'],
        },
    ],

    /**
     * Enforce a convention in module import order.
     * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/order.md | import-x/order}
     */
    'import-x/order': ['error',
        {
            groups: [['builtin', 'external', 'internal']],
        },
    ],

    /**
     * Prefer a default export if module exports a single name or multiple names.
     * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/prefer-default-export.md | import-x/prefer-default-export}
     */
    'import-x/prefer-default-export': 'off',
});

export { importStyleGuide };
