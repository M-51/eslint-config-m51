import confusingBrowserGlobals from 'confusing-browser-globals';

const eslintRules = Object.freeze({
    /**
     * Enforce getter and setter pairs in objects and classes
     * @see {@link https://eslint.org/docs/latest/rules/accessor-pairs | accessor-pairs}
     */
    'accessor-pairs': 'error',

    /**
     * Enforce return statements in callbacks of array methods
     * @see {@link https://eslint.org/docs/latest/rules/array-callback-return | array-callback-return}
     */
    'array-callback-return': 'error',

    /**
     * Require braces around arrow function bodies
     * @see {@link https://eslint.org/docs/latest/rules/arrow-body-style | arrow-body-style}
     */
    'arrow-body-style': ['error', 'as-needed'],

    /**
     * Enforce the use of variables within the scope they are defined
     * @see {@link https://eslint.org/docs/latest/rules/block-scoped-var | block-scoped-var}
     */
    'block-scoped-var': 'error',

    /**
     * Enforce camelcase naming convention
     * @see {@link https://eslint.org/docs/latest/rules/camelcase | camelcase}
     */
    camelcase: ['error',
        {
            ignoreDestructuring: false,
            properties: 'never',
        },
    ],

    /**
     * Enforce or disallow capitalization of the first letter of a comment
     * @see {@link https://eslint.org/docs/latest/rules/capitalized-comments | capitalized-comments}
     */
    'capitalized-comments': ['off', 'never',
        {
            line: {
                ignorePattern: '.*',
                ignoreInlineComments: true,
                ignoreConsecutiveComments: true,
            },
            block: {
                ignorePattern: '.*',
                ignoreInlineComments: true,
                ignoreConsecutiveComments: true,
            },
        },
    ],

    /**
     * Enforce that class methods utilize this
     * @see {@link https://eslint.org/docs/latest/rules/class-methods-use-this | class-methods-use-this}
     */
    'class-methods-use-this': 'off',

    /**
     * Enforce a maximum cyclomatic complexity allowed in a program
     * @see {@link https://eslint.org/docs/latest/rules/complexity | complexity}
     */
    complexity: 'off',

    /**
     * Require return statements to either always or never specify values
     * @see {@link https://eslint.org/docs/latest/rules/consistent-return | consistent-return}
     */
    'consistent-return': 'error',

    /**
     * Enforce consistent naming when capturing the current execution context
     * @see {@link https://eslint.org/docs/latest/rules/consistent-this | consistent-this}
     */
    'consistent-this': ['error', 'that'],

    /**
     * Require super() calls in constructors
     * @see {@link https://eslint.org/docs/latest/rules/constructor-super | constructor-super}
     */
    'constructor-super': 'error',

    /**
     * Enforce consistent brace style for all control statements
     * @see {@link https://eslint.org/docs/latest/rules/curly | curly}
     */
    curly: ['error', 'multi-line'],

    /**
     * Require default cases in switch statements
     * @see {@link https://eslint.org/docs/latest/rules/default-case | default-case}
     */
    'default-case': ['error',
        {
            commentPattern: '^no default$',
        },
    ],

    /**
     * Enforce default clauses in switch statements to be last
     * @see {@link https://eslint.org/docs/latest/rules/default-case-last | default-case-last}
     */
    'default-case-last': 'error',

    /**
     * Enforce default parameters to be last
     * @see {@link https://eslint.org/docs/latest/rules/default-param-last | default-param-last}
     */
    'default-param-last': 'error',

    /**
     * Enforce dot notation whenever possible
     * @see {@link https://eslint.org/docs/latest/rules/dot-notation | dot-notation}
     */
    'dot-notation': ['error',
        {
            allowKeywords: true,
        },
    ],

    /**
     * Require the use of === and !==
     * @see {@link https://eslint.org/docs/latest/rules/eqeqeq | eqeqeq}
     */
    eqeqeq: ['error', 'always',
        {
            'null': 'ignore',
        },
    ],

    /**
     * Enforce "for" loop update clause moving the counter in the right direction
     * @see {@link https://eslint.org/docs/latest/rules/for-direction | for-direction}
     */
    'for-direction': 'error',

    /**
     * Require function names to match the name of the variable or property to which they are assigned
     * @see {@link https://eslint.org/docs/latest/rules/func-name-matching | func-name-matching}
     */
    'func-name-matching': ['off', 'always',
        {
            includeCommonJSModuleExports: false,
            considerPropertyDescriptor: true,
        },
    ],

    /**
     * Require or disallow named function expressions
     * @see {@link https://eslint.org/docs/latest/rules/func-names | func-names}
     */
    'func-names': 'warn',

    /**
     * Enforce the consistent use of either function declarations or expressions assigned to variables
     * @see {@link https://eslint.org/docs/latest/rules/func-style | func-style}
     */
    'func-style': ['off', 'expression'],

    /**
     * Enforce return statements in getters
     * @see {@link https://eslint.org/docs/latest/rules/getter-return | getter-return}
     */
    'getter-return': ['error',
        {
            allowImplicit: true,
        },
    ],

    /**
     * Require grouped accessor pairs in object literals and classes
     * @see {@link https://eslint.org/docs/latest/rules/grouped-accessor-pairs | grouped-accessor-pairs}
     */
    'grouped-accessor-pairs': 'error',

    /**
     * Require for-in loops to include an if statement
     * @see {@link https://eslint.org/docs/latest/rules/guard-for-in | guard-for-in}
     */
    'guard-for-in': 'error',

    /**
     * Disallow specified identifiers
     * @see {@link https://eslint.org/docs/latest/rules/id-denylist | id-denylist}
     */
    'id-denylist': 'off',

    /**
     * Enforce minimum and maximum identifier lengths
     * @see {@link https://eslint.org/docs/latest/rules/id-length | id-length}
     */
    'id-length': 'off',

    /**
     * Require identifiers to match a specified regular expression
     * @see {@link https://eslint.org/docs/latest/rules/id-match | id-match}
     */
    'id-match': 'off',

    /**
     * Require or disallow initialization in variable declarations
     * @see {@link https://eslint.org/docs/latest/rules/init-declarations | init-declarations}
     */
    'init-declarations': 'off',

    /**
     * Require or disallow logical assignment operator shorthand
     * @see {@link https://eslint.org/docs/latest/rules/logical-assignment-operators | logical-assignment-operators}
     */
    'logical-assignment-operators': ['off', 'always',
        {
            enforceForIfStatements: true,
        },
    ],

    /**
     * Enforce a maximum number of classes per file
     * @see {@link https://eslint.org/docs/latest/rules/max-classes-per-file | max-classes-per-file}
     */
    'max-classes-per-file': ['error', 1],

    /**
     * Enforce a maximum depth that blocks can be nested
     * @see {@link https://eslint.org/docs/latest/rules/max-depth | max-depth}
     */
    'max-depth': ['off', 4],

    /**
     * Enforce a maximum number of lines per file
     * @see {@link https://eslint.org/docs/latest/rules/max-lines | max-lines}
     */
    'max-lines': ['off',
        {
            max: 300,
            skipBlankLines: true,
            skipComments: true,
        },
    ],

    /**
     * Enforce a maximum number of lines of code in a function
     * @see {@link https://eslint.org/docs/latest/rules/max-lines-per-function | max-lines-per-function}
     */
    'max-lines-per-function': ['off',
        {
            max: 50,
            skipBlankLines: true,
            skipComments: true,
            IIFEs: true,
        },
    ],

    /**
     * Enforce a maximum depth that callbacks can be nested
     * @see {@link https://eslint.org/docs/latest/rules/max-nested-callbacks | max-nested-callbacks}
     */
    'max-nested-callbacks': 'off',

    /**
     * Enforce a maximum number of parameters in function definitions
     * @see {@link https://eslint.org/docs/latest/rules/max-params | max-params}
     */
    'max-params': ['off', 5],

    /**
     * Enforce a maximum number of statements allowed in function blocks
     * @see {@link https://eslint.org/docs/latest/rules/max-statements | max-statements}
     */
    'max-statements': ['off', 10],

    /**
     * Require constructor names to begin with a capital letter
     * @see {@link https://eslint.org/docs/latest/rules/new-cap | new-cap}
     */
    'new-cap': ['error',
        {
            newIsCap: true,
            newIsCapExceptions: [],
            capIsNew: false,
            capIsNewExceptions: [
                'Immutable.Map',
                'Immutable.Set',
                'Immutable.List',
            ],
        },
    ],

    /**
     * Disallow the use of alert, confirm, and prompt
     * @see {@link https://eslint.org/docs/latest/rules/no-alert | no-alert}
     */
    'no-alert': 'warn',

    /**
     * Disallow Array constructors
     * @see {@link https://eslint.org/docs/latest/rules/no-array-constructor | no-array-constructor}
     */
    'no-array-constructor': 'error',

    /**
     * Disallow using an async function as a Promise executor
     * @see {@link https://eslint.org/docs/latest/rules/no-async-promise-executor | no-async-promise-executor}
     */
    'no-async-promise-executor': 'error',

    /**
     * Disallow await inside of loops
     * @see {@link https://eslint.org/docs/latest/rules/no-await-in-loop | no-await-in-loop}
     */
    'no-await-in-loop': 'off',

    /**
     * Disallow bitwise operators
     * @see {@link https://eslint.org/docs/latest/rules/no-bitwise | no-bitwise}
     */
    'no-bitwise': 'error',

    /**
     * Disallow the use of arguments.caller or arguments.callee
     * @see {@link https://eslint.org/docs/latest/rules/no-caller | no-caller}
     */
    'no-caller': 'error',

    /**
     * Disallow lexical declarations in case clauses
     * @see {@link https://eslint.org/docs/latest/rules/no-case-declarations | no-case-declarations}
     */
    'no-case-declarations': 'error',

    /**
     * Disallow reassigning class members
     * @see {@link https://eslint.org/docs/latest/rules/no-class-assign | no-class-assign}
     */
    'no-class-assign': 'error',

    /**
     * Disallow comparing against -0
     * @see {@link https://eslint.org/docs/latest/rules/no-compare-neg-zero | no-compare-neg-zero}
     */
    'no-compare-neg-zero': 'error',

    /**
     * Disallow assignment operators in conditional expressions
     * @see {@link https://eslint.org/docs/latest/rules/no-cond-assign | no-cond-assign}
     */
    'no-cond-assign': ['error', 'always'],

    /**
     * Disallow the use of console
     * @see {@link https://eslint.org/docs/latest/rules/no-console | no-console}
     */
    'no-console': 'warn',

    /**
     * Disallow reassigning const variables
     * @see {@link https://eslint.org/docs/latest/rules/no-const-assign | no-const-assign}
     */
    'no-const-assign': 'error',

    /**
     * Disallow expressions where the operation doesn't affect the value
     * @see {@link https://eslint.org/docs/latest/rules/no-constant-binary-expression | no-constant-binary-expression}
     */
    'no-constant-binary-expression': 'off',

    /**
     * Disallow constant expressions in conditions
     * @see {@link https://eslint.org/docs/latest/rules/no-constant-condition | no-constant-condition}
     */
    'no-constant-condition': 'warn',

    /**
     * Disallow returning value from constructor
     * @see {@link https://eslint.org/docs/latest/rules/no-constructor-return | no-constructor-return}
     */
    'no-constructor-return': 'error',

    /**
     * Disallow continue statements
     * @see {@link https://eslint.org/docs/latest/rules/no-continue | no-continue}
     */
    'no-continue': 'error',

    /**
     * Disallow control characters in regular expressions
     * @see {@link https://eslint.org/docs/latest/rules/no-control-regex | no-control-regex}
     */
    'no-control-regex': 'error',

    /**
     * Disallow the use of debugger
     * @see {@link https://eslint.org/docs/latest/rules/no-debugger | no-debugger}
     */
    'no-debugger': 'error',

    /**
     * Disallow deleting variables
     * @see {@link https://eslint.org/docs/latest/rules/no-delete-var | no-delete-var}
     */
    'no-delete-var': 'error',

    /**
     * Disallow equal signs explicitly at the beginning of regular expressions
     * @see {@link https://eslint.org/docs/latest/rules/no-div-regex | no-div-regex}
     */
    'no-div-regex': 'off',

    /**
     * Disallow duplicate arguments in function definitions
     * @see {@link https://eslint.org/docs/latest/rules/no-dupe-args | no-dupe-args}
     */
    'no-dupe-args': 'error',

    /**
     * Disallow duplicate class members
     * @see {@link https://eslint.org/docs/latest/rules/no-dupe-class-members | no-dupe-class-members}
     */
    'no-dupe-class-members': 'error',

    /**
     * Disallow duplicate conditions in if-else-if chains
     * @see {@link https://eslint.org/docs/latest/rules/no-dupe-else-if | no-dupe-else-if}
     */
    'no-dupe-else-if': 'error',

    /**
     * Disallow duplicate keys in object literals
     * @see {@link https://eslint.org/docs/latest/rules/no-dupe-keys | no-dupe-keys}
     */
    'no-dupe-keys': 'error',

    /**
     * Disallow duplicate case labels
     * @see {@link https://eslint.org/docs/latest/rules/no-duplicate-case | no-duplicate-case}
     */
    'no-duplicate-case': 'error',

    /**
     * Disallow duplicate module imports
     * @see {@link https://eslint.org/docs/latest/rules/no-duplicate-imports | no-duplicate-imports}
     */
    'no-duplicate-imports': 'off',

    /**
     * Disallow else blocks after return statements in if statements
     * @see {@link https://eslint.org/docs/latest/rules/no-else-return | no-else-return}
     */
    'no-else-return': ['error',
        {
            allowElseIf: false,
        },
    ],

    /**
     * Disallow empty block statements
     * @see {@link https://eslint.org/docs/latest/rules/no-empty | no-empty}
     */
    'no-empty': 'error',

    /**
     * Disallow empty character classes in regular expressions
     * @see {@link https://eslint.org/docs/latest/rules/no-empty-character-class | no-empty-character-class}
     */
    'no-empty-character-class': 'error',

    /**
     * Disallow empty functions
     * @see {@link https://eslint.org/docs/latest/rules/no-empty-function | no-empty-function}
     */
    'no-empty-function': 'error',

    /**
     * Disallow empty destructuring patterns
     * @see {@link https://eslint.org/docs/latest/rules/no-empty-pattern | no-empty-pattern}
     */
    'no-empty-pattern': 'error',

    /**
     * Disallow empty static blocks
     * @see {@link https://eslint.org/docs/latest/rules/no-empty-static-block | no-empty-static-block}
     */
    'no-empty-static-block': 'off',

    /**
     * Disallow null comparisons without type-checking operators
     * @see {@link https://eslint.org/docs/latest/rules/no-eq-null | no-eq-null}
     */
    'no-eq-null': 'off',

    /**
     * Disallow the use of eval()
     * @see {@link https://eslint.org/docs/latest/rules/no-eval | no-eval}
     */
    'no-eval': 'error',

    /**
     * Disallow reassigning exceptions in catch clauses
     * @see {@link https://eslint.org/docs/latest/rules/no-ex-assign | no-ex-assign}
     */
    'no-ex-assign': 'error',

    /**
     * Disallow extending native types
     * @see {@link https://eslint.org/docs/latest/rules/no-extend-native | no-extend-native}
     */
    'no-extend-native': 'error',

    /**
     * Disallow unnecessary calls to .bind()
     * @see {@link https://eslint.org/docs/latest/rules/no-extra-bind | no-extra-bind}
     */
    'no-extra-bind': 'error',

    /**
     * Disallow unnecessary boolean casts
     * @see {@link https://eslint.org/docs/latest/rules/no-extra-boolean-cast | no-extra-boolean-cast}
     */
    'no-extra-boolean-cast': 'error',

    /**
     * Disallow unnecessary labels
     * @see {@link https://eslint.org/docs/latest/rules/no-extra-label | no-extra-label}
     */
    'no-extra-label': 'error',

    /**
     * Disallow fallthrough of case statements
     * @see {@link https://eslint.org/docs/latest/rules/no-fallthrough | no-fallthrough}
     */
    'no-fallthrough': 'error',

    /**
     * Disallow reassigning function declarations
     * @see {@link https://eslint.org/docs/latest/rules/no-func-assign | no-func-assign}
     */
    'no-func-assign': 'error',

    /**
     * Disallow assignments to native objects or read-only global variables
     * @see {@link https://eslint.org/docs/latest/rules/no-global-assign | no-global-assign}
     */
    'no-global-assign': ['error',
        {
            exceptions: [],
        },
    ],

    /**
     * Disallow shorthand type conversions
     * @see {@link https://eslint.org/docs/latest/rules/no-implicit-coercion | no-implicit-coercion}
     */
    'no-implicit-coercion': ['off',
        {
            'boolean': false,
            number: true,
            string: true,
            allow: [],
        },
    ],

    /**
     * Disallow declarations in the global scope
     * @see {@link https://eslint.org/docs/latest/rules/no-implicit-globals | no-implicit-globals}
     */
    'no-implicit-globals': 'off',

    /**
     * Disallow the use of eval()-like methods
     * @see {@link https://eslint.org/docs/latest/rules/no-implied-eval | no-implied-eval}
     */
    'no-implied-eval': 'error',

    /**
     * Disallow assigning to imported bindings
     * @see {@link https://eslint.org/docs/latest/rules/no-import-assign | no-import-assign}
     */
    'no-import-assign': 'error',

    /**
     * Disallow inline comments after code
     * @see {@link https://eslint.org/docs/latest/rules/no-inline-comments | no-inline-comments}
     */
    'no-inline-comments': 'off',

    /**
     * Disallow variable or function declarations in nested blocks
     * @see {@link https://eslint.org/docs/latest/rules/no-inner-declarations | no-inner-declarations}
     */
    'no-inner-declarations': 'error',

    /**
     * Disallow invalid regular expression strings in RegExp constructors
     * @see {@link https://eslint.org/docs/latest/rules/no-invalid-regexp | no-invalid-regexp}
     */
    'no-invalid-regexp': 'error',

    /**
     * Disallow use of this in contexts where the value of this is undefined
     * @see {@link https://eslint.org/docs/latest/rules/no-invalid-this | no-invalid-this}
     */
    'no-invalid-this': 'off',

    /**
     * Disallow irregular whitespace
     * @see {@link https://eslint.org/docs/latest/rules/no-irregular-whitespace | no-irregular-whitespace}
     */
    'no-irregular-whitespace': 'error',

    /**
     * Disallow the use of the __iterator__ property
     * @see {@link https://eslint.org/docs/latest/rules/no-iterator | no-iterator}
     */
    'no-iterator': 'error',

    /**
     * Disallow labels that share a name with a variable
     * @see {@link https://eslint.org/docs/latest/rules/no-label-var | no-label-var}
     */
    'no-label-var': 'error',

    /**
     * Disallow labeled statements
     * @see {@link https://eslint.org/docs/latest/rules/no-labels | no-labels}
     */
    'no-labels': ['error',
        {
            allowLoop: false,
            allowSwitch: false,
        },
    ],

    /**
     * Disallow unnecessary nested blocks
     * @see {@link https://eslint.org/docs/latest/rules/no-lone-blocks | no-lone-blocks}
     */
    'no-lone-blocks': 'error',

    /**
     * Disallow if statements as the only statement in else blocks
     * @see {@link https://eslint.org/docs/latest/rules/no-lonely-if | no-lonely-if}
     */
    'no-lonely-if': 'error',

    /**
     * Disallow function declarations that contain unsafe references inside loop statements
     * @see {@link https://eslint.org/docs/latest/rules/no-loop-func | no-loop-func}
     */
    'no-loop-func': 'error',

    /**
     * Disallow literal numbers that lose precision
     * @see {@link https://eslint.org/docs/latest/rules/no-loss-of-precision | no-loss-of-precision}
     */
    'no-loss-of-precision': 'error',

    /**
     * Disallow magic numbers
     * @see {@link https://eslint.org/docs/latest/rules/no-magic-numbers | no-magic-numbers}
     */
    'no-magic-numbers': ['off',
        {
            ignore: [],
            ignoreArrayIndexes: true,
            enforceConst: true,
            detectObjects: false,
        },
    ],

    /**
     * Disallow characters which are made with multiple code points in character class syntax
     * @see {@link https://eslint.org/docs/latest/rules/no-misleading-character-class | no-misleading-character-class}
     */
    'no-misleading-character-class': 'error',

    /**
     * Disallow use of chained assignment expressions
     * @see {@link https://eslint.org/docs/latest/rules/no-multi-assign | no-multi-assign}
     */
    'no-multi-assign': 'error',

    /**
     * Disallow multiline strings
     * @see {@link https://eslint.org/docs/latest/rules/no-multi-str | no-multi-str}
     */
    'no-multi-str': 'error',

    /**
     * Disallow negated conditions
     * @see {@link https://eslint.org/docs/latest/rules/no-negated-condition | no-negated-condition}
     */
    'no-negated-condition': 'off',

    /**
     * Disallow nested ternary expressions
     * @see {@link https://eslint.org/docs/latest/rules/no-nested-ternary | no-nested-ternary}
     */
    'no-nested-ternary': 'error',

    /**
     * Disallow new operators outside of assignments or comparisons
     * @see {@link https://eslint.org/docs/latest/rules/no-new | no-new}
     */
    'no-new': 'error',

    /**
     * Disallow new operators with the Function object
     * @see {@link https://eslint.org/docs/latest/rules/no-new-func | no-new-func}
     */
    'no-new-func': 'error',

    /**
     * Disallow new operators with global non-constructor functions
     * @see {@link https://eslint.org/docs/latest/rules/no-new-native-nonconstructor | no-new-native-nonconstructor}
     */
    'no-new-native-nonconstructor': 'off',

    /**
     * Disallow new operators with the String, Number, and Boolean objects
     * @see {@link https://eslint.org/docs/latest/rules/no-new-wrappers | no-new-wrappers}
     */
    'no-new-wrappers': 'error',

    /**
     * Disallow \8 and \9 escape sequences in string literals
     * @see {@link https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape | no-nonoctal-decimal-escape}
     */
    'no-nonoctal-decimal-escape': 'error',

    /**
     * Disallow calling global object properties as functions
     * @see {@link https://eslint.org/docs/latest/rules/no-obj-calls | no-obj-calls}
     */
    'no-obj-calls': 'error',

    /**
     * Disallow calls to the Object constructor without an argument
     * @see {@link https://eslint.org/docs/latest/rules/no-object-constructor | no-object-constructor}
     */
    'no-object-constructor': 'off',

    /**
     * Disallow octal literals
     * @see {@link https://eslint.org/docs/latest/rules/no-octal | no-octal}
     */
    'no-octal': 'error',

    /**
     * Disallow octal escape sequences in string literals
     * @see {@link https://eslint.org/docs/latest/rules/no-octal-escape | no-octal-escape}
     */
    'no-octal-escape': 'error',

    /**
     * Disallow reassigning function parameters
     * @see {@link https://eslint.org/docs/latest/rules/no-param-reassign | no-param-reassign}
     */
    'no-param-reassign': ['error',
        {
            props: false,
        },
    ],

    /**
     * Disallow the unary operators ++ and --
     * @see {@link https://eslint.org/docs/latest/rules/no-plusplus | no-plusplus}
     */
    'no-plusplus': 'error',

    /**
     * Disallow returning values from Promise executor functions
     * @see {@link https://eslint.org/docs/latest/rules/no-promise-executor-return | no-promise-executor-return}
     */
    'no-promise-executor-return': 'error',

    /**
     * Disallow the use of the __proto__ property
     * @see {@link https://eslint.org/docs/latest/rules/no-proto | no-proto}
     */
    'no-proto': 'error',

    /**
     * Disallow calling some Object.prototype methods directly on objects
     * @see {@link https://eslint.org/docs/latest/rules/no-prototype-builtins | no-prototype-builtins}
     */
    'no-prototype-builtins': 'error',

    /**
     * Disallow variable redeclaration
     * @see {@link https://eslint.org/docs/latest/rules/no-redeclare | no-redeclare}
     */
    'no-redeclare': 'error',

    /**
     * Disallow multiple spaces in regular expressions
     * @see {@link https://eslint.org/docs/latest/rules/no-regex-spaces | no-regex-spaces}
     */
    'no-regex-spaces': 'error',

    /**
     * Disallow specified names in exports
     * @see {@link https://eslint.org/docs/latest/rules/no-restricted-exports | no-restricted-exports}
     */
    'no-restricted-exports': ['error',
        {
            restrictedNamedExports: [
                'default',
                'then',
            ],
        },
    ],

    /**
     * Disallow specified global variables
     * @see {@link https://eslint.org/docs/latest/rules/no-restricted-globals | no-restricted-globals}
     */
    'no-restricted-globals': ['error',
        {
            name: 'isFinite',
            message: 'Use Number.isFinite instead.',
        },
        {
            name: 'isNaN',
            message: 'Use Number.isNaN instead.',
        },
        ...confusingBrowserGlobals.map((g) => ({
            name: g,
            message: `Use window.${g} instead.`,
        })),
    ],

    /**
     * Disallow specified modules when loaded by import
     * @see {@link https://eslint.org/docs/latest/rules/no-restricted-imports | no-restricted-imports}
     */
    'no-restricted-imports': ['off',
        {
            paths: [],
            patterns: [],
        },
    ],

    /**
     * Disallow certain properties on certain objects
     * @see {@link https://eslint.org/docs/latest/rules/no-restricted-properties | no-restricted-properties}
     */
    'no-restricted-properties': ['error',
        {
            object: 'arguments',
            property: 'callee',
            message: 'arguments.callee is deprecated',
        },
        {
            object: 'global',
            property: 'isFinite',
            message: 'Please use Number.isFinite instead',
        },
        {
            object: 'self',
            property: 'isFinite',
            message: 'Please use Number.isFinite instead',
        },
        {
            object: 'window',
            property: 'isFinite',
            message: 'Please use Number.isFinite instead',
        },
        {
            object: 'global',
            property: 'isNaN',
            message: 'Please use Number.isNaN instead',
        },
        {
            object: 'self',
            property: 'isNaN',
            message: 'Please use Number.isNaN instead',
        },
        {
            object: 'window',
            property: 'isNaN',
            message: 'Please use Number.isNaN instead',
        },
        {
            property: '__defineGetter__',
            message: 'Please use Object.defineProperty instead.',
        },
        {
            property: '__defineSetter__',
            message: 'Please use Object.defineProperty instead.',
        },
        {
            object: 'Math',
            property: 'pow',
            message: 'Use the exponentiation operator (**) instead.',
        },
    ],

    /**
     * Disallow specified syntax
     * @see {@link https://eslint.org/docs/latest/rules/no-restricted-syntax | no-restricted-syntax}
     */
    'no-restricted-syntax': ['error',
        {
            selector: 'ForInStatement',
            message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
        },
        {
            selector: 'LabeledStatement',
            message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
        },
        {
            selector: 'WithStatement',
            message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
        },
        {
            selector: 'TSEnumDeclaration',
            message: 'I don\'t like enums.',
        },
    ],

    /**
     * Disallow assignment operators in return statements
     * @see {@link https://eslint.org/docs/latest/rules/no-return-assign | no-return-assign}
     */
    'no-return-assign': ['error', 'always'],

    /**
     * Disallow javascript: urls
     * @see {@link https://eslint.org/docs/latest/rules/no-script-url | no-script-url}
     */
    'no-script-url': 'error',

    /**
     * Disallow assignments where both sides are exactly the same
     * @see {@link https://eslint.org/docs/latest/rules/no-self-assign | no-self-assign}
     */
    'no-self-assign': ['error',
        {
            props: true,
        },
    ],

    /**
     * Disallow comparisons where both sides are exactly the same
     * @see {@link https://eslint.org/docs/latest/rules/no-self-compare | no-self-compare}
     */
    'no-self-compare': 'error',

    /**
     * Disallow comma operators
     * @see {@link https://eslint.org/docs/latest/rules/no-sequences | no-sequences}
     */
    'no-sequences': 'error',

    /**
     * Disallow returning values from setters
     * @see {@link https://eslint.org/docs/latest/rules/no-setter-return | no-setter-return}
     */
    'no-setter-return': 'error',

    /**
     * Disallow variable declarations from shadowing variables declared in the outer scope
     * @see {@link https://eslint.org/docs/latest/rules/no-shadow | no-shadow}
     */
    'no-shadow': 'error',

    /**
     * Disallow identifiers from shadowing restricted names
     * @see {@link https://eslint.org/docs/latest/rules/no-shadow-restricted-names | no-shadow-restricted-names}
     */
    'no-shadow-restricted-names': 'error',

    /**
     * Disallow sparse arrays
     * @see {@link https://eslint.org/docs/latest/rules/no-sparse-arrays | no-sparse-arrays}
     */
    'no-sparse-arrays': 'error',

    /**
     * Disallow template literal placeholder syntax in regular strings
     * @see {@link https://eslint.org/docs/latest/rules/no-template-curly-in-string | no-template-curly-in-string}
     */
    'no-template-curly-in-string': 'error',

    /**
     * Disallow ternary operators
     * @see {@link https://eslint.org/docs/latest/rules/no-ternary | no-ternary}
     */
    'no-ternary': 'off',

    /**
     * Disallow this/super before calling super() in constructors
     * @see {@link https://eslint.org/docs/latest/rules/no-this-before-super | no-this-before-super}
     */
    'no-this-before-super': 'error',

    /**
     * Disallow throwing literals as exceptions
     * @see {@link https://eslint.org/docs/latest/rules/no-throw-literal | no-throw-literal}
     */
    'no-throw-literal': 'error',

    /**
     * Disallow the use of undeclared variables unless mentioned in `global` comments
     * @see {@link https://eslint.org/docs/latest/rules/no-undef | no-undef}
     */
    'no-undef': 'error',

    /**
     * Disallow initializing variables to undefined
     * @see {@link https://eslint.org/docs/latest/rules/no-undef-init | no-undef-init}
     */
    'no-undef-init': 'error',

    /**
     * Disallow the use of undefined as an identifier
     * @see {@link https://eslint.org/docs/latest/rules/no-undefined | no-undefined}
     */
    'no-undefined': 'off',

    /**
     * Disallow dangling underscores in identifiers
     * @see {@link https://eslint.org/docs/latest/rules/no-underscore-dangle | no-underscore-dangle}
     */
    'no-underscore-dangle': ['error',
        {
            allow: [],
            allowAfterThis: false,
            allowAfterSuper: false,
            enforceInMethodNames: true,
        },
    ],

    /**
     * Disallow confusing multiline expressions
     * @see {@link https://eslint.org/docs/latest/rules/no-unexpected-multiline | no-unexpected-multiline}
     */
    'no-unexpected-multiline': 'error',

    /**
     * Disallow unmodified loop conditions
     * @see {@link https://eslint.org/docs/latest/rules/no-unmodified-loop-condition | no-unmodified-loop-condition}
     */
    'no-unmodified-loop-condition': 'off',

    /**
     * Disallow ternary operators when simpler alternatives exist
     * @see {@link https://eslint.org/docs/latest/rules/no-unneeded-ternary | no-unneeded-ternary}
     */
    'no-unneeded-ternary': ['error',
        {
            defaultAssignment: false,
        },
    ],

    /**
     * Disallow unreachable code after return, throw, continue, and break statements
     * @see {@link https://eslint.org/docs/latest/rules/no-unreachable | no-unreachable}
     */
    'no-unreachable': 'error',

    /**
     * Disallow loops with a body that allows only one iteration
     * @see {@link https://eslint.org/docs/latest/rules/no-unreachable-loop | no-unreachable-loop}
     */
    'no-unreachable-loop': ['error',
        {
            ignore: [],
        },
    ],

    /**
     * Disallow control flow statements in finally blocks
     * @see {@link https://eslint.org/docs/latest/rules/no-unsafe-finally | no-unsafe-finally}
     */
    'no-unsafe-finally': 'error',

    /**
     * Disallow negating the left operand of relational operators
     * @see {@link https://eslint.org/docs/latest/rules/no-unsafe-negation | no-unsafe-negation}
     */
    'no-unsafe-negation': 'error',

    /**
     * Disallow use of optional chaining in contexts where the undefined value is not allowed
     * @see {@link https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining | no-unsafe-optional-chaining}
     */
    'no-unsafe-optional-chaining': ['error',
        {
            disallowArithmeticOperators: true,
        },
    ],

    /**
     * Disallow unused expressions
     * @see {@link https://eslint.org/docs/latest/rules/no-unused-expressions | no-unused-expressions}
     */
    'no-unused-expressions': ['error',
        {
            allowShortCircuit: false,
            allowTernary: false,
            allowTaggedTemplates: false,
        },
    ],

    /**
     * Disallow unused labels
     * @see {@link https://eslint.org/docs/latest/rules/no-unused-labels | no-unused-labels}
     */
    'no-unused-labels': 'error',

    /**
     * Disallow unused private class members
     * @see {@link https://eslint.org/docs/latest/rules/no-unused-private-class-members | no-unused-private-class-members}
     */
    'no-unused-private-class-members': 'off',

    /**
     * Disallow unused variables
     * @see {@link https://eslint.org/docs/latest/rules/no-unused-vars | no-unused-vars}
     */
    'no-unused-vars': ['error',
        {
            vars: 'all',
            args: 'after-used',
            ignoreRestSiblings: true,
        },
    ],

    /**
     * Disallow the use of variables before they are defined
     * @see {@link https://eslint.org/docs/latest/rules/no-use-before-define | no-use-before-define}
     */
    'no-use-before-define': ['error',
        {
            functions: true,
            classes: true,
            variables: true,
        },
    ],

    /**
     * Disallow variable assignments when the value is not used
     * @see {@link https://eslint.org/docs/latest/rules/no-useless-assignment | no-useless-assignment}
     */
    'no-useless-assignment': 'error',

    /**
     * Disallow useless backreferences in regular expressions
     * @see {@link https://eslint.org/docs/latest/rules/no-useless-backreference | no-useless-backreference}
     */
    'no-useless-backreference': 'error',

    /**
     * Disallow unnecessary calls to .call() and .apply()
     * @see {@link https://eslint.org/docs/latest/rules/no-useless-call | no-useless-call}
     */
    'no-useless-call': 'off',

    /**
     * Disallow unnecessary catch clauses
     * @see {@link https://eslint.org/docs/latest/rules/no-useless-catch | no-useless-catch}
     */
    'no-useless-catch': 'error',

    /**
     * Disallow unnecessary computed property keys in objects and classes
     * @see {@link https://eslint.org/docs/latest/rules/no-useless-computed-key | no-useless-computed-key}
     */
    'no-useless-computed-key': 'error',

    /**
     * Disallow unnecessary concatenation of literals or template literals
     * @see {@link https://eslint.org/docs/latest/rules/no-useless-concat | no-useless-concat}
     */
    'no-useless-concat': 'error',

    /**
     * Disallow unnecessary constructors
     * @see {@link https://eslint.org/docs/latest/rules/no-useless-constructor | no-useless-constructor}
     */
    'no-useless-constructor': 'error',

    /**
     * Disallow unnecessary escape characters
     * @see {@link https://eslint.org/docs/latest/rules/no-useless-escape | no-useless-escape}
     */
    'no-useless-escape': 'error',

    /**
     * Disallow renaming import, export, and destructured assignments to the same name
     * @see {@link https://eslint.org/docs/latest/rules/no-useless-rename | no-useless-rename}
     */
    'no-useless-rename': ['error',
        {
            ignoreDestructuring: false,
            ignoreImport: false,
            ignoreExport: false,
        },
    ],

    /**
     * Disallow redundant return statements
     * @see {@link https://eslint.org/docs/latest/rules/no-useless-return | no-useless-return}
     */
    'no-useless-return': 'error',

    /**
     * Require let or const instead of var
     * @see {@link https://eslint.org/docs/latest/rules/no-var | no-var}
     */
    'no-var': 'error',

    /**
     * Disallow void operators
     * @see {@link https://eslint.org/docs/latest/rules/no-void | no-void}
     */
    'no-void': 'error',

    /**
     * Disallow specified warning terms in comments
     * @see {@link https://eslint.org/docs/latest/rules/no-warning-comments | no-warning-comments}
     */
    'no-warning-comments': ['off',
        {
            terms: [
                'todo',
                'fixme',
                'xxx',
            ],
            location: 'start',
        },
    ],

    /**
     * Disallow with statements
     * @see {@link https://eslint.org/docs/latest/rules/no-with | no-with}
     */
    'no-with': 'error',

    /**
     * Require or disallow method and property shorthand syntax for object literals
     * @see {@link https://eslint.org/docs/latest/rules/object-shorthand | object-shorthand}
     */
    'object-shorthand': ['error', 'always',
        {
            ignoreConstructors: false,
            avoidQuotes: true,
        },
    ],

    /**
     * Enforce variables to be declared either together or separately in functions
     * @see {@link https://eslint.org/docs/latest/rules/one-var | one-var}
     */
    'one-var': ['error', 'never'],

    /**
     * Require or disallow assignment operator shorthand where possible
     * @see {@link https://eslint.org/docs/latest/rules/operator-assignment | operator-assignment}
     */
    'operator-assignment': ['error', 'always'],

    /**
     * Require using arrow functions for callbacks
     * @see {@link https://eslint.org/docs/latest/rules/prefer-arrow-callback | prefer-arrow-callback}
     */
    'prefer-arrow-callback': ['error',
        {
            allowNamedFunctions: false,
            allowUnboundThis: true,
        },
    ],

    /**
     * Require const declarations for variables that are never reassigned after declared
     * @see {@link https://eslint.org/docs/latest/rules/prefer-const | prefer-const}
     */
    'prefer-const': ['error',
        {
            destructuring: 'any',
            ignoreReadBeforeAssign: true,
        },
    ],

    /**
     * Require destructuring from arrays and/or objects
     * @see {@link https://eslint.org/docs/latest/rules/prefer-destructuring | prefer-destructuring}
     */
    'prefer-destructuring': ['error',
        {
            array: false,
            object: true,
        },
    ],

    /**
     * Disallow the use of Math.pow in favor of the ** operator
     * @see {@link https://eslint.org/docs/latest/rules/prefer-exponentiation-operator | prefer-exponentiation-operator}
     */
    'prefer-exponentiation-operator': 'error',

    /**
     * Enforce using named capture group in regular expression
     * @see {@link https://eslint.org/docs/latest/rules/prefer-named-capture-group | prefer-named-capture-group}
     */
    'prefer-named-capture-group': 'off',

    /**
     * Disallow parseInt() and Number.parseInt() in favor of binary, octal, and hexadecimal literals
     * @see {@link https://eslint.org/docs/latest/rules/prefer-numeric-literals | prefer-numeric-literals}
     */
    'prefer-numeric-literals': 'error',

    /**
     * Disallow use of Object.prototype.hasOwnProperty.call() and prefer use of Object.hasOwn()
     * @see {@link https://eslint.org/docs/latest/rules/prefer-object-has-own | prefer-object-has-own}
     */
    'prefer-object-has-own': 'off',

    /**
     * Disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead
     * @see {@link https://eslint.org/docs/latest/rules/prefer-object-spread | prefer-object-spread}
     */
    'prefer-object-spread': 'error',

    /**
     * Require using Error objects as Promise rejection reasons
     * @see {@link https://eslint.org/docs/latest/rules/prefer-promise-reject-errors | prefer-promise-reject-errors}
     */
    'prefer-promise-reject-errors': ['error',
        {
            allowEmptyReject: true,
        },
    ],

    /**
     * Disallow use of the RegExp constructor in favor of regular expression literals
     * @see {@link https://eslint.org/docs/latest/rules/prefer-regex-literals | prefer-regex-literals}
     */
    'prefer-regex-literals': ['error',
        {
            disallowRedundantWrapping: true,
        },
    ],

    /**
     * Require rest parameters instead of arguments
     * @see {@link https://eslint.org/docs/latest/rules/prefer-rest-params | prefer-rest-params}
     */
    'prefer-rest-params': 'error',

    /**
     * Require spread operators instead of .apply()
     * @see {@link https://eslint.org/docs/latest/rules/prefer-spread | prefer-spread}
     */
    'prefer-spread': 'error',

    /**
     * Require template literals instead of string concatenation
     * @see {@link https://eslint.org/docs/latest/rules/prefer-template | prefer-template}
     */
    'prefer-template': 'error',

    /**
     * Enforce the consistent use of the radix argument when using parseInt()
     * @see {@link https://eslint.org/docs/latest/rules/radix | radix}
     */
    radix: 'error',

    /**
     * Disallow assignments that can lead to race conditions due to usage of await or yield
     * @see {@link https://eslint.org/docs/latest/rules/require-atomic-updates | require-atomic-updates}
     */
    'require-atomic-updates': 'off',

    /**
     * Disallow async functions which have no await expression
     * @see {@link https://eslint.org/docs/latest/rules/require-await | require-await}
     */
    'require-await': 'error',

    /**
     * Enforce the use of u or v flag on RegExp
     * @see {@link https://eslint.org/docs/latest/rules/require-unicode-regexp | require-unicode-regexp}
     */
    'require-unicode-regexp': 'off',

    /**
     * Require generator functions to contain yield
     * @see {@link https://eslint.org/docs/latest/rules/require-yield | require-yield}
     */
    'require-yield': 'error',

    /**
     * Enforce sorted import declarations within modules
     * @see {@link https://eslint.org/docs/latest/rules/sort-imports | sort-imports}
     */
    'sort-imports': ['off',
        {
            ignoreCase: false,
            ignoreDeclarationSort: false,
            ignoreMemberSort: false,
            memberSyntaxSortOrder: [
                'none',
                'all',
                'multiple',
                'single',
            ],
        },
    ],

    /**
     * Require object keys to be sorted
     * @see {@link https://eslint.org/docs/latest/rules/sort-keys | sort-keys}
     */
    'sort-keys': ['off', 'asc',
        {
            caseSensitive: false,
            natural: true,
        },
    ],

    /**
     * Require variables within the same declaration block to be sorted
     * @see {@link https://eslint.org/docs/latest/rules/sort-vars | sort-vars}
     */
    'sort-vars': 'off',

    /**
     * Require or disallow strict mode directives
     * @see {@link https://eslint.org/docs/latest/rules/strict | strict}
     */
    strict: ['error', 'never'],

    /**
     * Require symbol descriptions
     * @see {@link https://eslint.org/docs/latest/rules/symbol-description | symbol-description}
     */
    'symbol-description': 'error',

    /**
     * Require or disallow Unicode byte order mark (BOM)
     * @see {@link https://eslint.org/docs/latest/rules/unicode-bom | unicode-bom}
     */
    'unicode-bom': ['error', 'never'],

    /**
     * Require calls to isNaN() when checking for NaN
     * @see {@link https://eslint.org/docs/latest/rules/use-isnan | use-isnan}
     */
    'use-isnan': 'error',

    /**
     * Enforce comparing typeof expressions against valid strings
     * @see {@link https://eslint.org/docs/latest/rules/valid-typeof | valid-typeof}
     */
    'valid-typeof': ['error',
        {
            requireStringLiterals: true,
        },
    ],

    /**
     * Require var declarations be placed at the top of their containing scope
     * @see {@link https://eslint.org/docs/latest/rules/vars-on-top | vars-on-top}
     */
    'vars-on-top': 'error',

    /**
     * Require or disallow "Yoda" conditions
     * @see {@link https://eslint.org/docs/latest/rules/yoda | yoda}
     */
    yoda: 'error',
});

export { eslintRules };
