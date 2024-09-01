const stylisticJavascript = Object.freeze({
    /**
     * This rule enforces line breaks after opening and before closing array brackets.
     * @see {@link https://eslint.style/rules/js/array-bracket-newline | array-bracket-newline}
     */
    '@stylistic/js/array-bracket-newline': ['off', 'consistent'],

    /**
     * This rule enforces consistent spacing inside array brackets.
     * @see {@link https://eslint.style/rules/js/array-bracket-spacing | array-bracket-spacing}
     */
    '@stylistic/js/array-bracket-spacing': ['error', 'never'],

    /**
     * This rule enforces line breaks between array elements.
     * @see {@link https://eslint.style/rules/js/array-element-newline | array-element-newline}
     */
    '@stylistic/js/array-element-newline': ['off',
        {
            multiline: true,
            minItems: 3,
        },
    ],

    /**
     * This rule enforces parentheses around arrow function parameters regardless of arity.
     * @see {@link https://eslint.style/rules/js/arrow-parens | arrow-parens}
     */
    '@stylistic/js/arrow-parens': ['error', 'always'],

    /**
     * This rule takes an object argument with before and after properties, each with a Boolean value.
     * @see {@link https://eslint.style/rules/js/arrow-spacing | arrow-spacing}
     */
    '@stylistic/js/arrow-spacing': ['error',
        {
            before: true,
            after: true,
        },
    ],

    /**
     * This rule enforces consistent spacing inside an open block token and the next token on the same line.
     * This rule also enforces consistent spacing inside a close block token and previous token on the same line.
     * @see {@link https://eslint.style/rules/js/block-spacing | block-spacing}
     */
    '@stylistic/js/block-spacing': ['error', 'always'],

    /**
     * This rule enforces consistent brace style for blocks.
     * @see {@link https://eslint.style/rules/js/brace-style | brace-style}
     */
    '@stylistic/js/brace-style': ['error', '1tbs',
        {
            allowSingleLine: true,
        },
    ],

    /**
     * This rule enforces consistent use of trailing commas in object and array literals.
     * @see {@link https://eslint.style/rules/js/comma-dangle | comma-dangle}
     */
    '@stylistic/js/comma-dangle': ['error',
        {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'always-multiline',
        },
    ],

    /**
     * This rule enforces consistent spacing before and after commas in:
     * * variable declarations,
     * * array literals,
     * * object literals,
     * * function parameters,
     * * sequences.
     * @see {@link https://eslint.style/rules/js/comma-spacing | comma-spacing}
     */
    '@stylistic/js/comma-spacing': ['error',
        {
            before: false,
            after: true,
        },
    ],

    /**
     * This rule enforce consistent comma style in array literals, object literals, and variable declarations.
     * @see {@link https://eslint.style/rules/js/comma-style | comma-style}
     */
    '@stylistic/js/comma-style': ['error', 'last',
        {
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
        },
    ],

    /**
     * This rule enforces consistent spacing inside computed property brackets.
     * @see {@link https://eslint.style/rules/js/computed-property-spacing | computed-property-spacing}
     */
    '@stylistic/js/computed-property-spacing': ['error', 'never'],

    /**
     * This rule aims to enforce newline consistency in member expressions.
     * This rule prevents the use of mixed newlines around the dot in a member expression.
     * @see {@link https://eslint.style/rules/js/dot-location | dot-location}
     */
    '@stylistic/js/dot-location': ['error', 'property'],

    /**
     * This rule enforces at least one newline (or absence thereof) at the end of non-empty files.
     * @see {@link https://eslint.style/rules/js/eol-last | eol-last}
     */
    '@stylistic/js/eol-last': ['error', 'always'],

    /**
     * This rule enforces line breaks between arguments of a function call.
     * @see {@link https://eslint.style/rules/js/function-call-argument-newline | function-call-argument-newline}
     */
    '@stylistic/js/function-call-argument-newline': ['error', 'consistent'],

    /**
     * This rule requires or disallows spaces between the function name and the opening parenthesis that calls it.
     * @see {@link https://eslint.style/rules/js/function-call-spacing | function-call-spacing}
     */
    '@stylistic/js/function-call-spacing': ['error', 'never'],

    /**
     * This rule enforces consistent line breaks inside parentheses of function parameters or arguments.
     * @see {@link https://eslint.style/rules/js/function-paren-newline | function-paren-newline}
     */
    '@stylistic/js/function-paren-newline': ['error', 'multiline-arguments'],

    /**
     * This rule aims to enforce spacing around the * of generator functions.
     * @see {@link https://eslint.style/rules/js/generator-star-spacing | generator-star-spacing}
     */
    '@stylistic/js/generator-star-spacing': ['error',
        {
            before: false,
            after: true,
        },
    ],

    /**
     * This rule aims to enforce a consistent location for an arrow function containing an implicit return.
     * @see {@link https://eslint.style/rules/js/implicit-arrow-linebreak | implicit-arrow-linebreak}
     */
    '@stylistic/js/implicit-arrow-linebreak': ['error', 'beside'],

    /**
     * This rule enforces a consistent indentation style.
     * @see {@link https://eslint.style/rules/js/indent | indent}
     */
    '@stylistic/js/indent': ['error', 4,
        {
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
        },
    ],

    /**
     * This rule enforces the consistent use of either double or single quotes in JSX attributes.
     * @see {@link https://eslint.style/rules/js/jsx-quotes | jsx-quotes}
     */
    '@stylistic/js/jsx-quotes': ['off', 'prefer-double'],

    /**
     * This rule enforces consistent spacing between keys and values in object literal properties.
     * In the case of long lines, it is acceptable to add a new line wherever whitespace is allowed.
     * @see {@link https://eslint.style/rules/js/key-spacing | key-spacing}
     */
    '@stylistic/js/key-spacing': ['error',
        {
            beforeColon: false,
            afterColon: true,
        },
    ],

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
     * @see {@link https://eslint.style/rules/js/keyword-spacing | keyword-spacing}
     */
    '@stylistic/js/keyword-spacing': ['error',
        {
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
        },
    ],

    /**
     * This rule enforces consistent position of line comments. Block comments are not affected by this rule.
     * @see {@link https://eslint.style/rules/js/line-comment-position | line-comment-position}
     */
    '@stylistic/js/line-comment-position': ['off',
        {
            position: 'above',
            ignorePattern: '',
            applyDefaultPatterns: true,
        },
    ],

    /**
     * This rule enforces consistent line endings independent of operating system, VCS, or editor used across your codebase.
     * @see {@link https://eslint.style/rules/js/linebreak-style | linebreak-style}
     */
    '@stylistic/js/linebreak-style': ['error', 'unix'],

    /**
     * This rule requires empty lines before and/or after comments.
     * It can be enabled separately for both block (/*) and line (//) comments.
     * This rule does not apply to comments that appear on the same line as code and does not require empty lines at the beginning or end of a file.
     * @see {@link https://eslint.style/rules/js/lines-around-comment | lines-around-comment}
     */
    '@stylistic/js/lines-around-comment': 'off',

    /**
     * Examples of incorrect code for this rule:
     * @see {@link https://eslint.style/rules/js/lines-between-class-members | lines-between-class-members}
     */
    '@stylistic/js/lines-between-class-members': ['error', 'always',
        {
            exceptAfterSingleLine: true,
        },
    ],

    /**
     * This rule enforces a maximum line length to increase code readability and maintainability.
     * The length of a line is defined as the number of Unicode characters in the line.
     * @see {@link https://eslint.style/rules/js/max-len | max-len}
     */
    '@stylistic/js/max-len': ['error',
        {
            code: 125,
            tabWidth: 4,
            comments: 150,
            ignoreComments: false,
            ignoreStrings: true,
            ignoreUrls: true,
            ignoreRegExpLiterals: true,
            ignoreTemplateLiterals: true,
        },
    ],

    /**
     * This rule enforces a maximum number of statements allowed per line.
     * @see {@link https://eslint.style/rules/js/max-statements-per-line | max-statements-per-line}
     */
    '@stylistic/js/max-statements-per-line': ['off',
        {
            max: 1,
        },
    ],

    /**
     * This rule aims to enforce a particular style for multiline comments.
     * @see {@link https://eslint.style/rules/js/multiline-comment-style | multiline-comment-style}
     */
    '@stylistic/js/multiline-comment-style': ['off', 'starred-block'],

    /**
     * This rule enforces or disallows newlines between operands of a ternary expression.
     * Note: The location of the operators is not enforced by this rule.
     * Please see the operator-linebreak rule if you are interested in enforcing the location of the operators themselves.
     * @see {@link https://eslint.style/rules/js/multiline-ternary | multiline-ternary}
     */
    '@stylistic/js/multiline-ternary': ['off', 'never'],

    /**
     * This rule can enforce or disallow parentheses when invoking a constructor with no arguments using the new keyword.
     * @see {@link https://eslint.style/rules/js/new-parens | new-parens}
     */
    '@stylistic/js/new-parens': 'error',

    /**
     * This rule requires a newline after each call in a method chain or deep member access.
     * Computed property accesses such as instance[something] are excluded.
     * @see {@link https://eslint.style/rules/js/newline-per-chained-call | newline-per-chained-call}
     */
    '@stylistic/js/newline-per-chained-call': ['error',
        {
            ignoreChainWithDepth: 4,
        },
    ],

    /**
     * Examples of incorrect code for this rule:
     * @see {@link https://eslint.style/rules/js/no-confusing-arrow | no-confusing-arrow}
     */
    '@stylistic/js/no-confusing-arrow': ['error',
        {
            allowParens: true,
        },
    ],

    /**
     * This rule always ignores extra parentheses around the following:
     * @see {@link https://eslint.style/rules/js/no-extra-parens | no-extra-parens}
     */
    '@stylistic/js/no-extra-parens': ['off', 'all',
        {
            conditionalAssign: true,
            nestedBinaryExpressions: false,
            returnAssign: false,
            ignoreJSX: 'all',
            enforceForArrowConditionals: false,
        },
    ],

    /**
     * This rule disallows unnecessary semicolons.
     * @see {@link https://eslint.style/rules/js/no-extra-semi | no-extra-semi}
     */
    '@stylistic/js/no-extra-semi': 'error',

    /**
     * This rule is aimed at eliminating floating decimal points.
     * Will warn whenever a numeric value has a decimal point but is missing a number either before or after it.
     * @see {@link https://eslint.style/rules/js/no-floating-decimal | no-floating-decimal}
     */
    '@stylistic/js/no-floating-decimal': 'error',

    /**
     * This rule checks BinaryExpression, LogicalExpression and ConditionalExpression.
     * @see {@link https://eslint.style/rules/js/no-mixed-operators | no-mixed-operators}
     */
    '@stylistic/js/no-mixed-operators': ['error',
        {
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
        },
    ],

    /**
     * This rule disallows mixed spaces and tabs for indentation.
     * @see {@link https://eslint.style/rules/js/no-mixed-spaces-and-tabs | no-mixed-spaces-and-tabs}
     */
    '@stylistic/js/no-mixed-spaces-and-tabs': 'error',

    /**
     * This rule aims to disallow multiple whitespace around:
     * * logical expressions,
     * * conditional expressions,
     * * declarations,
     * * array elements,
     * * object properties,
     * * sequences,
     * * function parameters.
     * @see {@link https://eslint.style/rules/js/no-multi-spaces | no-multi-spaces}
     */
    '@stylistic/js/no-multi-spaces': ['error',
        {
            ignoreEOLComments: false,
        },
    ],

    /**
     * This rule aims to reduce the scrolling required when reading through your code.
     * It will warn when the maximum amount of empty lines has been exceeded.
     * @see {@link https://eslint.style/rules/js/no-multiple-empty-lines | no-multiple-empty-lines}
     */
    '@stylistic/js/no-multiple-empty-lines': ['error',
        {
            max: 1,
            maxBOF: 0,
            maxEOF: 0,
        },
    ],

    /**
     * This rule looks for tabs anywhere inside a file: code, comments or anything else.
     * @see {@link https://eslint.style/rules/js/no-tabs | no-tabs}
     */
    '@stylistic/js/no-tabs': 'error',

    /**
     * This rule disallows trailing whitespace (spaces, tabs, and other Unicode whitespace characters) at the end of lines.
     * @see {@link https://eslint.style/rules/js/no-trailing-spaces | no-trailing-spaces}
     */
    '@stylistic/js/no-trailing-spaces': ['error',
        {
            skipBlankLines: false,
            ignoreComments: false,
        },
    ],

    /**
     * This rule disallows whitespace around the dot or before the opening bracket before properties of objects if they are on the same line.
     * This rule allows whitespace when the object and property are on separate lines, as it is common to add newlines to longer chains of properties:
     * @see {@link https://eslint.style/rules/js/no-whitespace-before-property | no-whitespace-before-property}
     */
    '@stylistic/js/no-whitespace-before-property': 'error',

    /**
     * This rule aims to enforce a consistent location for single-line statements.
     * @see {@link https://eslint.style/rules/js/nonblock-statement-body-position | nonblock-statement-body-position}
     */
    '@stylistic/js/nonblock-statement-body-position': ['error', 'beside',
        {
            overrides: {},
        },
    ],

    /**
     * This rule requires or disallows a line break.
     * @see {@link https://eslint.style/rules/js/object-curly-newline | object-curly-newline}
     */
    '@stylistic/js/object-curly-newline': ['error',
        {
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
        },
    ],

    /**
     * This rule enforces consistent spacing inside braces of object literals, destructuring assignments, and import/export specifiers.
     * @see {@link https://eslint.style/rules/js/object-curly-spacing | object-curly-spacing}
     */
    '@stylistic/js/object-curly-spacing': ['error', 'always'],

    /**
     *
     * @see {@link https://eslint.style/rules/js/object-property-newline | object-property-newline}
     */
    '@stylistic/js/object-property-newline': ['error',
        {
            allowAllPropertiesOnSameLine: true,
        },
    ],

    /**
     * This rule enforces a consistent newlines around variable declarations.
     * This rule ignores variable declarations inside for loop conditionals.
     * @see {@link https://eslint.style/rules/js/one-var-declaration-per-line | one-var-declaration-per-line}
     */
    '@stylistic/js/one-var-declaration-per-line': ['error', 'always'],

    /**
     * This rule enforces a consistent linebreak style for operators.
     * @see {@link https://eslint.style/rules/js/operator-linebreak | operator-linebreak}
     */
    '@stylistic/js/operator-linebreak': ['error', 'before',
        {
            overrides: {
                '=': 'none',
            },
        },
    ],

    /**
     * This rule enforces consistent empty line padding within blocks.
     * @see {@link https://eslint.style/rules/js/padded-blocks | padded-blocks}
     */
    '@stylistic/js/padded-blocks': ['error',
        {
            blocks: 'never',
            classes: 'never',
            switches: 'never',
        },
        {
            allowSingleLineBlocks: true,
        },
    ],

    /**
     * This rule requires or disallows blank lines between the given 2 kinds of statements.
     * Properly blank lines help developers to understand the code.
     * @see {@link https://eslint.style/rules/js/padding-line-between-statements | padding-line-between-statements}
     */
    '@stylistic/js/padding-line-between-statements': 'off',

    /**
     * This rule requires quotes around object literal property names.
     * @see {@link https://eslint.style/rules/js/quote-props | quote-props}
     */
    '@stylistic/js/quote-props': ['error', 'as-needed',
        {
            keywords: true,
            unnecessary: true,
            numbers: true,
        },
    ],

    /**
     * This rule enforces the consistent use of either backticks, double, or single quotes.
     * @see {@link https://eslint.style/rules/js/quotes | quotes}
     */
    '@stylistic/js/quotes': ['error', 'single',
        {
            avoidEscape: true,
        },
    ],

    /**
     * This rule aims to enforce consistent spacing between rest and spread operators and their expressions.
     * The rule also supports object rest and spread properties in ES2018:
     * @see {@link https://eslint.style/rules/js/rest-spread-spacing | rest-spread-spacing}
     */
    '@stylistic/js/rest-spread-spacing': ['error', 'never'],

    /**
     * This rule enforces consistent use of semicolons.
     * @see {@link https://eslint.style/rules/js/semi | semi}
     */
    '@stylistic/js/semi': ['error', 'always'],

    /**
     * This rule aims to enforce spacing around a semicolon.
     * This rule prevents the use of spaces before a semicolon in expressions.
     * @see {@link https://eslint.style/rules/js/semi-spacing | semi-spacing}
     */
    '@stylistic/js/semi-spacing': ['error',
        {
            before: false,
            after: true,
        },
    ],

    /**
     * This rule reports line terminators around semicolons.
     * @see {@link https://eslint.style/rules/js/semi-style | semi-style}
     */
    '@stylistic/js/semi-style': ['error', 'last'],

    /**
     * This rule will enforce consistency of spacing before blocks.
     * It is only applied on blocks that don’t begin on a new line.
     * @see {@link https://eslint.style/rules/js/space-before-blocks | space-before-blocks}
     */
    '@stylistic/js/space-before-blocks': 'error',

    /**
     * This rule aims to enforce consistent spacing before function parentheses.
     * As such will warn whenever whitespace doesn't match the preferences specified.
     * @see {@link https://eslint.style/rules/js/space-before-function-paren | space-before-function-paren}
     */
    '@stylistic/js/space-before-function-paren': ['error',
        {
            anonymous: 'never',
            named: 'never',
            asyncArrow: 'always',
        },
    ],

    /**
     * This rule will enforce consistent spacing directly inside of parentheses,
     * by disallowing or requiring one or more spaces to the right of ( and to the left of ).
     * @see {@link https://eslint.style/rules/js/space-in-parens | space-in-parens}
     */
    '@stylistic/js/space-in-parens': ['error', 'never'],

    /**
     * This rule is aimed at ensuring there are spaces around infix operators.
     * @see {@link https://eslint.style/rules/js/space-infix-ops | space-infix-ops}
     */
    '@stylistic/js/space-infix-ops': 'error',

    /**
     * This rule enforces consistency regarding the spaces after words unary operators and after/before nonwords unary operators.
     * @see {@link https://eslint.style/rules/js/space-unary-ops | space-unary-ops}
     */
    '@stylistic/js/space-unary-ops': ['error',
        {
            words: true,
            nonwords: false,
            overrides: {},
        },
    ],

    /**
     * This rule will enforce consistency of spacing after the start of a comment // or /*.
     * It also provides several exceptions for various documentation styles.
     * @see {@link https://eslint.style/rules/js/spaced-comment | spaced-comment}
     */
    '@stylistic/js/spaced-comment': ['warn', 'always',
        {
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
        },
    ],

    /**
     * This rule controls spacing around colons of case and default clauses in switch statements.
     * This rule does the check only if the consecutive tokens exist on the same line.
     * @see {@link https://eslint.style/rules/js/switch-colon-spacing | switch-colon-spacing}
     */
    '@stylistic/js/switch-colon-spacing': ['error',
        {
            after: true,
            before: false,
        },
    ],

    /**
     * This rule aims to maintain consistency around the spacing inside of template literals.
     * @see {@link https://eslint.style/rules/js/template-curly-spacing | template-curly-spacing}
     */
    '@stylistic/js/template-curly-spacing': 'error',

    /**
     * This rule aims to maintain consistency around the spacing between template tag functions and their template literals.
     * @see {@link https://eslint.style/rules/js/template-tag-spacing | template-tag-spacing}
     */
    '@stylistic/js/template-tag-spacing': ['error', 'never'],

    /**
     * This rule requires all immediately-invoked function expressions to be wrapped in parentheses.
     * @see {@link https://eslint.style/rules/js/wrap-iife | wrap-iife}
     */
    '@stylistic/js/wrap-iife': ['error', 'outside',
        {
            functionPrototypeMethods: false,
        },
    ],

    /**
     * This is used to disambiguate the slash operator and facilitates more readable code.
     * @see {@link https://eslint.style/rules/js/wrap-regex | wrap-regex}
     */
    '@stylistic/js/wrap-regex': 'off',

    /**
     * This rule enforces spacing around the * in yield* expressions.
     * @see {@link https://eslint.style/rules/js/yield-star-spacing | yield-star-spacing}
     */
    '@stylistic/js/yield-star-spacing': ['error', 'after'],
});

export { stylisticJavascript };
