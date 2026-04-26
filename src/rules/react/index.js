import { reactX } from './x.js';
import { reactJsx } from './jsx.js';
import { reactDom } from './dom.js';
import { reactWebApi } from './web-api.js';
import { reactNamingConvention } from './naming-convention.js';

const reactRules = {
    ...reactX,
    ...reactJsx,
    ...reactDom,
    ...reactWebApi,
    ...reactNamingConvention,
};

export { reactRules };
