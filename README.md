# eslint-config-m51

An opinionated ESLint flat configuration for JavaScript, TypeScript, and React. Combines ESLint's core rules, type-aware TypeScript checks, import validation, and formatting rules from ESLint Stylistic.

## Requirements

| Dependency | Version |
| --- | --- |
| Node.js | `^22.13.0 \|\| >=24` |
| ESLint | `^10.13.0` |
| TypeScript | `~6.0.3` for the current TypeScript 6 setup |
| ESLint Stylistic | `6.0.0-beta.6`, included as a dependency |

The current setup stays on TypeScript 6.0 and Stylistic 6 beta. The installed `typescript-eslint` version supports TypeScript versions below 6.1. See [package.json](./package.json) for dependency ranges.

This package uses ES modules and ESLint's flat config format (`eslint.config.js`). Legacy `.eslintrc` configuration is not supported. The examples below assume your project's `package.json` contains `"type": "module"`.

## Installation

```sh
npm install --save-dev eslint-config-m51 "eslint@^10.13.0" "typescript@~6.0.3"
```

The plugins and TypeScript import resolver are included; you do not need to install or register them separately.

## Choose a configuration

Create `eslint.config.js` in your project root and choose one of the following configurations.

| Import | Files covered by the rule sets |
| --- | --- |
| `eslint-config-m51` | `.js`, `.ts` |
| `eslint-config-m51/react` | `.js`, `.jsx`, `.ts`, `.tsx` |

The React configuration includes the base rules, so use it on its own. The current file patterns do not apply the full rule sets to `.mjs`, `.cjs`, `.mts`, or `.cts` files.

### JavaScript and TypeScript

```js
import eslintConfigM51 from 'eslint-config-m51';

export default eslintConfigM51;
```

### React

```js
import eslintConfigReactM51 from 'eslint-config-m51/react';

export default eslintConfigReactM51;
```

This adds React, JSX, DOM, Web API, and naming convention rules. React rules requiring type information are disabled for `.js` and `.jsx` files; `.ts` and `.tsx` files use type-aware linting.

## TypeScript setup

TypeScript files use `typescript-eslint` with `projectService: true`. Each linted TypeScript file must belong to a TypeScript project discoverable by the project service, normally the nearest `tsconfig.json`.

Enable `strict` or at least `strictNullChecks` in your existing `tsconfig.json`. For example, a project keeping its source files in `src` can use:

```json
{
    "compilerOptions": {
        "strict": true
    },
    "include": ["src"]
}
```

Merge these settings with your project's existing compiler options. Include other directories, such as `tests`, if they contain TypeScript files you want to lint. Keep your framework's JSX and module settings.

ESLint does not replace the TypeScript compiler. Some checks handled by TypeScript are disabled in this configuration, so also run your project's type-check command, for example `tsc --noEmit`.

## Run ESLint

```sh
npx eslint .
npx eslint . --fix
```

`--fix` applies the fixes supported by individual rules. Remaining diagnostics need manual changes.

To run these commands through npm, add the following scripts to your project's `package.json`:

```json
{
    "scripts": {
        "lint": "eslint .",
        "lint:fix": "eslint . --fix"
    }
}
```

## Customize rules

Both exports are configuration arrays. Spread the chosen array and append your overrides; later entries take precedence for matching files.

```js
import eslintConfigReactM51 from 'eslint-config-m51/react';

export default [
    ...eslintConfigReactM51,
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        rules: {
            '@stylistic/max-len': ['warn', { code: 120 }],
        },
    },
    {
        files: ['**/*.{ts,tsx}'],
        rules: {
            '@typescript-eslint/explicit-function-return-type': 'off',
        },
    },
];
```

Use `'error'`, `'warn'`, or `'off'` to change a rule's severity. A severity-only override preserves its existing options. Supplying options replaces the previous options rather than deeply merging them, so include every setting you want to retain.

Scope plugin overrides to files covered by that configuration. For the base configuration, use `**/*.{js,ts}` for shared rules and `**/*.ts` for TypeScript rules.

### Ignore additional files

Both configurations ignore `node_modules`, `build`, and `dist` directories at any depth. Append an object containing only `ignores` to add global exclusions:

```js
import eslintConfigM51 from 'eslint-config-m51';

export default [
    ...eslintConfigM51,
    {
        ignores: ['**/coverage/**', '**/generated/**'],
    },
];
```

## Rule configuration reference

Rule entries are kept alphabetically ordered within each rule group and include links to their documentation. These files are the reference for the configured severities and options:

| Rules | Source |
| --- | --- |
| ESLint core | [src/rules/eslint.js](./src/rules/eslint.js) |
| TypeScript | [src/rules/typescript.js](./src/rules/typescript.js) |
| Stylistic, including JSX formatting and `list-style` | [src/rules/stylistic.js](./src/rules/stylistic.js) |
| Imports | [src/rules/import](./src/rules/import) |
| React | [src/rules/react](./src/rules/react) |
| File patterns, plugins, globals, and configuration composition | [src/index.js](./src/index.js) |

Browser, JavaScript built-in, and Node.js built-in globals are enabled together. Both configurations treat source files as ES modules. Default exports are allowed specifically in `eslint.config.js`; regular source files follow the configured import rules.

## License

[MIT](./LICENSE)
