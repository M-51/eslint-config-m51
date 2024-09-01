import { stylisticJavascript } from './javascript.js';
import { stylisticAdditional } from './additional.js';
import { stylisticTypescript } from './typescript.js';

const stylisticJavascriptRules = {
    ...stylisticJavascript,
    ...stylisticAdditional,
};

const stylisticTypescriptRules = {
    ...stylisticJavascript,
    ...stylisticAdditional,
    ...stylisticTypescript,
};

export { stylisticJavascriptRules, stylisticTypescriptRules };
