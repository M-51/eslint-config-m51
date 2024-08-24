import { chromium } from 'playwright';

import { eslintRules } from './src/rules/eslint.js';

const entries = Object.entries(eslintRules);

const browser = await chromium.launch();
const page = await browser.newPage();

for (const [key, rule] of entries) {
    await page.goto(`https://eslint.org/docs/latest/rules/${key}`);
    const count = await page.getByText('Handled by TypeScript').count();
    if (count > 0) {
        console.log(key);
    }
}


await browser.close();
