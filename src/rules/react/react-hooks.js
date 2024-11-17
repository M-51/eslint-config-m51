const reactHooks = Object.freeze({
    /**
     * Enforce Rules of Hooks
     * @see {@link https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks/src/RulesOfHooks.js | rules-of-hooks}
     */
    'react-hooks/rules-of-hooks': 'error',

    /**
     * Verify the list of the dependencies for Hooks like useEffect and similar
     * @see {@link https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks/src/ExhaustiveDeps.js | exhaustive-deps}
     */
    'react-hooks/exhaustive-deps': 'error',
});

export { reactHooks };
