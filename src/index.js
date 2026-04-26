import globals from 'globals';
import stylisticPlugin from '@stylistic/eslint-plugin';
import importXPlugin from 'eslint-plugin-import-x';
import typescriptEslint from 'typescript-eslint';
import reactPlugin from '@eslint-react/eslint-plugin';

import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import { eslintRules } from './rules/eslint.js';
import { typescriptRules } from './rules/typescript.js';
import { importJavascriptRules, importTypescriptRules } from './rules/import/index.js';
import { stylisticRules } from './rules/stylistic.js';
import { reactRules } from './rules/react/index.js';

const eslintConfigM51 = [
    {
        languageOptions: {
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.builtin,
                ...globals.nodeBuiltin,
            },
            parserOptions: {
                ecmaVersion: 'latest',
            },
        },
    },
    {
        files: ['**/*.js'],
        plugins: {
            '@stylistic': stylisticPlugin,
            'import-x': importXPlugin,
        },
        rules: {
            ...eslintRules,
            ...stylisticRules,
            ...importJavascriptRules,
        },
    },
    {
        files: ['**/*.ts'],
        plugins: {
            '@typescript-eslint': typescriptEslint.plugin,
            '@stylistic': stylisticPlugin,
            'import-x': importXPlugin,
        },
        languageOptions: {
            sourceType: 'module',
            parser: typescriptEslint.parser,
            parserOptions: {
                projectService: true,
            },
        },
        rules: {
            ...eslintRules,
            ...typescriptRules,
            ...stylisticRules,
            ...importTypescriptRules,
        },
        settings: {
            'import-x/resolver-next': [
                createTypeScriptImportResolver(),
            ],
        },
    },
    {
        ignores: [
            '**/node_modules/',
            '**/build/',
            '**/dist/',
        ],
    },
    {
        files: [
            '**/eslint.config.js',
        ],
        rules: {
            'import-x/no-anonymous-default-export': 'off',
            'import-x/no-default-export': 'off',
            'import-x/prefer-default-export': 'error',
        },
    },
];


const eslintConfigReactM51 = [
    {
        languageOptions: {
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.builtin,
                ...globals.nodeBuiltin,
            },
            parserOptions: {
                ecmaVersion: 'latest',
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
    },
    {
        files: ['**/*.js', '**/*.jsx'],
        plugins: {
            '@stylistic': stylisticPlugin,
            'import-x': importXPlugin,
            '@eslint-react': reactPlugin,
        },
        rules: {
            ...eslintRules,
            ...stylisticRules,
            ...importJavascriptRules,
            ...reactRules,
            ...reactPlugin.configs['disable-type-checked'].rules,
        },
    },
    {
        files: ['**/*.ts', '**/*.tsx'],
        plugins: {
            '@typescript-eslint': typescriptEslint.plugin,
            '@stylistic': stylisticPlugin,
            'import-x': importXPlugin,
            '@eslint-react': reactPlugin,
        },
        languageOptions: {
            sourceType: 'module',
            parser: typescriptEslint.parser,
            parserOptions: {
                projectService: true,
            },
        },
        rules: {
            ...eslintRules,
            ...typescriptRules,
            ...stylisticRules,
            ...importTypescriptRules,
            ...reactRules,
        },
        settings: {
            'import-x/resolver-next': [
                createTypeScriptImportResolver(),
            ],
        },
    },
    {
        ignores: [
            '**/node_modules/',
            '**/build/',
            '**/dist/',
        ],
    },
    {
        files: [
            '**/eslint.config.js',
        ],
        rules: {
            'import-x/no-anonymous-default-export': 'off',
            'import-x/no-default-export': 'off',
            'import-x/prefer-default-export': 'error',
        },
    },
];

export { eslintConfigM51, eslintConfigReactM51 };
