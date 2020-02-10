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
  extends: "@inc"
  // When parsing ES2015+
  extends: "@inc/eslint-config/esnext"
  // When parsing for the browser
  extends: "@inc/eslint-config/browser"
}
```

### package.json

```json
{
  "eslintConfig": {
    extends: "@inc"
  }
}
```

### eslintrc

```json
{
  extends: "@inc"
}
```
