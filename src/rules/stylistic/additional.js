const stylisticAdditionalRules = Object.freeze({
    /**
     * Indentation for binary operators in multiline expressions.
     * This is a supplement to the `indent` rule.
     * They are supposed to be used together with the same indentation size.
     * @see {@link https://eslint.style/rules/plus/indent-binary-ops | indent-binary-ops}
     */
    '@stylistic/plus/indent-binary-ops': ['error', 4],

    /**
     * Enforces consistent spacing inside TypeScript type generics.
     * @see {@link https://eslint.style/rules/plus/type-generic-spacing | type-generic-spacing}
     */
    '@stylistic/plus/type-generic-spacing': 'error',

    /**
     * Expect space before the type declaration in the named tuple.
     * @see {@link https://eslint.style/rules/plus/type-named-tuple-spacing | type-named-tuple-spacing}
     */
    '@stylistic/plus/type-named-tuple-spacing': 'error',
});

export { stylisticAdditionalRules };
