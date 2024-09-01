/**
 * These rules are not needed in typescript @see{@link https://typescript-eslint.io/troubleshooting/typed-linting/performance/#eslint-plugin-import}
 */
const importDisabledInTypescript = [
    'import-x/default',
    'import-x/named',
    'import-x/namespace',
    'import-x/no-unresolved',
    'import-x/extensions',
    'import-x/no-named-as-default-member',
];

export { importDisabledInTypescript };
