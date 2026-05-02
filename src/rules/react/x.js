const reactX = Object.freeze({
    /**
     * Disallows higher order functions that define components or hooks inside them.
     * @see {@link https://eslint-react.xyz/docs/rules/component-hook-factories | component-hook-factories}
     */
    '@eslint-react/component-hook-factories': 'error',

    /**
     * Validates usage of Error Boundaries instead of try/catch for errors in child components.
     * @see {@link https://eslint-react.xyz/docs/rules/error-boundaries | error-boundaries}
     */
    '@eslint-react/error-boundaries': 'error',

    /**
     * Verifies the list of dependencies for Hooks like `useEffect` and similar.
     * @see {@link https://eslint-react.xyz/docs/rules/exhaustive-deps | exhaustive-deps}
     */
    '@eslint-react/exhaustive-deps': 'error',

    /**
     * Validates against assignment/mutation of globals during render, part of ensuring that side effects must run outside of render.
     * @see {@link https://eslint-react.xyz/docs/rules/globals | globals}
     */
    '@eslint-react/globals': 'warn',

    /**
     * Validates against mutating props, state, and other values that are immutable.
     * @see {@link https://eslint-react.xyz/docs/rules/immutability | immutability}
     */
    '@eslint-react/immutability': 'error',

    /**
     * Disallows accessing `this.state` inside 'setState' calls.
     * @see {@link https://eslint-react.xyz/docs/rules/no-access-state-in-setstate | no-access-state-in-setstate}
     */
    '@eslint-react/no-access-state-in-setstate': 'error',

    /**
     * Disallows using an item's index in the array as its key.
     * @see {@link https://eslint-react.xyz/docs/rules/no-array-index-key | no-array-index-key}
     */
    '@eslint-react/no-array-index-key': 'error',

    /**
     * Disallows the use of `Children.count` from the 'react' package.
     * @see {@link https://eslint-react.xyz/docs/rules/no-children-count | no-children-count}
     */
    '@eslint-react/no-children-count': 'error',

    /**
     * Disallows the use of `Children.forEach` from the 'react' package.
     * @see {@link https://eslint-react.xyz/docs/rules/no-children-for-each | no-children-for-each}
     */
    '@eslint-react/no-children-for-each': 'error',

    /**
     * Disallows the use of `Children.map` from the 'react' package.
     * @see {@link https://eslint-react.xyz/docs/rules/no-children-map | no-children-map}
     */
    '@eslint-react/no-children-map': 'error',

    /**
     * Disallows the use of 'Children.only' from the 'react' package.
     * @see {@link https://eslint-react.xyz/docs/rules/no-children-only | no-children-only}
     */
    '@eslint-react/no-children-only': 'error',

    /**
     * Disallows the use of `Children.toArray` from the 'react' package.
     * @see {@link https://eslint-react.xyz/docs/rules/no-children-to-array | no-children-to-array}
     */
    '@eslint-react/no-children-to-array': 'error',

    /**
     * Disallows class components except for error boundaries.
     * @see {@link https://eslint-react.xyz/docs/rules/no-class-component | no-class-component}
     */
    '@eslint-react/no-class-component': 'warn',

    /**
     * Disallows `cloneElement`.
     * @see {@link https://eslint-react.xyz/docs/rules/no-clone-element | no-clone-element}
     */
    '@eslint-react/no-clone-element': 'warn',

    /**
     * Replaces usage of `componentWillMount` with `UNSAFE_componentWillMount`.
     * @see {@link https://eslint-react.xyz/docs/rules/no-component-will-mount | no-component-will-mount}
     */
    '@eslint-react/no-component-will-mount': 'error',

    /**
     * Replaces usage of `componentWillReceiveProps` with `UNSAFE_componentWillReceiveProps`.
     * @see {@link https://eslint-react.xyz/docs/rules/no-component-will-receive-props | no-component-will-receive-props}
     */
    '@eslint-react/no-component-will-receive-props': 'error',

    /**
     * Replaces usage of `componentWillUpdate` with `UNSAFE_componentWillUpdate`.
     * @see {@link https://eslint-react.xyz/docs/rules/no-component-will-update | no-component-will-update}
     */
    '@eslint-react/no-component-will-update': 'error',

    /**
     * Replaces usage of `<Context.Provider>` with `<Context>`.
     * @see {@link https://eslint-react.xyz/docs/rules/no-context-provider | no-context-provider}
     */
    '@eslint-react/no-context-provider': 'warn',

    /**
     * Disallows `createRef` in function components.
     * @see {@link https://eslint-react.xyz/docs/rules/no-create-ref | no-create-ref}
     */
    '@eslint-react/no-create-ref': 'error',

    /**
     * Disallows direct mutation of `this.state`.
     * @see {@link https://eslint-react.xyz/docs/rules/no-direct-mutation-state | no-direct-mutation-state}
     */
    '@eslint-react/no-direct-mutation-state': 'error',

    /**
     * Prevents duplicate 'key' props on sibling elements when rendering lists.
     * @see {@link https://eslint-react.xyz/docs/rules/no-duplicate-key | no-duplicate-key}
     */
    '@eslint-react/no-duplicate-key': 'error',

    /**
     * Replaces usage of `forwardRef` with passing `ref` as a prop.
     * @see {@link https://eslint-react.xyz/docs/rules/no-forward-ref | no-forward-ref}
     */
    '@eslint-react/no-forward-ref': 'error',

    /**
     * Prevents implicitly passing the `children` prop to components.
     * @see {@link https://eslint-react.xyz/docs/rules/no-implicit-children | no-implicit-children}
     */
    '@eslint-react/no-implicit-children': 'error',

    /**
     * Prevents implicitly passing the `key` prop to components.
     * @see {@link https://eslint-react.xyz/docs/rules/no-implicit-key | no-implicit-key}
     */
    '@eslint-react/no-implicit-key': 'error',

    /**
     * Prevents implicitly passing the 'ref' prop to components.
     * @see {@link https://eslint-react.xyz/docs/rules/no-implicit-ref | no-implicit-ref}
     */
    '@eslint-react/no-implicit-ref': 'error',

    /**
     * Prevents problematic leaked values from being rendered.
     * @see {@link https://eslint-react.xyz/docs/rules/no-leaked-conditional-rendering | no-leaked-conditional-rendering}
     */
    '@eslint-react/no-leaked-conditional-rendering': 'error',

    /**
     * Enforces that all components have a `displayName` that can be used in DevTools.
     * @see {@link https://eslint-react.xyz/docs/rules/no-missing-component-display-name | no-missing-component-display-name}
     */
    '@eslint-react/no-missing-component-display-name': 'warn',

    /**
     * Enforces that all contexts have a `displayName` that can be used in DevTools
     * @see {@link https://eslint-react.xyz/docs/rules/no-missing-context-display-name | no-missing-context-display-name}
     */
    '@eslint-react/no-missing-context-display-name': 'warn',

    /**
     * Disallows missing `key` on items in list rendering.
     * @see {@link https://eslint-react.xyz/docs/rules/no-missing-key | no-missing-key}
     */
    '@eslint-react/no-missing-key': 'error',

    /**
     * Prevents incorrect usage of `captureOwnerStack`.
     * @see {@link https://eslint-react.xyz/docs/rules/no-misused-capture-owner-stack | no-misused-capture-owner-stack}
     */
    '@eslint-react/no-misused-capture-owner-stack': 'error',

    /**
     * Disallows nesting component definitions inside other components.
     * @see {@link https://eslint-react.xyz/docs/rules/no-nested-component-definitions | no-nested-component-definitions}
     */
    '@eslint-react/no-nested-component-definitions': 'error',

    /**
     * Disallows nesting lazy component declarations inside other components or hooks.
     * @see {@link https://eslint-react.xyz/docs/rules/no-nested-lazy-component-declarations | no-nested-lazy-component-declarations}
     */
    '@eslint-react/no-nested-lazy-component-declarations': 'error',

    /**
     * Disallows calling `this.setState` in `componentDidMount` outside functions such as callbacks.
     * @see {@link https://eslint-react.xyz/docs/rules/no-set-state-in-component-did-mount | no-set-state-in-component-did-mount}
     */
    '@eslint-react/no-set-state-in-component-did-mount': 'error',

    /**
     * Disallows calling `this.setState` in `componentDidUpdate` outside functions such as callbacks.
     * @see {@link https://eslint-react.xyz/docs/rules/no-set-state-in-component-did-update | no-set-state-in-component-did-update}
     */
    '@eslint-react/no-set-state-in-component-did-update': 'error',

    /**
     * Disallows calling `this.setState` in `componentWillUpdate` outside functions such as callbacks.
     * @see {@link https://eslint-react.xyz/docs/rules/no-set-state-in-component-will-update | no-set-state-in-component-will-update}
     */
    '@eslint-react/no-set-state-in-component-will-update': 'error',

    /**
     * Enforces that a function with the `use` prefix uses at least one Hook inside it.
     * @see {@link https://eslint-react.xyz/docs/rules/no-unnecessary-use-prefix | no-unnecessary-use-prefix}
     */
    '@eslint-react/no-unnecessary-use-prefix': 'warn',

    /**
     * Warns about the use of `UNSAFE_componentWillMount` in class components.
     * @see {@link https://eslint-react.xyz/docs/rules/no-unsafe-component-will-mount | no-unsafe-component-will-mount}
     */
    '@eslint-react/no-unsafe-component-will-mount': 'error',

    /**
     * Warns about the use of `UNSAFE_componentWillReceiveProps` in class components.
     * @see {@link https://eslint-react.xyz/docs/rules/no-unsafe-component-will-receive-props | no-unsafe-component-will-receive-props}
     */
    '@eslint-react/no-unsafe-component-will-receive-props': 'error',

    /**
     * Warns about the use of `UNSAFE_componentWillUpdate` in class components.
     * @see {@link https://eslint-react.xyz/docs/rules/no-unsafe-component-will-update | no-unsafe-component-will-update}
     */
    '@eslint-react/no-unsafe-component-will-update': 'error',

    /**
     * Prevents non-stable values (i.e., object literals) from being used as a value for `Context.Provider`.
     * @see {@link https://eslint-react.xyz/docs/rules/no-unstable-context-value | no-unstable-context-value}
     */
    '@eslint-react/no-unstable-context-value': 'warn',

    /**
     * Prevents using referential-type values as default props in object destructuring.
     * @see {@link https://eslint-react.xyz/docs/rules/no-unstable-default-props | no-unstable-default-props}
     */
    '@eslint-react/no-unstable-default-props': 'warn',

    /**
     * Warns about unused class component methods and properties.
     * @see {@link https://eslint-react.xyz/docs/rules/no-unused-class-component-members | no-unused-class-component-members}
     */
    '@eslint-react/no-unused-class-component-members': 'error',

    /**
     * Warns about component props that are defined but never used.
     * @see {@link https://eslint-react.xyz/docs/rules/no-unused-props | no-unused-props}
     */
    '@eslint-react/no-unused-props': 'warn',

    /**
     * Warns about state variables that are defined but never used, or only used in effects.
     * @see {@link https://eslint-react.xyz/docs/rules/no-unused-state | no-unused-state}
     */
    '@eslint-react/no-unused-state': 'error',

    /**
     * Replaces usage of `useContext` with `use`.
     * @see {@link https://eslint-react.xyz/docs/rules/no-use-context | no-use-context}
     */
    '@eslint-react/no-use-context': 'error',

    /**
     * Validates that components and hooks are pure by checking that they do not call known-impure functions during render.
     * @see {@link https://eslint-react.xyz/docs/rules/purity | purity}
     */
    '@eslint-react/purity': 'warn',

    /**
     * Validates correct usage of refs by checking that 'ref.current' is not read or written during render.
     * @see {@link https://eslint-react.xyz/docs/rules/refs | refs}
     */
    '@eslint-react/refs': 'error',

    /**
     * Enforces the Rules of Hooks.
     * @see {@link https://eslint-react.xyz/docs/rules/rules-of-hooks | rules-of-hooks}
     */
    '@eslint-react/rules-of-hooks': 'error',

    /**
     * Validates against setting state synchronously in an effect, which can lead to re-renders that degrade performance.
     * @see {@link https://eslint-react.xyz/docs/rules/set-state-in-effect | set-state-in-effect}
     */
    '@eslint-react/set-state-in-effect': 'warn',

    /**
     * Validates against unconditionally setting state during render, which can trigger additional renders and potential infinite render loops.
     * @see {@link https://eslint-react.xyz/docs/rules/set-state-in-render | set-state-in-render}
     */
    '@eslint-react/set-state-in-render': 'error',

    /**
     * Validates against syntax that React Compiler does not support.
     * @see {@link https://eslint-react.xyz/docs/rules/unsupported-syntax | unsupported-syntax}
     */
    '@eslint-react/unsupported-syntax': 'error',

    /**
     * Validates that `useMemo` is called with a callback that returns a value.
     * @see {@link https://eslint-react.xyz/docs/rules/use-memo | use-memo}
     */
    '@eslint-react/use-memo': 'error',

    /**
     * Enforces correct usage of 'useState', including destructuring, symmetric naming of the value and setter, and wrapping expensive initializers in a lazy initializer function.
     * @see {@link https://eslint-react.xyz/docs/rules/use-state | use-state}
     */
    '@eslint-react/use-state': 'warn',
});

export { reactX };
