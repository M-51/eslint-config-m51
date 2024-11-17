import { react } from './react.js';
import { reactHooks } from './react-hooks.js';
import { reactA11y } from './react-a11y.js';

const reactRules = {
    ...react,
    ...reactHooks,
    ...reactA11y,
};

export { reactRules };
