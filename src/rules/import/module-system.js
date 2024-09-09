const importModuleSystem = Object.freeze({
    /**
     * Forbid AMD `require` and `define` calls.
     * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-amd.md | import-x/no-amd}
     */
    'import-x/no-amd': 'error',

    /**
     * Forbid `CommonJS` require calls and `module.exports` or `exports.*`.
     * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-commonjs.md | import-x/no-commonjs}
     */
    'import-x/no-commonjs': 'error',

    /**
     * Forbid import statements with CommonJS module.exports.
     * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-commonjs.md | import-x/no-import-module-exports}
     */
    'import-x/no-import-module-exports': 'error',

    /**
     * Forbid Node.js builtin modules.
     * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-nodejs-modules.md | import-x/no-nodejs-modules}
     */
    'import-x/no-nodejs-modules': 'off',

    /**
     * Forbid potentially ambiguous parse goal (`script` vs. `module`).
     * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/unambiguous.md | import-x/unambiguous}
     */
    'import-x/unambiguous': 'error',
});

export { importModuleSystem };
