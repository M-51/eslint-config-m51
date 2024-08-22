import { writeFile } from 'node:fs/promises';
import { chromium } from 'playwright';

import { eslintRules } from './src/rules/eslint.js';
import { rules as bestPracticesRules } from './airbnb-base/best-practices.js';
import { rules as errorRules } from './airbnb-base/errors.js';
import { rules as es6Rules } from './airbnb-base/es6.js';
import { rules as nodeRules } from './airbnb-base/node.js';
import { rules as strictRules } from './airbnb-base/strict.js';
import { rules as styleRules } from './airbnb-base/style.js';
import { rules as variablesRules } from './airbnb-base/variables.js';

const airbnbRules = { ...bestPracticesRules, ...errorRules, ...es6Rules, ...nodeRules, ...strictRules, ...styleRules, ...variablesRules };

const entries = Object.entries(eslintRules);

const out = {};

for (const [key, rule] of entries) {
    if (rule) {
        out[key] = rule;
    } else {
        out[key] = airbnbRules[key];
    }
}


const browser = await chromium.launch();
const page = await browser.newPage();

let str = '';
for (const [key, rule] of Object.entries(out)) {
    await page.goto(`https://eslint.org/docs/latest/rules/${key}`);
    const text = await page.locator('h1 + p + p').allTextContents();
    str += `\n    /**\n     * ${text.join('\n')}\n     * @see {@link https://eslint.org/docs/latest/rules/${key} | ${key}}\n     */\n    ${key.includes('-') ? `"${key}"` : key}: ${JSON.stringify(rule, null, 4)},\n`;
}



await writeFile('./out.js', `const rules = {${str}};`, { encoding: 'utf8'});



await browser.close();