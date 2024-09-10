# eslint-config-m51
My eslint config


## Usage

* install package: `npm install eslint-config-m51 --save-dev`
* create eslint.config.js file in project root directory with:
```
import eslintConfigM51 from 'eslint-config-m51';

export default eslintConfigM51;
```
* for TypeScript, requires `strictNullChecks` or `strict` to be `true` in `tsconfig.json`,