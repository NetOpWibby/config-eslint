# @webb/config-eslint

> Opinionated ESLint configuration



## Install

```sh
# Install this module, with ESLint
$ npm i @webb/config-eslint eslint -D
```



## Usage

```json
{
  // Default configuration
  extends: "./node_modules/@webb/config-eslint"
  // When parsing ES2015+
  extends: "./node_modules/@webb/config-eslint/dist/esnext.js"
  // When parsing for the browser
  extends: "./node_modules/@webb/config-eslint/dist/browser.js"
}
```

### package.json

```json
{
  "eslintConfig": {
    extends: "./node_modules/@webb/config-eslint"
  }
}
```

### eslintrc.js

```js
module.exports = exports = {
  extends: "./node_modules/@webb/config-eslint"
};
```
