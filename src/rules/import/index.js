import { importHelpfulWarnings } from './helpful-warnings.js';
import { importModuleSystem } from './module-system.js';
import { importStaticAnalysis } from './static-analysis.js';
import { importStyleGuide } from './style-guide.js';
import { importDisabledInTypescript } from './disabled-in-typescript.js';

const importJavascriptRules = {
    ...importHelpfulWarnings,
    ...importModuleSystem,
    ...importStaticAnalysis,
    ...importStyleGuide,
};

const importTypescriptRules = {
    ...importHelpfulWarnings,
    ...importModuleSystem,
    ...importStaticAnalysis,
    ...importStyleGuide,
    ...Object.fromEntries(importDisabledInTypescript.map((rule) => [rule, 'off'])),
};

export { importJavascriptRules, importTypescriptRules };
