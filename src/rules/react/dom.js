const reactDom = Object.freeze({
    /**
     * Disallows DOM elements from using `dangerouslySetInnerHTML`.
     * @see {@link https://eslint-react.xyz/docs/rules/dom-no-dangerously-set-innerhtml | dom-no-dangerously-set-innerhtml}
     */
    '@eslint-react/dom-no-dangerously-set-innerhtml': 'warn',

    /**
     * Disallows DOM elements from using `dangerouslySetInnerHTML` and `children` at the same time.
     * @see {@link https://eslint-react.xyz/docs/rules/dom-no-dangerously-set-innerhtml-with-children | dom-no-dangerously-set-innerhtml-with-children}
     */
    '@eslint-react/dom-no-dangerously-set-innerhtml-with-children': 'error',

    /**
     * Disallows 'findDOMNode'.
     * @see {@link https://eslint-react.xyz/docs/rules/dom-no-find-dom-node | dom-no-find-dom-node}
     */
    '@eslint-react/dom-no-find-dom-node': 'error',

    /**
     * Disallows `flushSync`.
     * @see {@link https://eslint-react.xyz/docs/rules/dom-no-flush-sync | dom-no-flush-sync}
     */
    '@eslint-react/dom-no-flush-sync': 'error',

    /**
     * Replaces usage of `ReactDOM.hydrate()` with `hydrateRoot()`.
     * @see {@link https://eslint-react.xyz/docs/rules/dom-no-hydrate | dom-no-hydrate}
     */
    '@eslint-react/dom-no-hydrate': 'error',

    /**
     * Enforces an explicit 'type' attribute for 'button' elements.
     * @see {@link https://eslint-react.xyz/docs/rules/dom-no-missing-button-type | dom-no-missing-button-type}
     */
    '@eslint-react/dom-no-missing-button-type': 'warn',

    /**
     * Enforces an explicit `sandbox` attribute for `iframe` elements.
     * @see {@link https://eslint-react.xyz/docs/rules/dom-no-missing-iframe-sandbox | dom-no-missing-iframe-sandbox}
     */
    '@eslint-react/dom-no-missing-iframe-sandbox': 'warn',

    /**
     * Replaces usage of `ReactDOM.render()` with `createRoot(node).render()`.
     * @see {@link https://eslint-react.xyz/docs/rules/dom-no-render | dom-no-render}
     */
    '@eslint-react/dom-no-render': 'error',

    /**
     * Disallows the return value of `ReactDOM.render`.
     * @see {@link https://eslint-react.xyz/docs/rules/dom-no-render-return-value | dom-no-render-return-value}
     */
    '@eslint-react/dom-no-render-return-value': 'error',

    /**
     * Disallows `javascript:` URLs as attribute values.
     * @see {@link https://eslint-react.xyz/docs/rules/dom-no-script-url | dom-no-script-url}
     */
    '@eslint-react/dom-no-script-url': 'error',

    /**
     * Disallows the use of string style prop in JSX. Use an object instead.
     * @see {@link https://eslint-react.xyz/docs/rules/dom-no-string-style-prop | dom-no-string-style-prop}
     */
    '@eslint-react/dom-no-string-style-prop': 'error',

    /**
     * Disallows unknown `DOM` properties.
     * @see {@link https://eslint-react.xyz/docs/rules/dom-no-unknown-property | dom-no-unknown-property}
     */
    '@eslint-react/dom-no-unknown-property': 'warn',

    /**
     * Enforces that the `sandbox` attribute for `iframe` elements is not set to unsafe combinations.
     * @see {@link https://eslint-react.xyz/docs/rules/dom-no-unsafe-iframe-sandbox | dom-no-unsafe-iframe-sandbox}
     */
    '@eslint-react/dom-no-unsafe-iframe-sandbox': 'warn',

    /**
     * Disallows 'target="_blank"' without 'rel="noreferrer noopener"'.
     * @see {@link https://eslint-react.xyz/docs/rules/dom-no-unsafe-target-blank | dom-no-unsafe-target-blank}
     */
    '@eslint-react/dom-no-unsafe-target-blank': 'warn',

    /**
     * Replaces usage of `useFormState` with `useActionState`.
     * @see {@link https://eslint-react.xyz/docs/rules/dom-no-use-form-state | dom-no-use-form-state}
     */
    '@eslint-react/dom-no-use-form-state': 'warn',

    /**
     * Disallows `children` in void DOM elements.
     * @see {@link https://eslint-react.xyz/docs/rules/dom-no-void-elements-with-children | dom-no-void-elements-with-children}
     */
    '@eslint-react/dom-no-void-elements-with-children': 'error',
});

export { reactDom };
