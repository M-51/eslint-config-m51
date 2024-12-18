import { stylisticJavascript } from './javascript.js';

/**
 * Rules to disable, beacuse eslint-typescript handles them
 */
const rulesExtendedByTypescriptEslint = [
    '@stylistic/js/block-spacing',
    '@stylistic/js/brace-style',
    '@stylistic/js/comma-dangle',
    '@stylistic/js/comma-s',
    '@stylistic/js/function-call-spacing',
    '@stylistic/js/indent',
    '@stylistic/js/key-spacing',
    '@stylistic/js/keyword-spacing',
    '@stylistic/js/lines-around-comment',
    '@stylistic/js/lines-between-class-members',
    '@stylistic/js/no-extra-parens',
    '@stylistic/js/no-extra-semi',
    '@stylistic/js/object-curly-newline',
    '@stylistic/js/object-curly-spacing',
    '@stylistic/js/object-property-newline',
    '@stylistic/js/padding-line-between-statements',
    '@stylistic/js/quote-props',
    '@stylistic/js/quotes',
    '@stylistic/js/semi',
    '@stylistic/js/space-before-blocks',
    '@stylistic/js/space-before-function-paren',
    '@stylistic/js/space-infix-ops',
];

const stylisticTypescript = Object.freeze({
    ...Object.fromEntries(rulesExtendedByTypescriptEslint.map((rule) => [rule, 'off'])),

    /**
     * This rule enforces consistent spacing inside an open block token and the next token on the same line.
     * This rule also enforces consistent spacing inside a close block token and previous token on the same line.
     * @see {@link https://eslint.style/rules/ts/block-spacing | block-spacing}
     */
    '@stylistic/ts/block-spacing': stylisticJavascript['@stylistic/js/block-spacing'],

    /**
     * This rule enforces consistent brace style for blocks, enums, interfaces, namespaces, modules.
     * @see {@link https://eslint.style/rules/ts/brace-style | brace-style}
     */
    '@stylistic/ts/brace-style': stylisticJavascript['@stylistic/js/brace-style'],

    /**
     * This rule enforces consistent use of trailing commas in object and array literals.
     * @see {@link https://eslint.style/rules/ts/comma-dangle | comma-dangle}
     */
    '@stylistic/ts/comma-dangle': [stylisticJavascript['@stylistic/js/comma-dangle'][0],
        {
            ...stylisticJavascript['@stylistic/js/comma-dangle'][1],
            enums: stylisticJavascript['@stylistic/js/comma-dangle'][1].arrays,
            generics: stylisticJavascript['@stylistic/js/comma-dangle'].arrays,
            tuples: stylisticJavascript['@stylistic/js/comma-dangle'].arrays,
        },
    ],

    /**
     * This rule enforces consistent spacing before and after commas in:
     * * variable declarations,
     * * array literals,
     * * object literals,
     * * function parameters,
     * * sequences.
     * @see {@link https://eslint.style/rules/ts/comma-spacing | comma-spacing}
     */
    '@stylistic/ts/comma-spacing': stylisticJavascript['@stylistic/js/comma-spacing'],

    /**
     * This rule requires or disallows spaces between the function name and the opening parenthesis that calls it.
     * @see {@link https://eslint.style/rules/ts/function-call-spacing | function-call-spacing}
     */
    '@stylistic/ts/function-call-spacing': stylisticJavascript['@stylistic/js/function-call-spacing'],

    /**
     * This rule enforces a consistent indentation style.
     * @see {@link https://eslint.style/rules/ts/indent | indent}
     */
    '@stylistic/ts/indent': stylisticJavascript['@stylistic/js/indent'],

    /**
     * This rule enforces consistent spacing between keys and values in object literal properties.
     * In the case of long lines, it is acceptable to add a new line wherever whitespace is allowed.
     * @see {@link https://eslint.style/rules/ts/key-spacing | key-spacing}
     */
    '@stylistic/ts/key-spacing': stylisticJavascript['@stylistic/js/key-spacing'],

    /**
     * This rule enforces consistent spacing around keywords and keyword-like tokens.
     * @see {@link https://eslint.style/rules/ts/keyword-spacing | keyword-spacing}
     */
    '@stylistic/ts/keyword-spacing': stylisticJavascript['@stylistic/js/keyword-spacing'],

    /**
     * This rule requires empty lines before and/or after comments.
     * It can be enabled separately for both block (/*) and line (//) comments.
     * This rule does not apply to comments that appear on the same line as code and does not require empty lines at the beginning or end of a file.
     * @see {@link https://eslint.style/rules/ts/lines-around-comment | lines-around-comment}
     */
    '@stylistic/ts/lines-around-comment': stylisticJavascript['@stylistic/js/lines-around-comment'],

    /**
     * This rule improves readability by enforcing lines between class members.
     * It will not check empty lines before the first member and after the last member, since that is already taken care of by padded-blocks.
     * @see {@link https://eslint.style/rules/ts/lines-between-class-members | lines-between-class-members}
     */
    '@stylistic/ts/lines-between-class-members': stylisticJavascript['@stylistic/js/lines-between-class-members'],

    /**
     * This rule enforces keeping to one configurable code style.
     * It can also standardize the presence (or absence) of a delimiter in the last member of a construct,
     * as well as a separate delimiter syntax for single line declarations.
     * @see {@link https://eslint.style/rules/ts/member-delimiter-style | member-delimiter-style}
     */
    '@stylistic/ts/member-delimiter-style': ['error',
        {
            multiline: {
                delimiter: 'comma',
                requireLast: true,
            },
            singleline: {
                delimiter: 'comma',
                requireLast: false,
            },
            multilineDetection: 'brackets',
        },
    ],

    /**
     * This rule restricts the use of parentheses to only where they are necessary.
     * @see {@link https://eslint.style/rules/ts/no-extra-parens | no-extra-parens}
     */
    '@stylistic/ts/no-extra-parens': stylisticJavascript['@stylistic/js/no-extra-parens'],

    /**
     * Typing mistakes and misunderstandings about where semicolons are required can lead to semicolons that are unnecessary.
     * While not technically an error, extra semicolons can cause confusion when reading code.
     * @see {@link https://eslint.style/rules/ts/no-extra-semi | no-extra-semi}
     */
    '@stylistic/ts/no-extra-semi': stylisticJavascript['@stylistic/js/no-extra-semi'],

    /**
     * A number of style guides require or disallow line breaks inside of object braces and other tokens.
     * @see {@link https://eslint.style/rules/ts/object-curly-newline | object-curly-newline}
     */
    '@stylistic/ts/object-curly-newline': stylisticJavascript['@stylistic/js/object-curly-newline'],

    /**
     * This rule enforces consistent spacing inside braces of object literals, destructuring assignments, and import/export specifiers.
     * @see {@link https://eslint.style/rules/ts/object-curly-spacing | object-curly-spacing}
     */
    '@stylistic/ts/object-curly-spacing': stylisticJavascript['@stylistic/js/object-curly-spacing'],

    /**
     * This rule permits you to restrict the locations of property specifications in object literals.
     * You may prohibit any part of any property specification from appearing on the same line as any part of any other property specification.
     * You may make this prohibition absolute, or, by invoking an object option.
     * You may allow an exception, permitting an object literal to have all parts of all of its property specifications on a single line.
     * @see {@link https://eslint.style/rules/ts/object-property-newline | object-property-newline}
     */
    '@stylistic/ts/object-property-newline': stylisticJavascript['@stylistic/js/object-property-newline'],

    /**
     * This rule requires or disallows blank lines between the given 2 kinds of statements.
     * Properly blank lines help developers to understand the code.
     * @see {@link https://eslint.style/rules/ts/padding-line-between-statements | padding-line-between-statements}
     */
    '@stylistic/ts/padding-line-between-statements': stylisticJavascript['@stylistic/js/padding-line-between-statements'],

    /**
     * This rule requires quotes around object literal property names.
     * @see {@link https://eslint.style/rules/ts/quote-props | quote-props}
     */
    '@stylistic/ts/quote-props': stylisticJavascript['@stylistic/js/quote-props'],

    /**
     * This rule enforces the consistent use of either backticks, double, or single quotes.
     * @see {@link https://eslint.style/rules/ts/quotes | quotes}
     */
    '@stylistic/ts/quotes': stylisticJavascript['@stylistic/js/quotes'],

    /**
     * This rule enforces consistent use of semicolons.
     * @see {@link https://eslint.style/rules/ts/semi | semi}
     */
    '@stylistic/ts/semi': stylisticJavascript['@stylistic/js/semi'],

    /**
     * Consistency is an important part of any style guide.
     * While it is a personal preference where to put the opening brace of blocks, it should be consistent across a whole project.
     * Having an inconsistent style distracts the reader from seeing the important parts of the code.
     * @see {@link https://eslint.style/rules/ts/space-before-blocks | space-before-blocks}
     */
    '@stylistic/ts/space-before-blocks': stylisticJavascript['@stylistic/js/space-before-blocks'],

    /**
     * This rule aims to enforce consistent spacing before function parentheses and as such,
     * will warn whenever whitespace doesn't match the preferences specified.
     * @see {@link https://eslint.style/rules/ts/space-before-function-paren | space-before-function-paren}
     */
    '@stylistic/ts/space-before-function-paren': stylisticJavascript['@stylistic/js/space-before-function-paren'],

    /**
     * This rule is aimed at ensuring there are spaces around infix operators.
     * @see {@link https://eslint.style/rules/ts/space-infix-ops | space-infix-ops}
     */
    '@stylistic/ts/space-infix-ops': stylisticJavascript['@stylistic/js/space-infix-ops'],

    /**
     * Spacing around type annotations improves the readability of the code.
     * @see {@link https://eslint.style/rules/ts/type-annotation-spacing | type-annotation-spacing}
     */
    '@stylistic/ts/type-annotation-spacing': ['error',
        {
            overrides: {
                returnType: {
                    before: true,
                    after: true,
                },
            },
        },
    ],
});

export { stylisticTypescript };
