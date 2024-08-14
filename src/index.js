import globals from 'globals'
import typescriptEslintParser from '@typescript-eslint/parser';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import { eslintRules } from './rules/eslint.js';
import { typescriptRules } from './rules/typescript.js';

export default [
    {
        ignores: ["**/node_modules/", "**/build/"],
		languageOptions: {
			sourceType: "module",
			globals: {
				...globals.browser,
				...globals.builtin,
				...globals.nodeBuiltin,
			}
		},
	},
    {
        files: ["**/*.js"],
        rules: eslintRules,
    },
    {
        files: ["**/*.ts"],
        plugins: {
            "@typescript-eslint": typescriptEslintPlugin
        },
        languageOptions: {
			sourceType: "module",
			parser: typescriptEslintParser,
            parserOptions: {
                projectService: true,
            },
		},
        rules: {
            ...eslintRules,
            ...typescriptRules,
        }
    }
]