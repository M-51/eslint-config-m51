import { writeFile } from 'node:fs/promises';
import { chromium } from 'playwright';

import { typescriptRules } from './src/rules/typescript.js';

const entries = Object.keys(typescriptRules);

const browser = await chromium.launch();
const page = await browser.newPage();

let str = '';
for (const key of entries) {
    const cleanKey = key.split('/').at(-1);
    await page.goto(`https://typescript-eslint.io/rules/${cleanKey}`);
    const text = await page.locator('header + blockquote p').allTextContents();
    str += `\n    /**\n     * ${text.join('\n')}\n     * @see {@link https://typescript-eslint.io/rules/${cleanKey} | ${cleanKey}}\n     */\n    '${key}': 'error',\n`;
}

await writeFile('./out.js', `const rules = {${str}};`, { encoding: 'utf8' });

await browser.close();
