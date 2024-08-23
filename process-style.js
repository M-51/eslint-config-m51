import { writeFile } from 'node:fs/promises';
import { chromium } from 'playwright';

import { stylisticTypescriptRules } from './src/rules/stylistic/typescript.js';
import { rules as bestPracticesRules } from './airbnb-base/best-practices.js';
import { rules as errorRules } from './airbnb-base/errors.js';
import { rules as es6Rules } from './airbnb-base/es6.js';
import { rules as nodeRules } from './airbnb-base/node.js';
import { rules as strictRules } from './airbnb-base/strict.js';
import { rules as styleRules } from './airbnb-base/style.js';
import { rules as variablesRules } from './airbnb-base/variables.js';

const airbnbRules = { ...bestPracticesRules, ...errorRules, ...es6Rules, ...nodeRules, ...strictRules, ...styleRules, ...variablesRules };

const entries = Object.entries(stylisticTypescriptRules);

const out = {};

for (const [keyFull, rule] of entries) {
    const key = keyFull.split('/').at(-1);
    if (rule) {
        out[keyFull] = rule;
    } else if (airbnbRules[key]) {
        out[keyFull] = airbnbRules[key];
    } else {
        out[keyFull] = null;
    }
}


const browser = await chromium.launch();
const page = await browser.newPage();

let str = '';
const outEntries = Object.entries(out);
for (let i = 0; i < outEntries; i += 1) {
    const [key, rule] = outEntries[i];
    await page.goto(`https://eslint.style/rules/ts/${key.split('/').at(-1)}`);
    const text = await page.locator('#rule-details + p').allTextContents();
    str += `\n    /**\n     * ${text.join('\n')}\n     * @see {@link https://eslint.style/rules/js/${key.split('/').at(-1)} | ${key.split('/').at(-1)}}\n     */\n    '${key}': ${JSON.stringify(rule, null, 4)},\n`;
}



await writeFile('./out.js', `const rules = {${str}};`, { encoding: 'utf8'});



await browser.close();