const importStaticAnalysis = Object.freeze({
    /**
     * Ensure a default export is present, given a default import.
     * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/default.md | import-x/default}
     */
    'import-x/default': 'error',

    /**
     * Ensure named imports correspond to a named export in the remote file.
     * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/named.md | import-x/named}
     */
    'import-x/named': 'error',

    /**
     * Ensure imported namespaces contain dereferenced properties as they are dereferenced.
     * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/namespace.md | import-x/namespace}
     */
    'import-x/namespace': 'error',

    /**
     * Forbid import of modules using absolute paths.
     * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-absolute-path.md | import-x/no-absolute-path}
     */
    'import-x/no-absolute-path': 'error',

    /**
     * Forbid a module from importing a module with a dependency path back to itself.
     * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-cycle.md | import-x/no-cycle}
     */
    'import-x/no-cycle': 'error',

    /**
     * Forbid require() calls with expressions.
     * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-dynamic-require.md | import-x/no-dynamic-require}
     */
    'import-x/no-dynamic-require': 'off',

    /**
     * Forbid importing the submodules of other modules.
     * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-internal-modules.md | import-x/no-internal-modules}
     */
    'import-x/no-internal-modules': 'off',

    /**
     * Forbid importing packages through relative paths.
     * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-relative-packages.md | import-x/no-relative-packages}
     */
    'import-x/no-relative-packages': 'off',

    /**
     * Forbid importing modules from parent directories.
     * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-relative-parent-imports.md | import-x/no-relative-parent-imports}
     */
    'import-x/no-relative-parent-imports': 'off',

    /**
     * Enforce which files can be imported in a given folder.
     * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-restricted-paths.md | import-x/no-restricted-paths}
     */
    'import-x/no-restricted-paths': 'off',

    /**
     * Forbid a module from importing itself.
     * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-self-import.md | import-x/no-self-import}
     */
    'import-x/no-self-import': 'error',

    /**
     * Ensure imports point to a file/module that can be resolved.
     * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-unresolved.md | import-x/no-unresolved}
     */
    'import-x/no-unresolved': ['error',
        {
            ignore: ['^@typescript-eslint/'],
        },
    ],

    /**
     * Forbid unnecessary path segments in import and require statements.
     * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-useless-path-segments.md | import-x/no-useless-path-segments}
     */
    'import-x/no-useless-path-segments': 'error',

    /**
     * Forbid webpack loader syntax in imports.
     * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-webpack-loader-syntax.md | import-x/no-webpack-loader-syntax}
     */
    'import-x/no-webpack-loader-syntax': 'error',
});

export { importStaticAnalysis };
