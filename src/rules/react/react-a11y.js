const reactA11y = Object.freeze({
    /**
     * Enforce emojis are wrapped in `span` and provide screen reader access.
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/accessible-emoji.md | accessible-emoji}
     */
    'jsx-a11y/accessible-emoji': 'off',

    /**
     * Enforce all elements that require alternative text have meaningful information to relay back to end user.
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/alt-text.md | alt-text}
     */
    'jsx-a11y/alt-text': ['error', {
        elements: ['img', 'object', 'area', 'input[type="image"]'],
        img: [],
        object: [],
        area: [],
        'input[type="image"]': [],
    }],

    /**
     * Enforce `a` text to not exactly match "click here", "here", "link", or "a link".
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/anchor-ambiguous-text.md | anchor-ambiguous-text}
     */
    'jsx-a11y/anchor-ambiguous-text': 'off',

    /**
     * Enforce all anchors to contain accessible content.
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/anchor-has-content.md | anchor-has-content}
     */
    'jsx-a11y/anchor-has-content': ['error', {
        components: [],
    }],

    /**
     * Enforce all anchors are valid, navigable elements.
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/anchor-is-valid.md | anchor-is-valid}
     */
    'jsx-a11y/anchor-is-valid': ['error', {
        components: ['Link'],
        specialLink: ['to'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
    }],

    /**
     * Enforce elements with aria-activedescendant are tabbable.
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-activedescendant-has-tabindex.md | aria-activedescendant-has-tabindex}
     */
    'jsx-a11y/aria-activedescendant-has-tabindex': 'error',

    /**
     * Enforc e all `aria-*` props are valid.
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-props.md | aria-props}
     */
    'jsx-a11y/aria-props': 'error',

    /**
     * Enforce ARIA state and property values are valid.
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-proptypes.md | aria-proptypes}
     */
    'jsx-a11y/aria-proptypes': 'error',

    /**
     * Enforce that elements with ARIA roles must use a valid, non-abstract ARIA role.
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-role.md | aria-role}
     */
    'jsx-a11y/aria-role': ['error', {
        ignoreNonDOM: false,
    }],

    /**
     * Enforce that elements that do not support ARIA roles, states, and properties do not have those attributes.
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-unsupported-elements.md | aria-unsupported-elements}
     */
    'jsx-a11y/aria-unsupported-elements': 'error',

    /**
     * Enforce that autocomplete attributes are used correctly.
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/autocomplete-valid.md | autocomplete-valid}
     */
    'jsx-a11y/autocomplete-valid': ['off', {
        inputComponents: [],
    }],

    /**
     * Enforce a clickable non-interactive element has at least one keyboard event listener.
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/click-events-have-key-events.md | click-events-have-key-events}
     */
    'jsx-a11y/click-events-have-key-events': 'error',

    /**
     * Enforce that a control (an interactive element) has a text label.
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/control-has-associated-label.md | control-has-associated-label}
     */
    'jsx-a11y/control-has-associated-label': ['error', {
        labelAttributes: ['label'],
        controlComponents: [],
        ignoreElements: [
            'audio',
            'canvas',
            'embed',
            'input',
            'textarea',
            'tr',
            'video',
        ],
        ignoreRoles: [
            'grid',
            'listbox',
            'menu',
            'menubar',
            'radiogroup',
            'row',
            'tablist',
            'toolbar',
            'tree',
            'treegrid',
        ],
        depth: 5,
    }],

    /**
     * Enforce heading (`h1`, `h2`, etc) elements contain accessible content.
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/heading-has-content.md | heading-has-content}
     */
    'jsx-a11y/heading-has-content': ['error', {
        components: [''],
    }],

    /**
     * Enforce `html` element has `lang` prop.
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/html-has-lang.md | html-has-lang}
     */
    'jsx-a11y/html-has-lang': 'error',

    /**
     * Enforce iframe elements have a title attribute.
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/iframe-has-title.md | iframe-has-title}
     */
    'jsx-a11y/iframe-has-title': 'error',

    /**
     * Enforce `img` alt prop does not contain the word "image", "picture", or "photo".
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/img-redundant-alt.md | img-redundant-alt}
     */
    'jsx-a11y/img-redundant-alt': 'error',

    /**
     * Enforce that elements with interactive handlers like `onClick` must be focusable.
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/interactive-supports-focus.md | interactive-supports-focus}
     */
    'jsx-a11y/interactive-supports-focus': 'error',

    /**
     * Enforce that a `label` tag has a text label and an associated control.
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/label-has-associated-control.md | label-has-associated-control}
     */
    'jsx-a11y/label-has-associated-control': ['error', {
        labelComponents: [],
        labelAttributes: [],
        controlComponents: [],
        assert: 'both',
        depth: 25,
    }],

    /**
     * Enforce that `label` elements have the `htmlFor` prop.
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/label-has-for.md | label-has-for}
     */
    'jsx-a11y/label-has-for': ['off', {
        components: [],
        required: {
            every: ['nesting', 'id'],
        },
        allowChildren: false,
    }],

    /**
     * Enforce lang attribute has a valid value.
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/lang.md | lang}
     */
    'jsx-a11y/lang': 'error',

    /**
     * Enforces that `audio` and `video` elements must have a `track` for captions.
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/media-has-caption.md | media-has-caption}
     */
    'jsx-a11y/media-has-caption': ['error', {
        audio: [],
        video: [],
        track: [],
    }],

    /**
     * Enforce that `onMouseOver`/`onMouseOut` are accompanied by `onFocus`/`onBlur` for keyboard-only users.
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/mouse-events-have-key-events.md | mouse-events-have-key-events}
     */
    'jsx-a11y/mouse-events-have-key-events': 'error',

    /**
     * Enforce that the `accessKey` prop is not used on any element to avoid complications with keyboard commands used by a screen reader.
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-access-key.md | no-access-key}
     */
    'jsx-a11y/no-access-key': 'error',

    /**
     * Disallow `aria-hidden="true"` from being set on focusable elements.
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-aria-hidden-on-focusable.md | no-aria-hidden-on-focusable}
     */
    'jsx-a11y/no-aria-hidden-on-focusable': 'error',

    /**
     * Enforce autoFocus prop is not used.
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-autofocus.md | no-autofocus}
     */
    'jsx-a11y/no-autofocus': ['error', {
        ignoreNonDOM: true,
    }],

    /**
     * Enforce distracting elements are not used.
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-distracting-elements.md | no-distracting-elements}
     */
    'jsx-a11y/no-distracting-elements': ['error', {
        elements: ['marquee', 'blink'],
    }],

    /**
     * Interactive elements should not be assigned non-interactive roles.
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-interactive-element-to-noninteractive-role.md | no-interactive-element-to-noninteractive-role}
     */
    'jsx-a11y/no-interactive-element-to-noninteractive-role': ['error', {
        tr: ['none', 'presentation'],
    }],

    /**
     * Non-interactive elements should not be assigned mouse or keyboard event listeners.
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-noninteractive-element-interactions.md | no-noninteractive-element-interactions}
     */
    'jsx-a11y/no-noninteractive-element-interactions': ['error', {
        handlers: [
            'onClick',
            'onMouseDown',
            'onMouseUp',
            'onKeyPress',
            'onKeyDown',
            'onKeyUp',
        ],
    }],

    /**
     * Non-interactive elements should not be assigned interactive roles.
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-noninteractive-element-to-interactive-role.md | no-noninteractive-element-to-interactive-role}
     */
    'jsx-a11y/no-noninteractive-element-to-interactive-role': ['error', {
        ul: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
        ol: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
        li: ['menuitem', 'option', 'row', 'tab', 'treeitem'],
        table: ['grid'],
        td: ['gridcell'],
    }],

    /**
     * `tabIndex` should only be declared on interactive elements.
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-noninteractive-tabindex.md | no-noninteractive-tabindex}
     */
    'jsx-a11y/no-noninteractive-tabindex': ['error', {
        tags: [],
        roles: ['tabpanel'],
        allowExpressionValues: true,
    }],

    /**
     * Enforce usage of `onBlur` over `onChange` on select menus for accessibility.
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-onchange.md | no-onchange}
     */
    'jsx-a11y/no-onchange': 'off',

    /**
     * Enforce explicit role property is not the same as implicit/default role property on element.
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-redundant-roles.md | no-redundant-roles}
     */
    'jsx-a11y/no-redundant-roles': ['error', {
        nav: ['navigation'],
    }],
    /**
     * Enforce that non-interactive, visible elements (such as `div`) that have click handlers use the role attribute.
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-static-element-interactions.md | no-static-element-interactions}
     */
    'jsx-a11y/no-static-element-interactions': ['error', {
        handlers: [
            'onClick',
            'onMouseDown',
            'onMouseUp',
            'onKeyPress',
            'onKeyDown',
            'onKeyUp',
        ],
    }],
    /**
     * Enforces using semantic DOM elements over the ARIA `role` property.
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/prefer-tag-over-role.md | prefer-tag-over-role}
     */
    'jsx-a11y/prefer-tag-over-role': 'error',

    /**
     * Enforce that elements with ARIA roles must have all required attributes for that role.
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/role-has-required-aria-props.md | role-has-required-aria-props}
     */
    'jsx-a11y/role-has-required-aria-props': 'error',

    /**
     * Enforce that elements with explicit or implicit roles defined contain only `aria-*` properties supported by that `role`.
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/role-supports-aria-props.md | role-supports-aria-props}
     */
    'jsx-a11y/role-supports-aria-props': 'error',

    /**
     * Enforce `scope` prop is only used on `th` elements.
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/scope.md | scope}
     */
    'jsx-a11y/scope': 'error',

    /**
     * Enforce `tabIndex` value is not greater than zero.
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/tabindex-no-positive.md | tabindex-no-positive}
     */
    'jsx-a11y/tabindex-no-positive': 'error',
});

export { reactA11y };
