import globals from 'globals';
import typescriptEslintParser from '@typescript-eslint/parser';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import stylisticJs from '@stylistic/eslint-plugin-js';
import stylisticTs from '@stylistic/eslint-plugin-ts';
import stylisticPlus from '@stylistic/eslint-plugin-plus';
import { eslintRules } from './rules/eslint.js';
// import { typescriptRules } from './rules/typescript.js';
import { stylisticJavascriptRules } from './rules/stylistic/javascript.js';
import { stylisticTypescriptRules } from './rules/stylistic/typescript.js';
import { stylisticAdditionalRules } from './rules/stylistic/additional.js';

export default [
    {
        ignores: ['**/node_modules/', '**/build/'],
        languageOptions: {
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.builtin,
                ...globals.nodeBuiltin,
            },
        },
    },
    {
        files: ['**/*.js'],
        plugins: {
            '@stylistic/js': stylisticJs,
            '@stylistic/plus': stylisticPlus,
        },
        rules: {
            ...eslintRules,
            ...stylisticJavascriptRules,
            ...stylisticAdditionalRules,
        },
    },
    {
        files: ['**/*.ts'],
        plugins: {
            '@typescript-eslint': typescriptEslintPlugin,
            '@stylistic/js': stylisticJs,
            '@stylistic/plus': stylisticPlus,
            '@stylistic/ts': stylisticTs,
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
            ...stylisticJavascriptRules,
            ...stylisticAdditionalRules,
            // ...typescriptRules,
            ...stylisticTypescriptRules,
        },
    },
];
