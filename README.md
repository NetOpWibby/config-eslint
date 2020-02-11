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
  extends: "@webb"
  // When parsing ES2015+
  extends: "@webb/config-eslint/esnext"
  // When parsing for the browser
  extends: "@webb/config-eslint/browser"
}
```

### package.json

```json
{
  "eslintConfig": {
    extends: "@webb"
  }
}
```

### eslintrc

```json
{
  extends: "@webb"
}
```
