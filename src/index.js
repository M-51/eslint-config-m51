import globals from 'globals';
import typescriptEslintParser from '@typescript-eslint/parser';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import stylisticJsPlugin from '@stylistic/eslint-plugin-js';
import stylisticTsPlugin from '@stylistic/eslint-plugin-ts';
import stylisticPlusPlugin from '@stylistic/eslint-plugin-plus';
import importXPlugin from 'eslint-plugin-import-x';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import { eslintRules } from './rules/eslint.js';
import { typescriptRules } from './rules/typescript.js';
import { stylisticJavascriptRules, stylisticTypescriptRules } from './rules/stylistic/index.js';
import { importJavascriptRules, importTypescriptRules } from './rules/import/index.js';
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
            '@stylistic/js': stylisticJsPlugin,
            '@stylistic/plus': stylisticPlusPlugin,
            'import-x': importXPlugin,
        },
        rules: {
            ...eslintRules,
            ...stylisticJavascriptRules,
            ...importJavascriptRules,
        },
    },
    {
        files: ['**/*.ts'],
        plugins: {
            '@typescript-eslint': typescriptEslintPlugin,
            '@stylistic/js': stylisticJsPlugin,
            '@stylistic/plus': stylisticPlusPlugin,
            '@stylistic/ts': stylisticTsPlugin,
            'import-x': importXPlugin,
        },
        languageOptions: {
            sourceType: 'module',
            parser: typescriptEslintParser,
            parserOptions: {
                projectService: true,
            },
        },
        rules: {
            ...eslintRules,
            ...typescriptRules,
            ...stylisticTypescriptRules,
            ...importTypescriptRules,
        },
        settings: {
            'import-x/resolver': {
                typescript: true,
            },
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
        files: ['eslint.config.js'],
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
            '@stylistic/js': stylisticJsPlugin,
            '@stylistic/plus': stylisticPlusPlugin,
            'import-x': importXPlugin,
            react: reactPlugin,
            'jsx-a11y': jsxA11yPlugin,
            'react-hooks': reactHooksPlugin,

        },
        rules: {
            ...eslintRules,
            ...stylisticJavascriptRules,
            ...importJavascriptRules,
            ...reactRules,
        },
    },
    {
        files: ['**/*.ts', '**/*.tsx'],
        plugins: {
            '@typescript-eslint': typescriptEslintPlugin,
            '@stylistic/js': stylisticJsPlugin,
            '@stylistic/plus': stylisticPlusPlugin,
            '@stylistic/ts': stylisticTsPlugin,
            'import-x': importXPlugin,
            react: reactPlugin,
            'jsx-a11y': jsxA11yPlugin,
            'react-hooks': reactHooksPlugin,
        },
        languageOptions: {
            sourceType: 'module',
            parser: typescriptEslintParser,
            parserOptions: {
                projectService: true,
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        rules: {
            ...eslintRules,
            ...typescriptRules,
            ...stylisticTypescriptRules,
            ...importTypescriptRules,
            ...reactRules,
        },
        settings: {
            'import-x/resolver': {
                typescript: true,
            },
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
        files: ['**/*.tsx'],
        rules: {
            'import-x/no-default-export': 'off',
            'import-x/prefer-default-export': ['error', {
                target: 'single',
            }],
        },
    },
    {
        files: ['**/eslint.config.js', '**/next.config.ts'],
        rules: {
            'import-x/no-anonymous-default-export': 'off',
            'import-x/no-default-export': 'off',
            'import-x/prefer-default-export': 'error',
        },
    },
];

export { eslintConfigM51, eslintConfigReactM51 };
