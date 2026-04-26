const reactNamingConvention = Object.freeze({
    /**
     * Enforces the context name to be a valid component name with the suffix `Context`.
     * @see {@link https://eslint-react.xyz/docs/rules/web-api-no-leaked-fetch | web-api-no-leaked-fetch}
     */
    '@eslint-react/naming-convention-context-name': 'warn',

    /**
     * Enforces identifier names assigned from `useId` calls to be either `id` or end with `Id`.
     * @see {@link https://eslint-react.xyz/docs/rules/naming-convention-id-name | naming-convention-id-name}
     */
    '@eslint-react/naming-convention-id-name': 'warn',

    /**
     * Enforces identifier names assigned from `useRef` calls to be either `ref` or end with `Ref`.
     * @see {@link https://eslint-react.xyz/docs/rules/naming-convention-ref-name | naming-convention-ref-name}
     */
    '@eslint-react/naming-convention-ref-name': 'warn',
});

export { reactNamingConvention };
