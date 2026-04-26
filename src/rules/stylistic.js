const stylisticRules = Object.freeze({
    /**
     * This rule enforces line breaks after opening and before closing array brackets.
     * @see {@link https://eslint.style/rules/array-bracket-newline | array-bracket-newline}
     */
    '@stylistic/array-bracket-newline': ['off', 'consistent'],

    /**
     * This rule enforces consistent spacing inside array brackets.
     * @see {@link https://eslint.style/rules/array-bracket-spacing | array-bracket-spacing}
     */
    '@stylistic/array-bracket-spacing': ['error', 'never'],

    /**
     * This rule enforces line breaks between array elements.
     * @see {@link https://eslint.style/rules/array-element-newline | array-element-newline}
     */
    '@stylistic/array-element-newline': ['off', {
        multiline: true,
        minItems: 3,
    }],

    /**
     * This rule enforces parentheses around arrow function parameters regardless of arity.
     * @see {@link https://eslint.style/rules/arrow-parens | arrow-parens}
     */
    '@stylistic/arrow-parens': ['error', 'always'],

    /**
     * This rule takes an object argument with before and after properties, each with a Boolean value.
     * @see {@link https://eslint.style/rules/arrow-spacing | arrow-spacing}
     */
    '@stylistic/arrow-spacing': ['error', {
        before: true,
        after: true,
    }],

    /**
     * This rule enforces consistent spacing inside an open block token and the next token on the same line.
     * This rule also enforces consistent spacing inside a close block token and previous token on the same line.
     * @see {@link https://eslint.style/rules/block-spacing | block-spacing}
     */
    '@stylistic/block-spacing': ['error', 'always'],

    /**
     * This rule enforces consistent brace style for blocks.
     * @see {@link https://eslint.style/rules/brace-style | brace-style}
     */
    '@stylistic/brace-style': ['error', '1tbs', {
        allowSingleLine: true,
    }],

    /**
     * This rule enforces consistent use of trailing commas in object and array literals.
     * @see {@link https://eslint.style/rules/comma-dangle | comma-dangle}
     */
    '@stylistic/comma-dangle': ['error', {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
    }],

    /**
     * This rule enforces consistent spacing before and after commas in:
     * * variable declarations,
     * * array literals,
     * * object literals,
     * * function parameters,
     * * sequences.
     * @see {@link https://eslint.style/rules/comma-spacing | comma-spacing}
     */
    '@stylistic/comma-spacing': ['error', {
        before: false,
        after: true,
    }],

    /**
     * This rule enforce consistent comma style in array literals, object literals, and variable declarations.
     * @see {@link https://eslint.style/rules/comma-style | comma-style}
     */
    '@stylistic/comma-style': ['error', 'last', {
        exceptions: {
            ArrayExpression: false,
            ArrayPattern: false,
            ArrowFunctionExpression: false,
            CallExpression: false,
            FunctionDeclaration: false,
            FunctionExpression: false,
            ImportDeclaration: false,
            ObjectExpression: false,
            ObjectPattern: false,
            VariableDeclaration: false,
            NewExpression: false,
        },
    }],

    /**
     * This rule enforces consistent spacing inside computed property brackets.
     * @see {@link https://eslint.style/rules/computed-property-spacing | computed-property-spacing}
     */
    '@stylistic/computed-property-spacing': ['error', 'never'],


    /**
     * This rule requires or disallows a line break between { and its following token, and between } and its preceding token of block-like structures.
     * @see {@link https://eslint.style/rules/curly-newline | curly-newline}
     */
    '@stylistic/curly-newline': ['error', {
        IfStatementConsequent: 'always',
        IfStatementAlternative: 'always',
        ForStatement: 'always',
        ForInStatement: 'always',
        ForOfStatement: 'always',
        WhileStatement: 'always',
        DoWhileStatement: 'always',
        SwitchStatement: { consistent: true },
        SwitchCase: { consistent: true },
        TryStatementBlock: 'always',
        TryStatementHandler: 'always',
        TryStatementFinalizer: 'always',
        BlockStatement: 'always',
        ArrowFunctionExpression: { consistent: true },
        FunctionDeclaration: 'always',
        FunctionExpression: 'always',
        Property: 'always',
        ClassBody: 'always',
        StaticBlock: 'always',
        WithStatement: 'always',
        TSModuleBlock: 'always',
    }],

    /**
     * This rule aims to enforce newline consistency in member expressions.
     * This rule prevents the use of mixed newlines around the dot in a member expression.
     * @see {@link https://eslint.style/rules/dot-location | dot-location}
     */
    '@stylistic/dot-location': ['error', 'property'],

    /**
     * This rule enforces at least one newline (or absence thereof) at the end of non-empty files.
     * @see {@link https://eslint.style/rules/eol-last | eol-last}
     */
    '@stylistic/eol-last': ['error', 'always'],

    /**
     * This rule enforces line breaks between arguments of a function call.
     * @see {@link https://eslint.style/rules/function-call-argument-newline | function-call-argument-newline}
     */
    '@stylistic/function-call-argument-newline': ['error', 'consistent'],

    /**
     * This rule requires or disallows spaces between the function name and the opening parenthesis that calls it.
     * @see {@link https://eslint.style/rules/function-call-spacing | function-call-spacing}
     */
    '@stylistic/function-call-spacing': ['error', 'never'],

    /**
     * This rule enforces consistent line breaks inside parentheses of function parameters or arguments.
     * @see {@link https://eslint.style/rules/function-paren-newline | function-paren-newline}
     */
    '@stylistic/function-paren-newline': ['error', 'multiline-arguments'],

    /**
     * This rule aims to enforce spacing around the * of generator functions.
     * @see {@link https://eslint.style/rules/generator-star-spacing | generator-star-spacing}
     */
    '@stylistic/generator-star-spacing': ['error', {
        before: false,
        after: true,
    }],

    /**
     * This rule aims to enforce a consistent location for an arrow function containing an implicit return.
     * @see {@link https://eslint.style/rules/implicit-arrow-linebreak | implicit-arrow-linebreak}
     */
    '@stylistic/implicit-arrow-linebreak': ['error', 'beside'],

    /**
     * This rule enforces a consistent indentation style.
     * @see {@link https://eslint.style/rules/indent | indent}
     */
    '@stylistic/indent': ['error', 4, {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        FunctionDeclaration: {
            parameters: 1,
            body: 1,
        },
        FunctionExpression: {
            parameters: 1,
            body: 1,
        },
        CallExpression: {
            arguments: 1,
        },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        ignoredNodes: [
            'JSXElement',
            'JSXElement > *',
            'JSXAttribute',
            'JSXIdentifier',
            'JSXNamespacedName',
            'JSXMemberExpression',
            'JSXSpreadAttribute',
            'JSXExpressionContainer',
            'JSXOpeningElement',
            'JSXClosingElement',
            'JSXFragment',
            'JSXOpeningFragment',
            'JSXClosingFragment',
            'JSXText',
            'JSXEmptyExpression',
            'JSXSpreadChild',
        ],
        ignoreComments: false,
    }],

    /**
     * Indentation for binary operators in multiline expressions.
     * This is a supplement to the `indent` rule.
     * They are supposed to be used together with the same indentation size.
     * @see {@link https://eslint.style/rules/indent-binary-ops | indent-binary-ops}
     */
    '@stylistic/indent-binary-ops': ['error', 4],


    /**
     * Since React removes extraneous new lines between elements when possible, it is possible to end up with inline elements that are not rendered with spaces between them and adjacent text.
     * This is often indicative of an error, so this rule attempts to detect JSX markup with ambiguous spacing.
     * @see {@link https://eslint.style/rules/jsx-child-element-spacing | jsx-child-element-spacing}
     */
    '@stylistic/jsx-child-element-spacing': 'error',


    /**
     * This rule checks all JSX multiline elements and verifies the location of the closing bracket. By default this one must be aligned with the opening tag.
     * @see {@link https://eslint.style/rules/jsx-closing-bracket-location | jsx-closing-bracket-location}
     */
    '@stylistic/jsx-closing-bracket-location': ['error', 'tag-aligned'],

    /**
     * This rule checks all JSX multiline elements with children (non-self-closing) and verifies the location of the closing tag.
     * The expectation is that the closing tag is aligned with the opening tag on its own line.
     * @see {@link https://eslint.style/rules/jsx-closing-tag-location | jsx-closing-tag-location}
     */
    '@stylistic/jsx-closing-tag-location': ['error', 'tag-aligned'],


    /**
     * By default, this rule will check for and warn about unnecessary curly braces in both JSX props and children.
     * For the sake of backwards compatibility, prop values that are JSX elements are not considered by default.
     * @see {@link https://eslint.style/rules/jsx-curly-brace-presence | jsx-curly-brace-presence}
     */
    '@stylistic/jsx-curly-brace-presence': ['error', {
        props: 'never',
        children: 'never',
        propElementValues: 'always',
    }],

    /**
     * This rule enforces consistent linebreaks inside of curlies of jsx curly expressions.
     * @see {@link https://eslint.style/rules/jsx-curly-newline | jsx-curly-newline}
     */
    '@stylistic/jsx-curly-newline': ['error', {
        multiline: 'consistent',
        singleline: 'consistent',
    }],

    /**
     * This rule aims to maintain consistency around the spacing inside of JSX attributes and expressions inside element children.
     * @see {@link https://eslint.style/rules/jsx-curly-spacing | jsx-curly-spacing}
     */
    '@stylistic/jsx-curly-spacing': ['error', {
        when: 'never',
        children: true,
    }],

    /**
     * This rule will enforce consistency of spacing around equal signs in JSX attributes, by requiring or disallowing one or more spaces before and after =.
     * @see {@link https://eslint.style/rules/jsx-equals-spacing | jsx-equals-spacing}
     */
    '@stylistic/jsx-equals-spacing': ['error', 'never'],

    /**
     * This rule checks whether the first property of all JSX elements is correctly placed.
     * @see {@link https://eslint.style/rules/jsx-first-prop-new-line | jsx-first-prop-new-line}
     */
    '@stylistic/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],

    /**
     * This rule checks whether a line break is needed before and after all JSX elements that serve as function arguments.
     * @see {@link https://eslint.style/rules/jsx-function-call-newline | jsx-function-call-newline}
     */
    '@stylistic/jsx-function-call-newline': ['error', 'multiline'],

    /**
     * This rule is aimed to enforce consistent indentation style.
     * @see {@link https://eslint.style/rules/jsx-indent-props | jsx-indent-props}
     */
    '@stylistic/jsx-indent-props': ['error', 4],

    /**
     * Enforce maximum of props on a single line in JSX.
     * @see {@link https://eslint.style/rules/jsx-max-props-per-line | jsx-max-props-per-line}
     */
    '@stylistic/jsx-max-props-per-line': ['error', {
        maximum: 4,
    }],

    /**
     * This is a stylistic rule intended to make JSX code more readable by requiring or preventing lines between adjacent JSX elements and expressions.
     * @see {@link https://eslint.style/rules/jsx-newline | jsx-newline}
     */
    '@stylistic/jsx-newline': ['error', { prevent: true }],

    /**
     * Require one JSX element per line.
     * @see {@link https://eslint.style/rules/jsx-one-expression-per-line | jsx-one-expression-per-line}
     */
    '@stylistic/jsx-one-expression-per-line': ['error', {
        allow: 'single-line',
    }],

    /**
     * Enforces coding style that user-defined JSX components are defined and referenced in PascalCase.
     * @see {@link https://eslint.style/rules/jsx-pascal-case | jsx-pascal-case}
     */
    '@stylistic/jsx-pascal-case': 'error',

    /**
     * This rule checks the line break style of JSX props based on the first prop's position.
     * If the first prop is on the same line as the opening tag, all props should be on the same line.
     * If the first prop is on a new line, all props should be on separate lines.
     * @see {@link https://eslint.style/rules/jsx-props-style | jsx-props-style}
     */
    '@stylistic/exp-jsx-props-style': ['error', {
        singleLine: {
            maxItems: 4,
        },
        multiLine: {
            minItems: 0,
            maxItemsPerLine: 1,
        },
    }],

    /**
     * JSX attribute values can contain string literals, which are delimited with single or double quotes.
     * @see {@link https://eslint.style/rules/jsx-quotes | jsx-quotes}
     */
    '@stylistic/jsx-quotes': ['error', 'prefer-double'],

    /**
     * Disallow extra closing tags for components without children.
     * Components without children can be self-closed to avoid unnecessary extra closing tag.
     * @see {@link https://eslint.style/rules/jsx-self-closing-comp | jsx-self-closing-comp}
     */
    '@stylistic/jsx-self-closing-comp': ['error', {
        component: true,
        html: true,
    }],

    /**
     * This rule checks the whitespace inside and surrounding the JSX syntactic elements.
     * @see {@link https://eslint.style/rules/jsx-tag-spacing | jsx-tag-spacing}
     */
    '@stylistic/jsx-tag-spacing': ['error', {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'proportional-always',
    }],

    /**
     * Disallow missing parentheses around multiline JSX.
     * @see {@link https://eslint.style/rules/jsx-wrap-multilines | jsx-wrap-multilines}
     */
    '@stylistic/jsx-wrap-multilines': ['error', {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        'return': 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line',
        propertyValue: 'parens-new-line',
    }],

    /**
     * This rule enforces consistent spacing between keys and values in object literal properties.
     * In the case of long lines, it is acceptable to add a new line wherever whitespace is allowed.
     * @see {@link https://eslint.style/rules/key-spacing | key-spacing}
     */
    '@stylistic/key-spacing': ['error', {
        beforeColon: false,
        afterColon: true,
    }],

    /**
     * This rule enforces consistent spacing around keywords and keyword-like tokens:
     * * as (in module declarations),
     * * async (of async functions),
     * * await (of await expressions),
     * * break,
     * * case,
     * * catch,
     * * class,
     * * const,
     * * continue,
     * * debugger,
     * * default,
     * * delete,
     * * do,
     * * else,
     * * export,
     * * extends,
     * * finally,
     * * for,
     * * from (in module declarations),
     * * function,
     * * get (of getters),
     * * if,
     * * import,
     * * in (in for-in statements),
     * * let,
     * * new,
     * * of (in for-of statements),
     * * return,
     * * set (of setters),
     * * static,
     * * super,
     * * switch,
     * * this,
     * * throw,
     * * try,
     * * typeof,
     * * var,
     * * void,
     * * while,
     * * with,
     * * yield
     *
     * This rule is designed carefully not to conflict with other spacing rules: it does not apply to spacing where other rules report problems.
     * @see {@link https://eslint.style/rules/keyword-spacing | keyword-spacing}
     */
    '@stylistic/keyword-spacing': ['error', {
        before: true,
        after: true,
        overrides: {
            'return': {
                after: true,
            },
            'throw': {
                after: true,
            },
            'case': {
                after: true,
            },
        },
    }],

    /**
     * This rule enforces consistent position of line comments. Block comments are not affected by this rule.
     * @see {@link https://eslint.style/rules/line-comment-position | line-comment-position}
     */
    '@stylistic/line-comment-position': ['off', {
        position: 'above',
        ignorePattern: '',
        applyDefaultPatterns: true,
    }],

    /**
     * This rule enforces consistent line endings independent of operating system, VCS, or editor used across your codebase.
     * @see {@link https://eslint.style/rules/linebreak-style | linebreak-style}
     */
    '@stylistic/linebreak-style': ['error', 'unix'],

    /**
     * This rule requires empty lines before and/or after comments.
     * It can be enabled separately for both block (/*) and line (//) comments.
     * This rule does not apply to comments that appear on the same line as code and does not require empty lines at the beginning or end of a file.
     * @see {@link https://eslint.style/rules/lines-around-comment | lines-around-comment}
     */
    '@stylistic/lines-around-comment': 'off',

    /**
     * Examples of incorrect code for this rule:
     * @see {@link https://eslint.style/rules/lines-between-class-members | lines-between-class-members}
     */
    '@stylistic/lines-between-class-members': ['error', 'always', {
        exceptAfterSingleLine: true,
    }],

    /**
     * Enforce consistent spacing and line break styles inside brackets.
     * @see {@link https://eslint.style/rules/list-style | list-style}
     */
    '@stylistic/exp-list-style': ['error', {
        singleLine: {
            spacing: 'never',
            maxItems: Number.POSITIVE_INFINITY,
        },
        multiLine: {
            minItems: 0,
        },
        overrides: {
            '{}': {
                singleLine: {
                    spacing: 'always',
                },
            },
        },
    }],

    /**
     * This rule enforces a maximum line length to increase code readability and maintainability.
     * The length of a line is defined as the number of Unicode characters in the line.
     * @see {@link https://eslint.style/rules/max-len | max-len}
     */
    '@stylistic/max-len': ['error', {
        code: 150,
        tabWidth: 4,
        comments: 200,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreUrls: true,
        ignoreRegExpLiterals: true,
        ignoreTemplateLiterals: true,
    }],

    /**
     * This rule enforces a maximum number of statements allowed per line.
     * @see {@link https://eslint.style/rules/max-statements-per-line | max-statements-per-line}
     */
    '@stylistic/max-statements-per-line': ['off', {
        max: 1,
    }],

    /**
     * This rule enforces keeping to one configurable code style.
     * It can also standardize the presence (or absence) of a delimiter in the last member of a construct,
     * as well as a separate delimiter syntax for single line declarations.
     * @see {@link https://eslint.style/rules/member-delimiter-style | member-delimiter-style}
     */
    '@stylistic/member-delimiter-style': ['error', {
        multiline: {
            delimiter: 'comma',
            requireLast: true,
        },
        singleline: {
            delimiter: 'comma',
            requireLast: false,
        },
        multilineDetection: 'brackets',
    }],

    /**
     * This rule aims to enforce a particular style for multiline comments.
     * @see {@link https://eslint.style/rules/multiline-comment-style | multiline-comment-style}
     */
    '@stylistic/multiline-comment-style': ['warn', 'starred-block'],

    /**
     * This rule enforces or disallows newlines between operands of a ternary expression.
     * Note: The location of the operators is not enforced by this rule.
     * Please see the operator-linebreak rule if you are interested in enforcing the location of the operators themselves.
     * @see {@link https://eslint.style/rules/multiline-ternary | multiline-ternary}
     */
    '@stylistic/multiline-ternary': ['off', 'always-multiline'],

    /**
     * This rule can enforce or disallow parentheses when invoking a constructor with no arguments using the new keyword.
     * @see {@link https://eslint.style/rules/new-parens | new-parens}
     */
    '@stylistic/new-parens': 'error',

    /**
     * This rule requires a newline after each call in a method chain or deep member access.
     * Computed property accesses such as instance[something] are excluded.
     * @see {@link https://eslint.style/rules/newline-per-chained-call | newline-per-chained-call}
     */
    '@stylistic/newline-per-chained-call': ['error', {
        ignoreChainWithDepth: 4,
    }],

    /**
     * Examples of incorrect code for this rule:
     * @see {@link https://eslint.style/rules/no-confusing-arrow | no-confusing-arrow}
     */
    '@stylistic/no-confusing-arrow': ['error', {
        allowParens: true,
    }],

    /**
     * This rule always ignores extra parentheses around the following:
     * @see {@link https://eslint.style/rules/no-extra-parens | no-extra-parens}
     */
    '@stylistic/no-extra-parens': ['off', 'all', {
        conditionalAssign: true,
        nestedBinaryExpressions: false,
        returnAssign: false,
        ignoreJSX: 'all',
        enforceForArrowConditionals: false,
    }],

    /**
     * This rule disallows unnecessary semicolons.
     * @see {@link https://eslint.style/rules/no-extra-semi | no-extra-semi}
     */
    '@stylistic/no-extra-semi': 'error',

    /**
     * This rule is aimed at eliminating floating decimal points.
     * Will warn whenever a numeric value has a decimal point but is missing a number either before or after it.
     * @see {@link https://eslint.style/rules/no-floating-decimal | no-floating-decimal}
     */
    '@stylistic/no-floating-decimal': 'error',

    /**
     * This rule checks BinaryExpression, LogicalExpression and ConditionalExpression.
     * @see {@link https://eslint.style/rules/no-mixed-operators | no-mixed-operators}
     */
    '@stylistic/no-mixed-operators': ['error', {
        groups: [
            [
                '%',
                '**',
            ],
            [
                '%',
                '+',
            ],
            [
                '%',
                '-',
            ],
            [
                '%',
                '*',
            ],
            [
                '%',
                '/',
            ],
            [
                '/',
                '*',
            ],
            [
                '&',
                '|',
                '<<',
                '>>',
                '>>>',
            ],
            [
                '==',
                '!=',
                '===',
                '!==',
            ],
            [
                '&&',
                '||',
            ],
        ],
        allowSamePrecedence: false,
    }],

    /**
     * This rule disallows mixed spaces and tabs for indentation.
     * @see {@link https://eslint.style/rules/no-mixed-spaces-and-tabs | no-mixed-spaces-and-tabs}
     */
    '@stylistic/no-mixed-spaces-and-tabs': 'error',

    /**
     * This rule aims to disallow multiple whitespace around:
     * * logical expressions,
     * * conditional expressions,
     * * declarations,
     * * array elements,
     * * object properties,
     * * sequences,
     * * function parameters.
     * @see {@link https://eslint.style/rules/no-multi-spaces | no-multi-spaces}
     */
    '@stylistic/no-multi-spaces': ['error', {
        ignoreEOLComments: false,
    }],

    /**
     * This rule aims to reduce the scrolling required when reading through your code.
     * It will warn when the maximum amount of empty lines has been exceeded.
     * @see {@link https://eslint.style/rules/no-multiple-empty-lines | no-multiple-empty-lines}
     */
    '@stylistic/no-multiple-empty-lines': ['error', {
        max: 2,
        maxBOF: 0,
        maxEOF: 0,
    }],

    /**
     * This rule looks for tabs anywhere inside a file: code, comments or anything else.
     * @see {@link https://eslint.style/rules/no-tabs | no-tabs}
     */
    '@stylistic/no-tabs': 'error',

    /**
     * This rule disallows trailing whitespace (spaces, tabs, and other Unicode whitespace characters) at the end of lines.
     * @see {@link https://eslint.style/rules/no-trailing-spaces | no-trailing-spaces}
     */
    '@stylistic/no-trailing-spaces': ['error', {
        skipBlankLines: false,
        ignoreComments: false,
    }],

    /**
     * This rule disallows whitespace around the dot or before the opening bracket before properties of objects if they are on the same line.
     * This rule allows whitespace when the object and property are on separate lines, as it is common to add newlines to longer chains of properties:
     * @see {@link https://eslint.style/rules/no-whitespace-before-property | no-whitespace-before-property}
     */
    '@stylistic/no-whitespace-before-property': 'error',

    /**
     * This rule aims to enforce a consistent location for single-line statements.
     * @see {@link https://eslint.style/rules/nonblock-statement-body-position | nonblock-statement-body-position}
     */
    '@stylistic/nonblock-statement-body-position': ['error', 'beside', {
        overrides: {},
    }],

    /**
     * This rule requires or disallows a line break.
     * @see {@link https://eslint.style/rules/object-curly-newline | object-curly-newline}
     */
    '@stylistic/object-curly-newline': ['error', {
        ObjectExpression: {
            minProperties: 7,
            multiline: true,
            consistent: true,
        },
        ObjectPattern: {
            minProperties: 7,
            multiline: true,
            consistent: true,
        },
        ImportDeclaration: {
            minProperties: 8,
            multiline: true,
            consistent: true,
        },
        ExportDeclaration: {
            minProperties: 8,
            multiline: true,
            consistent: true,
        },
    }],

    /**
     * This rule enforces consistent spacing inside braces of object literals, destructuring assignments, and import/export specifiers.
     * @see {@link https://eslint.style/rules/object-curly-spacing | object-curly-spacing}
     */
    '@stylistic/object-curly-spacing': ['error', 'always'],

    /**
     * This rule permits you to restrict the locations of property specifications in object literals.
     * You may prohibit any part of any property specification from appearing on the same line as any part of any other property specification.
     * You may make this prohibition absolute, or, by invoking an object option, you may allow an exception,
     * permitting an object literal to have all parts of all of its property specifications on a single line.
     * @see {@link https://eslint.style/rules/object-property-newline | object-property-newline}
     */
    '@stylistic/object-property-newline': ['error', {
        allowAllPropertiesOnSameLine: true,
    }],

    /**
     * This rule enforces a consistent newlines around variable declarations.
     * This rule ignores variable declarations inside for loop conditionals.
     * @see {@link https://eslint.style/rules/one-var-declaration-per-line | one-var-declaration-per-line}
     */
    '@stylistic/one-var-declaration-per-line': ['error', 'always'],

    /**
     * This rule enforces a consistent linebreak style for operators.
     * @see {@link https://eslint.style/rules/operator-linebreak | operator-linebreak}
     */
    '@stylistic/operator-linebreak': ['error', 'before', {
        overrides: {
            '=': 'none',
        },
    }],

    /**
     * This rule enforces consistent empty line padding within blocks.
     * @see {@link https://eslint.style/rules/padded-blocks | padded-blocks}
     */
    '@stylistic/padded-blocks': ['error', {
        blocks: 'never',
        classes: 'never',
        switches: 'never',
    }, {
        allowSingleLineBlocks: true,
    }],

    /**
     * This rule requires or disallows blank lines between the given 2 kinds of statements.
     * Properly blank lines help developers to understand the code.
     * @see {@link https://eslint.style/rules/padding-line-between-statements | padding-line-between-statements}
     */
    '@stylistic/padding-line-between-statements': 'off',

    /**
     * This rule requires quotes around object literal property names.
     * @see {@link https://eslint.style/rules/quote-props | quote-props}
     */
    '@stylistic/quote-props': ['error', 'as-needed', {
        keywords: true,
        unnecessary: true,
        numbers: true,
    }],

    /**
     * This rule enforces the consistent use of either backticks, double, or single quotes.
     * @see {@link https://eslint.style/rules/quotes | quotes}
     */
    '@stylistic/quotes': ['error', 'single', {
        avoidEscape: true,
    }],

    /**
     * This rule aims to enforce consistent spacing between rest and spread operators and their expressions.
     * The rule also supports object rest and spread properties in ES2018:
     * @see {@link https://eslint.style/rules/rest-spread-spacing | rest-spread-spacing}
     */
    '@stylistic/rest-spread-spacing': ['error', 'never'],

    /**
     * This rule enforces consistent use of semicolons.
     * @see {@link https://eslint.style/rules/semi | semi}
     */
    '@stylistic/semi': ['error', 'always'],

    /**
     * This rule aims to enforce spacing around a semicolon.
     * This rule prevents the use of spaces before a semicolon in expressions.
     * @see {@link https://eslint.style/rules/semi-spacing | semi-spacing}
     */
    '@stylistic/semi-spacing': ['error', {
        before: false,
        after: true,
    }],

    /**
     * This rule reports line terminators around semicolons.
     * @see {@link https://eslint.style/rules/semi-style | semi-style}
     */
    '@stylistic/semi-style': ['error', 'last'],

    /**
     * This rule will enforce consistency of spacing before blocks.
     * It is only applied on blocks that don’t begin on a new line.
     * @see {@link https://eslint.style/rules/space-before-blocks | space-before-blocks}
     */
    '@stylistic/space-before-blocks': 'error',

    /**
     * This rule aims to enforce consistent spacing before function parentheses.
     * As such will warn whenever whitespace doesn't match the preferences specified.
     * @see {@link https://eslint.style/rules/space-before-function-paren | space-before-function-paren}
     */
    '@stylistic/space-before-function-paren': ['error', {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
    }],

    /**
     * This rule will enforce consistent spacing directly inside of parentheses,
     * by disallowing or requiring one or more spaces to the right of ( and to the left of ).
     * @see {@link https://eslint.style/rules/space-in-parens | space-in-parens}
     */
    '@stylistic/space-in-parens': ['error', 'never'],

    /**
     * This rule is aimed at ensuring there are spaces around infix operators.
     * @see {@link https://eslint.style/rules/space-infix-ops | space-infix-ops}
     */
    '@stylistic/space-infix-ops': 'error',

    /**
     * This rule enforces consistency regarding the spaces after words unary operators and after/before nonwords unary operators.
     * @see {@link https://eslint.style/rules/space-unary-ops | space-unary-ops}
     */
    '@stylistic/space-unary-ops': ['error', {
        words: true,
        nonwords: false,
        overrides: {},
    }],

    /**
     * This rule will enforce consistency of spacing after the start of a comment // or /*.
     * It also provides several exceptions for various documentation styles.
     * @see {@link https://eslint.style/rules/spaced-comment | spaced-comment}
     */
    '@stylistic/spaced-comment': ['warn', 'always', {
        line: {
            exceptions: [
                '-',
                '+',
            ],
            markers: [
                '=',
                '!',
                '/',
            ],
        },
        block: {
            exceptions: [
                '-',
                '+',
            ],
            markers: [
                '=',
                '!',
                ':',
                '::',
            ],
            balanced: true,
        },
    }],

    /**
     * This rule controls spacing around colons of case and default clauses in switch statements.
     * This rule does the check only if the consecutive tokens exist on the same line.
     * @see {@link https://eslint.style/rules/switch-colon-spacing | switch-colon-spacing}
     */
    '@stylistic/switch-colon-spacing': ['error', {
        after: true,
        before: false,
    }],

    /**
     * This rule aims to maintain consistency around the spacing inside of template literals.
     * @see {@link https://eslint.style/rules/template-curly-spacing | template-curly-spacing}
     */
    '@stylistic/template-curly-spacing': 'error',

    /**
     * This rule aims to maintain consistency around the spacing between template tag functions and their template literals.
     * @see {@link https://eslint.style/rules/template-tag-spacing | template-tag-spacing}
     */
    '@stylistic/template-tag-spacing': ['error', 'never'],

    /**
     * Spacing around type annotations improves the readability of the code.
     * @see {@link https://eslint.style/rules/type-annotation-spacing | type-annotation-spacing}
     */
    '@stylistic/type-annotation-spacing': ['error', {
        overrides: {
            returnType: {
                before: true,
                after: true,
            },
        },
    }],

    /**
     * Enforces consistent spacing inside TypeScript type generics.
     * @see {@link https://eslint.style/rules/type-generic-spacing | type-generic-spacing}
     */
    '@stylistic/type-generic-spacing': 'error',

    /**
     * Expect space before the type declaration in the named tuple.
     * @see {@link https://eslint.style/rules/type-named-tuple-spacing | type-named-tuple-spacing}
     */
    '@stylistic/type-named-tuple-spacing': 'error',

    /**
     * This rule requires all immediately-invoked function expressions to be wrapped in parentheses.
     * @see {@link https://eslint.style/rules/wrap-iife | wrap-iife}
     */
    '@stylistic/wrap-iife': ['error', 'outside', {
        functionPrototypeMethods: false,
    }],

    /**
     * This is used to disambiguate the slash operator and facilitates more readable code.
     * @see {@link https://eslint.style/rules/wrap-regex | wrap-regex}
     */
    '@stylistic/wrap-regex': 'off',

    /**
     * This rule enforces spacing around the * in yield* expressions.
     * @see {@link https://eslint.style/rules/yield-star-spacing | yield-star-spacing}
     */
    '@stylistic/yield-star-spacing': ['error', 'after'],
});

export { stylisticRules };
