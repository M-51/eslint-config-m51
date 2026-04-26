const reactWebApi = Object.freeze({
    /**
     * Enforces that every `addEventListener` in a component or custom hook has a corresponding `removeEventListener`.
     * @see {@link https://eslint-react.xyz/docs/rules/web-api-no-leaked-event-listener | web-api-no-leaked-event-listener}
     */
    '@eslint-react/web-api-no-leaked-event-listener': 'warn',

    /**
     * Enforces that every `fetch` in a component or custom hook has a corresponding 'AbortController' abort in the cleanup function.
     * @see {@link https://eslint-react.xyz/docs/rules/web-api-no-leaked-fetch | web-api-no-leaked-fetch}
     */
    '@eslint-react/web-api-no-leaked-fetch': 'warn',

    /**
     * Enforces that every `setInterval` in a component or custom hook has a corresponding `clearInterval`.
     * @see {@link https://eslint-react.xyz/docs/rules/web-api-no-leaked-interval | web-api-no-leaked-interval}
     */
    '@eslint-react/web-api-no-leaked-interval': 'warn',

    /**
     * Enforces that every `ResizeObserver` created in a component or custom hook has a corresponding `ResizeObserver.disconnect()`.
     * @see {@link https://eslint-react.xyz/docs/rules/web-api-no-leaked-resize-observer | web-api-no-leaked-resize-observer}
     */
    '@eslint-react/web-api-no-leaked-resize-observer': 'warn',

    /**
     * Enforces that every `setTimeout` in a component or custom hook has a corresponding `clearTimeout`.
     * @see {@link https://eslint-react.xyz/docs/rules/web-api-no-leaked-timeout | web-api-no-leaked-timeout}
     */
    '@eslint-react/web-api-no-leaked-timeout': 'warn',
});

export { reactWebApi };
