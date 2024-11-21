const react = Object.freeze({
    /**
     * Enforces consistent naming for boolean props
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md | boolean-prop-naming}
     */
    'react/boolean-prop-naming': ['off', {
        propTypeNames: ['bool', 'mutuallyExclusiveTrueProps'],
        rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
        message: '',
    }],

    /**
     * Disallow usage of `button` elements without an explicit `type` attribute
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/button-has-type.md | button-has-type}
     */
    'react/button-has-type': ['error', {
        button: true,
        submit: true,
        reset: false,
    }],

    /**
     * Enforce using `onChange` or `readonly` attribute when `checked` is used
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/checked-requires-onchange-or-readonly.md | checked-requires-onchange-or-readonly}
     */
    'react/checked-requires-onchange-or-readonly': ['off', {
        ignoreMissingProperties: false,
        ignoreExclusiveCheckedAttribute: false,
    }],

    /**
     * Enforce all defaultProps have a corresponding non-required PropType
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md | default-props-match-prop-types}
     */
    'react/default-props-match-prop-types': ['error', {
        allowRequiredDefaults: false,
    }],

    /**
     * Enforce consistent usage of destructuring assignment of props, state, and context
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md | destructuring-assignment}
     */
    'react/destructuring-assignment': ['error', 'always'],

    /**
     * Disallow missing displayName in a React component definition
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/display-name.md | display-name}
     */
    'react/display-name': ['off', {
        ignoreTranspilerName: false,
    }],

    /**
     * Disallow certain props on components
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md | forbid-component-props}
     */
    'react/forbid-component-props': ['off', {
        forbid: [],
    }],

    /**
     * Disallow certain props on DOM Nodes
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-dom-props.md | forbid-dom-props}
     */
    'react/forbid-dom-props': ['off', {
        forbid: [],
    }],

    /**
     * Disallow certain elements
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md | forbid-elements}
     */
    'react/forbid-elements': ['off', {
        forbid: [],
    }],

    /**
     * Disallow using another component's propTypes
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md | forbid-foreign-prop-types}
     */
    'react/forbid-foreign-prop-types': ['warn', {
        allowInPropTypes: true,
    }],

    /**
     * Disallow certain propTypes
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md | forbid-prop-types}
     */
    'react/forbid-prop-types': ['error', {
        forbid: ['any', 'array', 'object'],
        checkContextTypes: true,
        checkChildContextTypes: true,
    }],

    /**
     * Require all forwardRef components include a ref parameter
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forward-ref-uses-ref.md | forward-ref-uses-ref}
     */
    'react/forward-ref-uses-ref': 'error',

    /**
     * Enforce a specific function type for function components
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md | function-component-definition}
     */
    'react/function-component-definition': ['error', {
        namedComponents: ['function-declaration', 'function-expression'],
        unnamedComponents: 'function-expression',
    }],

    /**
     * Ensure destructuring and symmetric naming of useState hook value and setter variables
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/hook-use-state.md | hook-use-state}
     */
    'react/hook-use-state': ['error', {
        allowDestructuredState: true,
    }],

    /**
     * Enforce sandbox attribute on iframe elements
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/iframe-missing-sandbox.md | iframe-missing-sandbox}
     */
    'react/iframe-missing-sandbox': 'error',

    /**
     * Enforce boolean attributes notation in JSX
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md | jsx-boolean-value}
     */
    'react/jsx-boolean-value': ['error', 'never', { always: [] },
    ],

    /**
     * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-child-element-spacing.md | jsx-child-element-spacing}
     */
    'react/jsx-child-element-spacing': 'off',

    /**
     * Enforce closing bracket location in JSX
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md | jsx-closing-bracket-location}
     */
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],

    /**
     * Enforce closing tag location for multiline JSX
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md | jsx-closing-tag-location}
     */
    'react/jsx-closing-tag-location': 'error',

    /**
     * Disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSX children or attributes
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md | jsx-curly-brace-presence}
     */
    'react/jsx-curly-brace-presence': ['error', {
        props: 'never',
        children: 'never',
    }],

    /**
     * Enforce consistent linebreaks in curly braces in JSX attributes and expressions
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-newline.md | jsx-curly-newline}
     */
    'react/jsx-curly-newline': ['error', {
        multiline: 'consistent',
        singleline: 'consistent',
    }],

    /**
     * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md | jsx-curly-spacing}
     */
    'react/jsx-curly-spacing': ['error', 'never', {
        allowMultiline: true,
    }],

    /**
     * Enforce or disallow spaces around equal signs in JSX attributes
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md | jsx-equals-spacing}
     */
    'react/jsx-equals-spacing': ['error', 'never'],

    /**
     * Disallow file extensions that may contain JSX
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md | jsx-filename-extension}
     */
    'react/jsx-filename-extension': ['error', {
        extensions: ['.jsx', '.tsx'],
    }],

    /**
     * Enforce proper position of the first property in JSX
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md | jsx-first-prop-new-line}
     */
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],

    /**
     * Enforce shorthand or standard form for React fragments
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md | jsx-fragments}
     */
    'react/jsx-fragments': ['error', 'syntax'],

    /**
     * Enforce event handler naming conventions in JSX
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md | jsx-handler-names}
     */
    'react/jsx-handler-names': ['off', {
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on',
    }],

    /**
     * Enforce JSX indentation
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md | jsx-indent}
     */
    'react/jsx-indent': ['error', 4],

    /**
     * Enforce props indentation in JSX
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md | jsx-indent-props}
     */
    'react/jsx-indent-props': ['error', 4],

    /**
     * Disallow missing `key` props in iterators/collection literals
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-key.md | jsx-key}
     */
    'react/jsx-key': 'error',

    /**
     * Enforce JSX maximum depth
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-max-depth.md | jsx-max-depth}
     */
    'react/jsx-max-depth': 'off',

    /**
     * Enforce maximum of props on a single line in JSX
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md | jsx-max-props-per-line}
     */
    'react/jsx-max-props-per-line': ['error', {
        maximum: 1,
        when: 'multiline',
    }],

    /**
     * Require or prevent a new line after jsx elements and expressions.
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-newline.md | jsx-newline}
     */
    'react/jsx-newline': 'off',

    /**
     * Disallow `.bind()` or arrow functions in JSX props
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md | jsx-no-bind}
     */
    'react/jsx-no-bind': ['error', {
        ignoreRefs: true,
        allowArrowFunctions: true,
        allowFunctions: false,
        allowBind: false,
        ignoreDOMComponents: true,
    }],

    /**
     * Disallow comments from being inserted as text nodes
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md | jsx-no-comment-textnodes}
     */
    'react/jsx-no-comment-textnodes': 'error',

    /**
     * Disallows JSX context provider values from taking values that will cause needless rerenders
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md | jsx-no-constructed-context-values}
     */
    'react/jsx-no-constructed-context-values': 'error',

    /**
     * Disallow duplicate properties in JSX
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md | jsx-no-duplicate-props}
     */
    'react/jsx-no-duplicate-props': ['error', {
        ignoreCase: true,
    }],

    /**
     * Disallow problematic leaked values from being rendered
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-leaked-render.md | jsx-no-leaked-render}
     */
    'react/jsx-no-leaked-render': 'error',

    /**
     * Disallow usage of string literals in JSX
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md | jsx-no-literals}
     */
    'react/jsx-no-literals': ['off', {
        noStrings: true,
    }],

    /**
     * Disallow usage of `javascript:` URLs
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md | jsx-no-script-url}
     */
    'react/jsx-no-script-url': ['error', [
        {
            name: 'Link',
            props: ['to'],
        },
    ]],

    /**
     * Disallow `target="_blank"` attribute without `rel="noreferrer"`
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md | jsx-no-target-blank}
     */
    'react/jsx-no-target-blank': ['error', {
        enforceDynamicLinks: 'always',
    }],

    /**
     * Disallow undeclared variables in JSX
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md | jsx-no-undef}
     */
    'react/jsx-no-undef': 'error',

    /**
     * Disallow unnecessary fragments
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md | jsx-no-useless-fragment}
     */
    'react/jsx-no-useless-fragment': 'error',

    /**
     * Require one JSX element per line
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md | jsx-one-expression-per-line}
     */
    'react/jsx-one-expression-per-line': ['error', {
        allow: 'single-child',
    }],

    /**
     * Enforce PascalCase for user-defined JSX components
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md | jsx-pascal-case}
     */
    'react/jsx-pascal-case': ['error', {
        allowAllCaps: true,
        ignore: [],
    }],

    /**
     * Disallow multiple spaces between inline JSX props
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-multi-spaces.md | jsx-props-no-multi-spaces}
     */
    'react/jsx-props-no-multi-spaces': 'error',

    /**
     * Disallow JSX prop spreading the same identifier multiple times
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spread-multi.md | jsx-props-no-spread-multi}
     */
    'react/jsx-props-no-spread-multi': 'error',

    /**
     * Disallow JSX prop spreading
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md | jsx-props-no-spreading}
     */
    'react/jsx-props-no-spreading': ['error', {
        html: 'enforce',
        custom: 'enforce',
        explicitSpread: 'ignore',
        exceptions: [],
    }],

    /**
     * Enforce defaultProps declarations alphabetical sorting
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-sort-default-props.md | jsx-sort-default-props}
     */
    'react/jsx-sort-default-props': ['off', {
        ignoreCase: true,
    }],

    /**
     * Enforce props alphabetical sorting
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md | jsx-sort-props}
     */
    'react/jsx-sort-props': ['off', {
        ignoreCase: true,
        callbacksLast: false,
        shorthandFirst: false,
        shorthandLast: false,
        noSortAlphabetically: false,
        reservedFirst: true,
    }],

    /**
     * Enforce spacing before closing bracket in JSX
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-space-before-closing.md | jsx-space-before-closing}
     */
    'react/jsx-space-before-closing': ['off', 'always'],

    /**
     * Enforce whitespace in and around the JSX opening and closing brackets
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md | jsx-tag-spacing}
     */
    'react/jsx-tag-spacing': ['error', {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never',
    }],

    /**
     * Disallow React to be incorrectly marked as unused
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md | jsx-uses-react}
     */
    'react/jsx-uses-react': 'error',

    /**
     * Disallow variables used in JSX to be incorrectly marked as unused
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md | jsx-uses-vars}
     */
    'react/jsx-uses-vars': 'error',

    /**
     * Disallow missing parentheses around multiline JSX
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md | jsx-wrap-multilines}
     */
    'react/jsx-wrap-multilines': ['error', {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        'return': 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line',
    }],

    /**
     * Disallow when this.state is accessed within setState
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md | no-access-state-in-setstate}
     */
    'react/no-access-state-in-setstate': 'error',

    /**
     * Disallow adjacent inline elements not separated by whitespace.
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-adjacent-inline-elements.md | no-adjacent-inline-elements}
     */
    'react/no-adjacent-inline-elements': 'off',

    /**
     * Disallow usage of Array index in keys
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md | no-array-index-key}
     */
    'react/no-array-index-key': 'error',

    /**
     * Lifecycle methods should be methods on the prototype, not class fields
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-arrow-function-lifecycle.md | no-arrow-function-lifecycle}
     */
    'react/no-arrow-function-lifecycle': 'error',

    /**
     * Disallow passing of children as props
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md | no-children-prop}
     */
    'react/no-children-prop': 'error',

    /**
     * Disallow usage of dangerous JSX properties
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger.md | no-danger}
     */
    'react/no-danger': 'warn',

    /**
     * Disallow when a DOM element is using both children and dangerouslySetInnerHTML
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md | no-danger-with-children}
     */
    'react/no-danger-with-children': 'error',

    /**
     * Disallow usage of deprecated methods
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md | no-deprecated}
     */
    'react/no-deprecated': 'error',

    /**
     * Disallow usage of setState in componentDidMount
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md | no-did-mount-set-state}
     */
    'react/no-did-mount-set-state': 'off',

    /**
     * Disallow usage of setState in componentDidUpdate
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md | no-did-update-set-state}
     */
    'react/no-did-update-set-state': 'error',

    /**
     * Disallow direct mutation of this.state
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md | no-direct-mutation-state}
     */
    'react/no-direct-mutation-state': 'error',

    /**
     * Disallow usage of findDOMNode
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md | no-find-dom-node}
     */
    'react/no-find-dom-node': 'error',

    /**
     * Disallow usage of invalid attributes
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-invalid-html-attribute.md | no-invalid-html-attribute}
     */
    'react/no-invalid-html-attribute': 'error',

    /**
     * Disallow usage of isMounted
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md | no-is-mounted}
     */
    'react/no-is-mounted': 'error',

    /**
     * Disallow multiple component definition per file
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md | no-multi-comp}
     */
    'react/no-multi-comp': 'off',

    /**
     * Enforce that namespaces are not used in React elements
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-namespace.md | no-namespace}
     */
    'react/no-namespace': 'error',

    /**
     * Disallow usage of referential-type variables as default param in functional component
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-object-type-as-default-prop.md | no-object-type-as-default-prop}
     */
    'react/no-object-type-as-default-prop': 'error',

    /**
     * Disallow usage of shouldComponentUpdate when extending React.PureComponent
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md | no-redundant-should-component-update}
     */
    'react/no-redundant-should-component-update': 'error',

    /**
     * Disallow usage of the return value of ReactDOM.render
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md | no-render-return-value}
     */
    'react/no-render-return-value': 'error',

    /**
     * Disallow usage of setState
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-set-state.md | no-set-state}
     */
    'react/no-set-state': 'off',

    /**
     * Disallow using string references
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md | no-string-refs}
     */
    'react/no-string-refs': 'error',

    /**
     * Disallow `this` from being used in stateless functional components
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md | no-this-in-sfc}
     */
    'react/no-this-in-sfc': 'error',

    /**
     * Disallow common typos
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-typos.md | no-typos}
    */
    'react/no-typos': 'error',

    /**
     * Disallow unescaped HTML entities from appearing in markup
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md | no-unescaped-entities}
     */
    'react/no-unescaped-entities': 'error',

    /**
     * Disallow usage of unknown DOM property
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md | no-unknown-property}
     */
    'react/no-unknown-property': 'error',

    /**
     * Disallow usage of unsafe lifecycle methods
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unsafe.md | no-unsafe}
     */
    'react/no-unsafe': 'off',

    /**
     * Disallow creating unstable components inside components
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unstable-nested-components.md | no-unstable-nested-components}
     */
    'react/no-unstable-nested-components': 'error',

    /**
     * Disallow declaring unused methods of component class
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-class-component-methods.md | no-unused-class-component-methods}
     */
    'react/no-unused-class-component-methods': 'error',

    /**
     * Disallow definitions of unused propTypes
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md | no-unused-prop-types}
     */
    'react/no-unused-prop-types': ['error', {
        customValidators: [
        ],
        skipShapeProps: true,
    }],

    /**
     * Disallow definitions of unused state
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md | no-unused-state}
     */
    'react/no-unused-state': 'error',

    /**
     * Disallow usage of setState in componentWillUpdate
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md | no-will-update-set-state}
     */
    'react/no-will-update-set-state': 'error',

    /**
     * Enforce ES5 or ES6 class for React Components
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md | prefer-es6-class}
     */
    'react/prefer-es6-class': ['error', 'always'],

    /**
     * Prefer exact proptype definitions
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-exact-props.md | prefer-exact-props}
     */
    'react/prefer-exact-props': 'error',

    /**
     * Enforce that props are read-only
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-read-only-props.md | prefer-read-only-props}
     */
    'react/prefer-read-only-props': 'off',

    /**
     * Enforce stateless components to be written as a pure function
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md | prefer-stateless-function}
     */
    'react/prefer-stateless-function': ['error', {
        ignorePureComponents: true,
    }],

    /**
     * Disallow missing props validation in a React component definition
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prop-types.md | prop-types}
     */
    'react/prop-types': ['error', {
        ignore: [],
        customValidators: [],
        skipUndeclared: false,
    }],

    /**
     * Disallow missing React when using JSX
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md | react-in-jsx-scope}
     */
    'react/react-in-jsx-scope': 'error',

    /**
     * Enforce a defaultProps definition for every prop that is not a required prop
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-default-props.md | require-default-props}
     */
    'react/require-default-props': ['error', {
        forbidDefaultForRequired: true,
    }],

    /**
     * Enforce React components to have a shouldComponentUpdate method
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-optimization.md | require-optimization}
     */
    'react/require-optimization': ['off', {
        allowDecorators: [],
    }],

    /**
     * Enforce ES5 or ES6 class for returning value in render function
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-render-return.md | require-render-return}
     */
    'react/require-render-return': 'error',

    /**
     * Disallow extra closing tags for components without children
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md | self-closing-comp}
     */
    'react/self-closing-comp': 'error',

    /**
     * Enforce component methods order
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/sort-comp.md | sort-comp}
     */
    'react/sort-comp': ['error', {
        order: [
            'static-variables',
            'static-methods',
            'instance-variables',
            'lifecycle',
            '/^handle.+$/',
            '/^on.+$/',
            'getters',
            'setters',
            '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
            'instance-methods',
            'everything-else',
            'rendering',
        ],
        groups: {
            lifecycle: [
                'displayName',
                'propTypes',
                'contextTypes',
                'childContextTypes',
                'mixins',
                'statics',
                'defaultProps',
                'constructor',
                'getDefaultProps',
                'getInitialState',
                'state',
                'getChildContext',
                'getDerivedStateFromProps',
                'componentWillMount',
                'UNSAFE_componentWillMount',
                'componentDidMount',
                'componentWillReceiveProps',
                'UNSAFE_componentWillReceiveProps',
                'shouldComponentUpdate',
                'componentWillUpdate',
                'UNSAFE_componentWillUpdate',
                'getSnapshotBeforeUpdate',
                'componentDidUpdate',
                'componentDidCatch',
                'componentWillUnmount',
            ],
            rendering: [
                '/^render.+$/',
                'render',
            ],
        },
    }],

    /**
     * Enforce defaultProps declarations alphabetical sorting
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/sort-default-props.md | sort-default-props}
     */
    'react/sort-default-props': ['off', {
        ignoreCase: false,
    }],

    /**
     * Enforce propTypes declarations alphabetical sorting
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md | sort-prop-types}
     */
    'react/sort-prop-types': ['off', {
        ignoreCase: true,
        callbacksLast: false,
        requiredFirst: false,
        sortShapeProp: true,
    }],

    /**
     * Enforce class component state initialization style
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md | state-in-constructor}
     */
    'react/state-in-constructor': ['error', 'always'],

    /**
     * Enforces where React component static properties should be positioned.
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md | static-property-placement}
     */
    'react/static-property-placement': ['error', 'property assignment'],

    /**
     * Enforce style prop value is an object
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md | style-prop-object}
     */
    'react/style-prop-object': 'error',

    /**
     * Disallow void DOM elements (e.g. `img`, `br`) from receiving children
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md | void-dom-elements-no-children}
     */
    'react/void-dom-elements-no-children': 'error',
});

export { react };
