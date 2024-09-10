import { eslintRules } from './eslint.js';

const rulesHandledByTypescript = [
    'constructor-super',
    'getter-return',
    'no-const-assign',
    'no-dupe-args',
    'no-dupe-class-members',
    'no-dupe-keys',
    'no-func-assign',
    'no-import-assign',
    'no-invalid-this',
    'no-obj-calls',
    'no-redeclare',
    'no-setter-return',
    'no-this-before-super',
    'no-undef',
    'no-unreachable',
    'no-unsafe-negation',
];

const rulesExtendedByTypescriptEslint = [
    'class-methods-use-this',
    'consistent-return',
    'default-param-last',
    'dot-notation',
    'init-declarations',
    'max-params',
    'no-array-constructor',
    'no-dupe-class-members',
    'no-empty-function',
    'no-implied-eval',
    'no-invalid-this',
    'no-loop-func',
    'no-magic-numbers',
    'no-redeclare',
    'no-restricted-imports',
    'no-shadow',
    'no-unused-expressions',
    'no-unused-vars',
    'no-use-before-define',
    'no-useless-constructor',
    'prefer-destructuring',
    'prefer-promise-reject-errors',
    'require-await',
    'camelcase', // extended by `naming-conventions`
];

const typescriptRules = Object.freeze({
    ...Object.fromEntries(rulesExtendedByTypescriptEslint.map((rule) => [rule, 'off'])),

    /**
     * Require that function overload signatures be consecutive.
     * @see {@link https://typescript-eslint.io/rules/adjacent-overload-signatures | adjacent-overload-signatures}
     */
    '@typescript-eslint/adjacent-overload-signatures': 'error',

    /**
     * Require consistently using either `T[]` or `Array<T>` for arrays.
     * @see {@link https://typescript-eslint.io/rules/array-type | array-type}
     */
    '@typescript-eslint/array-type': ['error',
        {
            'default': 'generic',
        },
    ],

    /**
     * Disallow awaiting a value that is not a Thenable.
     * @see {@link https://typescript-eslint.io/rules/await-thenable | await-thenable}
     */
    '@typescript-eslint/await-thenable': 'error',

    /**
     * Disallow `@ts-<directive>` comments or require descriptions after directives.
     * @see {@link https://typescript-eslint.io/rules/ban-ts-comment | ban-ts-comment}
     */
    '@typescript-eslint/ban-ts-comment': 'off',

    /**
     * Disallow `// tslint:<rule-flag>` comments.
     * @see {@link https://typescript-eslint.io/rules/ban-tslint-comment | ban-tslint-comment}
     */
    '@typescript-eslint/ban-tslint-comment': 'error',

    /**
     * Enforce that literals on classes are exposed in a consistent style.
     * @see {@link https://typescript-eslint.io/rules/class-literal-property-style | class-literal-property-style}
     */
    '@typescript-eslint/class-literal-property-style': ['error', 'fields'],

    /**
     * Enforce that class methods utilize this.
     * @see {@link https://typescript-eslint.io/rules/class-methods-use-this | class-methods-use-this}
     */
    '@typescript-eslint/class-methods-use-this': eslintRules['class-methods-use-this'],

    /**
     * Enforce specifying generic type arguments on type annotation or constructor name of a constructor call.
     * @see {@link https://typescript-eslint.io/rules/consistent-generic-constructors | consistent-generic-constructors}
     */
    '@typescript-eslint/consistent-generic-constructors': ['error', 'type-annotation'],

    /**
     * Require or disallow the `Record` type.
     * @see {@link https://typescript-eslint.io/rules/consistent-indexed-object-style | consistent-indexed-object-style}
     */
    '@typescript-eslint/consistent-indexed-object-style': ['error', 'index-signature'],

    /**
     * Require return statements to either always or never specify values.
     * @see {@link https://typescript-eslint.io/rules/consistent-return | consistent-return}
     */
    '@typescript-eslint/consistent-return': eslintRules['consistent-return'],

    /**
     * Enforce consistent usage of type assertions.
     * @see {@link https://typescript-eslint.io/rules/consistent-type-assertions | consistent-type-assertions}
     */
    '@typescript-eslint/consistent-type-assertions': ['error',
        {
            assertionStyle: 'as',
            objectLiteralTypeAssertions: 'allow',
        },
    ],

    /**
     * Enforce type definitions to consistently use either interface or type.
     * @see {@link https://typescript-eslint.io/rules/consistent-type-definitions | consistent-type-definitions}
     */
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

    /**
     * Enforce consistent usage of type exports.
     * @see {@link https://typescript-eslint.io/rules/consistent-type-exports | consistent-type-exports}
     */
    '@typescript-eslint/consistent-type-exports': ['error',
        {
            fixMixedExportsWithInlineTypeSpecifier: true,
        },
    ],

    /**
     * Enforce consistent usage of type imports.
     * @see {@link https://typescript-eslint.io/rules/consistent-type-imports | consistent-type-imports}
     */
    '@typescript-eslint/consistent-type-imports': ['error',
        {
            prefer: 'type-imports',
            disallowTypeAnnotations: true,
            fixStyle: 'inline-type-imports',
        },
    ],

    /**
     * Enforce default parameters to be last.
     * @see {@link https://typescript-eslint.io/rules/default-param-last | default-param-last}
     */
    '@typescript-eslint/default-param-last': eslintRules['default-param-last'],

    /**
     * Enforce dot notation whenever possible.
     * @see {@link https://typescript-eslint.io/rules/dot-notation | dot-notation}
     */
    '@typescript-eslint/dot-notation': eslintRules['dot-notation'],

    /**
     * Require explicit return types on functions and class methods.
     * @see {@link https://typescript-eslint.io/rules/explicit-function-return-type | explicit-function-return-type}
     */
    '@typescript-eslint/explicit-function-return-type': ['warn',
        {
            allowExpressions: true,
            allowTypedFunctionExpressions: true,
            allowHigherOrderFunctions: true,
            allowDirectConstAssertionInArrowFunctions: true,
            allowConciseArrowFunctionExpressionsStartingWithVoid: false,
            allowFunctionsWithoutTypeParameters: false,
            allowedNames: [],
            allowIIFEs: true,
        },
    ],

    /**
     * Require explicit accessibility modifiers on class properties and methods.
     * @see {@link https://typescript-eslint.io/rules/explicit-member-accessibility | explicit-member-accessibility}
     */
    '@typescript-eslint/explicit-member-accessibility': ['error',
        {
            accessibility: 'explicit',
        },
    ],

    /**
     * Require explicit return and argument types on exported functions' and classes' public class methods.
     * @see {@link https://typescript-eslint.io/rules/explicit-module-boundary-types | explicit-module-boundary-types}
     */
    '@typescript-eslint/explicit-module-boundary-types': ['error',
        {
            allowArgumentsExplicitlyTypedAsAny: false,
            allowDirectConstAssertionInArrowFunctions: true,
            allowedNames: [],
            allowHigherOrderFunctions: true,
            allowTypedFunctionExpressions: true,
        },
    ],

    /**
     * Require or disallow initialization in variable declarations.
     * @see {@link https://typescript-eslint.io/rules/init-declarations | init-declarations}
     */
    '@typescript-eslint/init-declarations': eslintRules['init-declarations'],

    /**
     * Enforce a maximum number of parameters in function definitions.
     * @see {@link https://typescript-eslint.io/rules/max-params | max-params}
     */
    '@typescript-eslint/max-params': eslintRules['max-params'],

    /**
     * Require a consistent member declaration order.
     * @see {@link https://typescript-eslint.io/rules/member-ordering | member-ordering}
     */
    '@typescript-eslint/member-ordering': 'off',

    /**
     * Enforce using a particular method signature syntax.
     * @see {@link https://typescript-eslint.io/rules/method-signature-style | method-signature-style}
     */
    '@typescript-eslint/method-signature-style': ['error', 'property'],

    /**
     * Enforce naming conventions for everything across a codebase.
     * @see {@link https://typescript-eslint.io/rules/naming-convention | naming-convention}
     */
    '@typescript-eslint/naming-convention': ['error',
        {
            selector: 'default',
            format: ['camelCase'],
        },
        {
            selector: ['typeLike', 'class'],
            format: ['PascalCase'],
        },
        {
            selector: ['variable', 'parameter'],
            modifiers: ['destructured'],
            format: null,
        },
        {
            selector: [
                'classProperty',
                'objectLiteralProperty',
                'typeProperty',
                'classMethod',
                'objectLiteralMethod',
                'typeMethod',
                'accessor',
                'enumMember',
            ],
            modifiers: ['requiresQuotes'],
            format: null,
        },
    ],

    /**
     * Disallow generic `Array` constructors.
     * @see {@link https://typescript-eslint.io/rules/no-array-constructor | no-array-constructor}
     */
    '@typescript-eslint/no-array-constructor': eslintRules['no-array-constructor'],

    /**
     * Disallow using the delete operator on array values.
     * @see {@link https://typescript-eslint.io/rules/no-array-delete | no-array-delete}
     */
    '@typescript-eslint/no-array-delete': 'error',

    /**
     * Require .toString() to only be called on objects which provide useful information when stringified.
     * @see {@link https://typescript-eslint.io/rules/no-base-to-string | no-base-to-string}
     */
    '@typescript-eslint/no-base-to-string': 'error',

    /**
     * Disallow non-null assertion in locations that may be confusing.
     * @see {@link https://typescript-eslint.io/rules/no-confusing-non-null-assertion | no-confusing-non-null-assertion}
     */
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',

    /**
     * Require expressions of type void to appear in statement position.
     * @see {@link https://typescript-eslint.io/rules/no-confusing-void-expression | no-confusing-void-expression}
     */
    '@typescript-eslint/no-confusing-void-expression': 'error',

    /**
     * Disallow duplicate class members.
     * @see {@link https://typescript-eslint.io/rules/no-dupe-class-members | no-dupe-class-members}
     */
    '@typescript-eslint/no-dupe-class-members': eslintRules['no-dupe-class-members'],

    /**
     * Disallow duplicate enum member values.
     * @see {@link https://typescript-eslint.io/rules/no-duplicate-enum-values | no-duplicate-enum-values}
     */
    '@typescript-eslint/no-duplicate-enum-values': 'off',

    /**
     * Disallow duplicate constituents of union or intersection types.
     * @see {@link https://typescript-eslint.io/rules/no-duplicate-type-constituents | no-duplicate-type-constituents}
     */
    '@typescript-eslint/no-duplicate-type-constituents': 'error',

    /**
     * Disallow using the delete operator on computed key expressions.
     * @see {@link https://typescript-eslint.io/rules/no-dynamic-delete | no-dynamic-delete}
     */
    '@typescript-eslint/no-dynamic-delete': 'error',

    /**
     * Disallow empty functions.
     * @see {@link https://typescript-eslint.io/rules/no-empty-function | no-empty-function}
     */
    '@typescript-eslint/no-empty-function': eslintRules['no-empty-function'],

    /**
     * Disallow accidentally using the "empty object" type.
     * @see {@link https://typescript-eslint.io/rules/no-empty-object-type | no-empty-object-type}
     */
    '@typescript-eslint/no-empty-object-type': 'error',

    /**
     * Disallow the any type.
     * @see {@link https://typescript-eslint.io/rules/no-explicit-any | no-explicit-any}
     */
    '@typescript-eslint/no-explicit-any': 'error',

    /**
     * Disallow extra non-null assertions.
     * @see {@link https://typescript-eslint.io/rules/no-extra-non-null-assertion | no-extra-non-null-assertion}
     */
    '@typescript-eslint/no-extra-non-null-assertion': 'error',

    /**
     * Disallow classes used as namespaces.
     * @see {@link https://typescript-eslint.io/rules/no-extraneous-class | no-extraneous-class}
     */
    '@typescript-eslint/no-extraneous-class': 'error',

    /**
     * Require Promise-like statements to be handled appropriately.
     * @see {@link https://typescript-eslint.io/rules/no-floating-promises | no-floating-promises}
     */
    '@typescript-eslint/no-floating-promises': 'error',

    /**
     * Disallow iterating over an array with a for-in loop.
     * @see {@link https://typescript-eslint.io/rules/no-for-in-array | no-for-in-array}
     */
    '@typescript-eslint/no-for-in-array': 'error',

    /**
     * Disallow the use of `eval()-like` methods.
     * @see {@link https://typescript-eslint.io/rules/no-implied-eval | no-implied-eval}
     */
    '@typescript-eslint/no-implied-eval': eslintRules['no-implied-eval'],

    /**
     * Enforce the use of top-level import type qualifier when an import only has specifiers with inline type qualifiers.
     * @see {@link https://typescript-eslint.io/rules/no-import-type-side-effects | no-import-type-side-effects}
     */
    '@typescript-eslint/no-import-type-side-effects': 'off',

    /**
     * Disallow explicit type declarations for variables or parameters initialized to a number, string, or boolean.
     * @see {@link https://typescript-eslint.io/rules/no-inferrable-types | no-inferrable-types}
     */
    '@typescript-eslint/no-inferrable-types': 'off',

    /**
     * Disallow this keywords outside of classes or class-like objects.
     * @see {@link https://typescript-eslint.io/rules/no-invalid-this | no-invalid-this}
     */
    '@typescript-eslint/no-invalid-this': eslintRules['no-invalid-this'],

    /**
     * Disallow void type outside of generic or return types.
     * @see {@link https://typescript-eslint.io/rules/no-invalid-void-type | no-invalid-void-type}
     */
    '@typescript-eslint/no-invalid-void-type': 'error',

    /**
     * Disallow function declarations that contain unsafe references inside loop statements.
     * @see {@link https://typescript-eslint.io/rules/no-loop-func | no-loop-func}
     */
    '@typescript-eslint/no-loop-func': eslintRules['no-loop-func'],

    /**
     * Disallow magic numbers.
     * @see {@link https://typescript-eslint.io/rules/no-magic-numbers | no-magic-numbers}
     */
    '@typescript-eslint/no-magic-numbers': eslintRules['no-magic-numbers'],

    /**
     * Disallow the void operator except when used to discard a value.
     * @see {@link https://typescript-eslint.io/rules/no-meaningless-void-operator | no-meaningless-void-operator}
     */
    '@typescript-eslint/no-meaningless-void-operator': 'error',

    /**
     * Enforce valid definition of new and constructor.
     * @see {@link https://typescript-eslint.io/rules/no-misused-new | no-misused-new}
     */
    '@typescript-eslint/no-misused-new': 'error',

    /**
     * Disallow Promises in places not designed to handle them.
     * @see {@link https://typescript-eslint.io/rules/no-misused-promises | no-misused-promises}
     */
    '@typescript-eslint/no-misused-promises': 'error',

    /**
     * Disallow enums from having both number and string members.
     * @see {@link https://typescript-eslint.io/rules/no-mixed-enums | no-mixed-enums}
     */
    '@typescript-eslint/no-mixed-enums': 'off',

    /**
     * Disallow TypeScript namespaces.
     * @see {@link https://typescript-eslint.io/rules/no-namespace | no-namespace}
     */
    '@typescript-eslint/no-namespace': 'error',

    /**
     * Disallow non-null assertions in the left operand of a nullish coalescing operator.
     * @see {@link https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing | no-non-null-asserted-nullish-coalescing}
     */
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',

    /**
     * Disallow non-null assertions after an optional chain expression.
     * @see {@link https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain | no-non-null-asserted-optional-chain}
     */
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',

    /**
     * Disallow non-null assertions using the ! postfix operator.
     * @see {@link https://typescript-eslint.io/rules/no-non-null-assertion | no-non-null-assertion}
     */
    '@typescript-eslint/no-non-null-assertion': 'error',

    /**
     * Disallow variable redeclaration.
     * @see {@link https://typescript-eslint.io/rules/no-redeclare | no-redeclare}
     */
    '@typescript-eslint/no-redeclare': eslintRules['no-redeclare'],

    /**
     * Disallow members of unions and intersections that do nothing or override type information.
     * @see {@link https://typescript-eslint.io/rules/no-redundant-type-constituents | no-redundant-type-constituents}
     */
    '@typescript-eslint/no-redundant-type-constituents': 'error',

    /**
     * Disallow invocation of `require()`.
     * @see {@link https://typescript-eslint.io/rules/no-require-imports | no-require-imports}
     */
    '@typescript-eslint/no-require-imports': 'error',

    /**
     * Disallow specified modules when loaded by import.
     * @see {@link https://typescript-eslint.io/rules/no-restricted-imports | no-restricted-imports}
     */
    '@typescript-eslint/no-restricted-imports': eslintRules['no-restricted-imports'],

    /**
     * Disallow certain types.
     * @see {@link https://typescript-eslint.io/rules/no-restricted-types | no-restricted-types}
     */
    '@typescript-eslint/no-restricted-types': 'error',

    /**
     * Disallow variable declarations from shadowing variables declared in the outer scope.
     * @see {@link https://typescript-eslint.io/rules/no-shadow | no-shadow}
     */
    '@typescript-eslint/no-shadow': eslintRules['no-shadow'],

    /**
     * Disallow aliasing this.
     * @see {@link https://typescript-eslint.io/rules/no-this-alias | no-this-alias}
     */
    '@typescript-eslint/no-this-alias': 'error',

    /**
     * Disallow unnecessary equality comparisons against boolean literals.
     * @see {@link https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare | no-unnecessary-boolean-literal-compare}
     */
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',

    /**
     * Disallow conditionals where the type is always truthy or always falsy.
     * @see {@link https://typescript-eslint.io/rules/no-unnecessary-condition | no-unnecessary-condition}
     */
    '@typescript-eslint/no-unnecessary-condition': 'error',

    /**
     * Disallow unnecessary assignment of constructor property parameter.
     * @see {@link https://typescript-eslint.io/rules/no-unnecessary-parameter-property-assignment | no-unnecessary-parameter-property-assignment}
     */
    '@typescript-eslint/no-unnecessary-parameter-property-assignment': 'off',

    /**
     * Disallow unnecessary namespace qualifiers.
     * @see {@link https://typescript-eslint.io/rules/no-unnecessary-qualifier | no-unnecessary-qualifier}
     */
    '@typescript-eslint/no-unnecessary-qualifier': 'error',

    /**
     * Disallow unnecessary template expressions.
     * @see {@link https://typescript-eslint.io/rules/no-unnecessary-template-expression | no-unnecessary-template-expression}
     */
    '@typescript-eslint/no-unnecessary-template-expression': 'error',

    /**
     * Disallow type arguments that are equal to the default.
     * @see {@link https://typescript-eslint.io/rules/no-unnecessary-type-arguments | no-unnecessary-type-arguments}
     */
    '@typescript-eslint/no-unnecessary-type-arguments': 'off',

    /**
     * Disallow type assertions that do not change the type of an expression.
     * @see {@link https://typescript-eslint.io/rules/no-unnecessary-type-assertion | no-unnecessary-type-assertion}
     */
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',

    /**
     * Disallow unnecessary constraints on generic types.
     * @see {@link https://typescript-eslint.io/rules/no-unnecessary-type-constraint | no-unnecessary-type-constraint}
     */
    '@typescript-eslint/no-unnecessary-type-constraint': 'error',

    /**
     * Disallow type parameters that aren't used multiple times.
     * @see {@link https://typescript-eslint.io/rules/no-unnecessary-type-parameters | no-unnecessary-type-parameters}
     */
    '@typescript-eslint/no-unnecessary-type-parameters': 'error',

    /**
     * Disallow calling a function with a value with type any.
     * @see {@link https://typescript-eslint.io/rules/no-unsafe-argument | no-unsafe-argument}
     */
    '@typescript-eslint/no-unsafe-argument': 'error',

    /**
     * Disallow assigning a value with type any to variables and properties.
     * @see {@link https://typescript-eslint.io/rules/no-unsafe-assignment | no-unsafe-assignment}
     */
    '@typescript-eslint/no-unsafe-assignment': 'error',

    /**
     * Disallow calling a value with type any.
     * @see {@link https://typescript-eslint.io/rules/no-unsafe-call | no-unsafe-call}
     */
    '@typescript-eslint/no-unsafe-call': 'error',

    /**
     * Disallow unsafe declaration merging.
     * @see {@link https://typescript-eslint.io/rules/no-unsafe-declaration-merging | no-unsafe-declaration-merging}
     */
    '@typescript-eslint/no-unsafe-declaration-merging': 'error',

    /**
     * Disallow comparing an enum value with a non-enum value.
     * @see {@link https://typescript-eslint.io/rules/no-unsafe-enum-comparison | no-unsafe-enum-comparison}
     */
    '@typescript-eslint/no-unsafe-enum-comparison': 'off',

    /**
     * Disallow using the unsafe built-in Function type.
     * @see {@link https://typescript-eslint.io/rules/no-unsafe-function-type | no-unsafe-function-type}
     */
    '@typescript-eslint/no-unsafe-function-type': 'error',

    /**
     * Disallow member access on a value with type any.
     * @see {@link https://typescript-eslint.io/rules/no-unsafe-member-access | no-unsafe-member-access}
     */
    '@typescript-eslint/no-unsafe-member-access': 'error',

    /**
     * Disallow returning a value with type any from a function.
     * @see {@link https://typescript-eslint.io/rules/no-unsafe-return | no-unsafe-return}
     */
    '@typescript-eslint/no-unsafe-return': 'error',

    /**
     * Require unary negation to take a number.
     * @see {@link https://typescript-eslint.io/rules/no-unsafe-unary-minus | no-unsafe-unary-minus}
     */
    '@typescript-eslint/no-unsafe-unary-minus': 'error',

    /**
     * Disallow unused expressions.
     * @see {@link https://typescript-eslint.io/rules/no-unused-expressions | no-unused-expressions}
     */
    '@typescript-eslint/no-unused-expressions': eslintRules['no-unused-expressions'],

    /**
     * Disallow unused variables.
     * @see {@link https://typescript-eslint.io/rules/no-unused-vars | no-unused-vars}
     */
    '@typescript-eslint/no-unused-vars': eslintRules['no-unused-vars'],

    /**
     * Disallow the use of variables before they are defined.
     * @see {@link https://typescript-eslint.io/rules/no-use-before-define | no-use-before-define}
     */
    '@typescript-eslint/no-use-before-define': eslintRules['no-use-before-define'],

    /**
     * Disallow unnecessary constructors.
     * @see {@link https://typescript-eslint.io/rules/no-useless-constructor | no-useless-constructor}
     */
    '@typescript-eslint/no-useless-constructor': eslintRules['no-useless-constructor'],

    /**
     * Disallow empty exports that don't change anything in a module file.
     * @see {@link https://typescript-eslint.io/rules/no-useless-empty-export | no-useless-empty-export}
     */
    '@typescript-eslint/no-useless-empty-export': 'error',

    /**
     * Disallow using confusing built-in primitive class wrappers.
     * @see {@link https://typescript-eslint.io/rules/no-wrapper-object-types | no-wrapper-object-types}
     */
    '@typescript-eslint/no-wrapper-object-types': 'error',

    /**
     * Enforce non-null assertions over explicit type casts.
     * @see {@link https://typescript-eslint.io/rules/non-nullable-type-assertion-style | non-nullable-type-assertion-style}
     */
    '@typescript-eslint/non-nullable-type-assertion-style': 'off',

    /**
     * Disallow throwing non-Error values as exceptions.
     * @see {@link https://typescript-eslint.io/rules/only-throw-error | only-throw-error}
     */
    '@typescript-eslint/only-throw-error': 'error',

    /**
     * Require or disallow parameter properties in class constructors.
     * @see {@link https://typescript-eslint.io/rules/parameter-properties | parameter-properties}
     */
    '@typescript-eslint/parameter-properties': 'error',

    /**
     * Enforce the use of as const over literal type.
     * @see {@link https://typescript-eslint.io/rules/prefer-as-const | prefer-as-const}
     */
    '@typescript-eslint/prefer-as-const': 'error',

    /**
     * Require destructuring from arrays and/or objects.
     * @see {@link https://typescript-eslint.io/rules/prefer-destructuring | prefer-destructuring}
     */
    '@typescript-eslint/prefer-destructuring': eslintRules['prefer-destructuring'],

    /**
     * Require each enum member value to be explicitly initialized.
     * @see {@link https://typescript-eslint.io/rules/prefer-enum-initializers | prefer-enum-initializers}
     */
    '@typescript-eslint/prefer-enum-initializers': 'off',

    /**
     * Enforce the use of `Array.prototype.find()` over `Array.prototype.filter()` followed by [0] when looking for a single result.
     * @see {@link https://typescript-eslint.io/rules/prefer-find | prefer-find}
     */
    '@typescript-eslint/prefer-find': 'error',

    /**
     * Enforce the use of for-of loop over the standard for loop where possible.
     * @see {@link https://typescript-eslint.io/rules/prefer-for-of | prefer-for-of}
     */
    '@typescript-eslint/prefer-for-of': 'error',

    /**
     * Enforce using function types instead of interfaces with call signatures.
     * @see {@link https://typescript-eslint.io/rules/prefer-function-type | prefer-function-type}
     */
    '@typescript-eslint/prefer-function-type': 'error',

    /**
     * Enforce includes method over `indexOf` method.
     * @see {@link https://typescript-eslint.io/rules/prefer-includes | prefer-includes}
     */
    '@typescript-eslint/prefer-includes': 'error',

    /**
     * Require all enum members to be literal values.
     * @see {@link https://typescript-eslint.io/rules/prefer-literal-enum-member | prefer-literal-enum-member}
     */
    '@typescript-eslint/prefer-literal-enum-member': 'off',

    /**
     * Require using namespace keyword over module keyword to declare custom TypeScript modules.
     * @see {@link https://typescript-eslint.io/rules/prefer-namespace-keyword | prefer-namespace-keyword}
     */
    '@typescript-eslint/prefer-namespace-keyword': 'error',

    /**
     * Enforce using the nullish coalescing operator instead of logical assignments or chaining.
     * @see {@link https://typescript-eslint.io/rules/prefer-nullish-coalescing | prefer-nullish-coalescing}
     */
    '@typescript-eslint/prefer-nullish-coalescing': 'error',

    /**
     * Enforce using concise optional chain expressions instead of chained logical ands, negated logical ors, or empty objects.
     * @see {@link https://typescript-eslint.io/rules/prefer-optional-chain | prefer-optional-chain}
     */
    '@typescript-eslint/prefer-optional-chain': 'error',

    /**
     * Require using Error objects as Promise rejection reasons.
     * @see {@link https://typescript-eslint.io/rules/prefer-promise-reject-errors | prefer-promise-reject-errors}
     */
    '@typescript-eslint/prefer-promise-reject-errors': eslintRules['prefer-promise-reject-errors'],

    /**
     * Require private members to be marked as readonly if they're never modified outside of the constructor.
     * @see {@link https://typescript-eslint.io/rules/prefer-readonly | prefer-readonly}
     */
    '@typescript-eslint/prefer-readonly': 'error',

    /**
     * Require function parameters to be typed as readonly to prevent accidental mutation of inputs.
     * @see {@link https://typescript-eslint.io/rules/prefer-readonly-parameter-types | prefer-readonly-parameter-types}
     */
    '@typescript-eslint/prefer-readonly-parameter-types': 'error',

    /**
     * Enforce using type parameter when calling `Array#reduce` instead of casting.
     * @see {@link https://typescript-eslint.io/rules/prefer-reduce-type-parameter | prefer-reduce-type-parameter}
     */
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',

    /**
     * Enforce RegExp#exec over String#match if no global flag is provided.
     * @see {@link https://typescript-eslint.io/rules/prefer-regexp-exec | prefer-regexp-exec}
     */
    '@typescript-eslint/prefer-regexp-exec': 'error',

    /**
     * Enforce that this is used when only this type is returned.
     * @see {@link https://typescript-eslint.io/rules/prefer-return-this-type | prefer-return-this-type}
     */
    '@typescript-eslint/prefer-return-this-type': 'error',

    /**
     * Enforce using `String#startsWith` and `String#endsWith` over other equivalent methods of checking substrings.
     * @see {@link https://typescript-eslint.io/rules/prefer-string-starts-ends-with | prefer-string-starts-ends-with}
     */
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',

    /**
     * Require any function or method that returns a Promise to be marked async.
     * @see {@link https://typescript-eslint.io/rules/promise-function-async | promise-function-async}
     */
    '@typescript-eslint/promise-function-async': 'error',

    /**
     * Require Array#sort and Array#toSorted calls to always provide a compareFunction.
     * @see {@link https://typescript-eslint.io/rules/require-array-sort-compare | require-array-sort-compare}
     */
    '@typescript-eslint/require-array-sort-compare': 'error',

    /**
     * Disallow async functions which do not return promises and have no await expression.
     * @see {@link https://typescript-eslint.io/rules/require-await | require-await}
     */
    '@typescript-eslint/require-await': eslintRules['require-await'],

    /**
     * Require both operands of addition to be the same type and be bigint, number, or string.
     * @see {@link https://typescript-eslint.io/rules/restrict-plus-operands | restrict-plus-operands}
     */
    '@typescript-eslint/restrict-plus-operands': 'error',

    /**
     * Enforce template literal expressions to be of string type.
     * @see {@link https://typescript-eslint.io/rules/restrict-template-expressions | restrict-template-expressions}
     */
    '@typescript-eslint/restrict-template-expressions': 'error',

    /**
     * Disallow certain types in boolean expressions.
     * @see {@link https://typescript-eslint.io/rules/strict-boolean-expressions | strict-boolean-expressions}
     */
    '@typescript-eslint/strict-boolean-expressions': 'error',

    /**
     * Require switch-case statements to be exhaustive.
     * @see {@link https://typescript-eslint.io/rules/switch-exhaustiveness-check | switch-exhaustiveness-check}
     */
    '@typescript-eslint/switch-exhaustiveness-check': 'error',

    /**
     * Disallow certain triple slash directives in favor of ES6-style import declarations.
     * @see {@link https://typescript-eslint.io/rules/triple-slash-reference | triple-slash-reference}
     */
    '@typescript-eslint/triple-slash-reference': 'error',

    /**
     * Require type annotations in certain places.
     * @see {@link https://typescript-eslint.io/rules/typedef | typedef}
     */
    '@typescript-eslint/typedef': 'off',

    /**
     * Enforce unbound methods are called with their expected scope.
     * @see {@link https://typescript-eslint.io/rules/unbound-method | unbound-method}
     */
    '@typescript-eslint/unbound-method': 'error',

    /**
     * Disallow two overloads that could be unified into one with a union or an optional/rest parameter.
     * @see {@link https://typescript-eslint.io/rules/unified-signatures | unified-signatures}
     */
    '@typescript-eslint/unified-signatures': 'error',

    /**
     * Enforce typing arguments in Promise rejection callbacks as unknown.
     * @see {@link https://typescript-eslint.io/rules/use-unknown-in-catch-callback-variable | use-unknown-in-catch-callback-variable}
     */
    '@typescript-eslint/use-unknown-in-catch-callback-variable': 'error',

    ...Object.fromEntries(rulesHandledByTypescript.map((rule) => [rule, 'off'])),
});

export { typescriptRules };
