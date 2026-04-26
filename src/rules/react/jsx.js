const reactJsx = Object.freeze({
    /**
     * Disallows passing `children` as a prop.
     * @see {@link https://eslint-react.xyz/docs/rules/jsx-no-children-prop | jsx-no-children-prop}
     */
    '@eslint-react/jsx-no-children-prop': 'error',

    /**
     * Disallows passing `children` as a prop when children are also passed as nested content.
     * @see {@link https://eslint-react.xyz/docs/rules/no-children-prop-with-children | no-children-prop-with-children}
     */
    '@eslint-react/jsx-no-children-prop-with-children': 'error',

    /**
     * Prevents comment strings from being accidentally inserted into a JSX element's text nodes.
     * @see {@link https://eslint-react.xyz/docs/rules/jsx-no-comment-textnodes | jsx-no-comment-textnodes}
     */
    '@eslint-react/jsx-no-comment-textnodes': 'warn',

    /**
     * Prevent patterns that cause deoptimization when using the automatic JSX runtime.
     * @see {@link https://eslint-react.xyz/docs/rules/jsx-no-key-after-spread | jsx-no-key-after-spread}
     */
    '@eslint-react/jsx-no-key-after-spread': 'error',

    /**
     * Catches '$' before '{expr}' in JSX — typically from template literal '${expr}' being copy-pasted into JSX without removing the '$'. The '$' "leaks" into the rendered output.
     * @see {@link https://eslint-react.xyz/docs/rules/jsx-no-leaked-dollar | jsx-no-leaked-dollar}
     */
    '@eslint-react/jsx-no-leaked-dollar': 'warn',

    /**
     * Catches ';' at the start of JSX text nodes — typically from accidentally placing a statement-ending ';' inside JSX. The ';' "leaks" into the rendered output.
     * @see {@link https://eslint-react.xyz/docs/rules/jsx-no-leaked-semicolon | jsx-no-leaked-semicolon}
     */
    '@eslint-react/jsx-no-leaked-semicolon': 'warn',

    /**
     * Disallow JSX namespace syntax, as React does not support them.
     * @see {@link https://eslint-react.xyz/docs/rules/jsx-no-namespace | jsx-no-namespace}
     */
    '@eslint-react/jsx-no-namespace': 'error',

    /**
     * Disallows useless fragment elements.
     * @see {@link https://eslint-react.xyz/docs/rules/jsx-no-useless-fragment | jsx-no-useless-fragment}
     */
    '@eslint-react/jsx-no-useless-fragment': 'warn',

    /**
     * Validates and transforms React Client/Server Function definitions.
     * @see {@link https://eslint-react.xyz/docs/rules/rsc-function-definition | rsc-function-definition}
     */
    '@eslint-react/rsc-function-definition': 'error',
});

export { reactJsx };
