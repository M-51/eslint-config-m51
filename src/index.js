import globals from 'globals';
import typescriptEslintParser from '@typescript-eslint/parser';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import stylisticJsPlugin from '@stylistic/eslint-plugin-js';
import stylisticTsPlugin from '@stylistic/eslint-plugin-ts';
import stylisticPlusPlugin from '@stylistic/eslint-plugin-plus';
import importXPlugin from 'eslint-plugin-import-x';
import { eslintRules } from './rules/eslint.js';
import { typescriptRules } from './rules/typescript.js';
import { stylisticJavascriptRules, stylisticTypescriptRules } from './rules/stylistic/index.js';
import { importJavascriptRules, importTypescriptRules } from './rules/import/index.js';

const eslintConfigM51 = [
    {
        ignores: ['**/node_modules/', '**/build/'],
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
        files: ['eslint.config.js'],
        rules: {
            'import-x/no-anonymous-default-export': 'off',
            'import-x/no-default-export': 'off',
            'import-x/prefer-default-export': 'error',
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
];

export { eslintConfigM51 };
