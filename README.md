
# eslint-config-standard-typescript

## Install

```bash
yarn add eslint eslint-config-standard-typescript -D
```
or

```bash
npm i -D eslint eslint-config-standard-typescript
```

## Use

Add this code to your `.eslintrc.js`

```javascript
module.exports = {
  extends: [
    'standard-typescript'
  ],
  parserOptions: {
    project: './tsconfig.json'
  },
  // Extend your configuration: https://github.com/typescript-eslint/typescript-eslint
  rules: {
    '@typescript-eslint/semi': 1
  }
}

```

`package.json`
```javascript
{
  ...
  "scripts": {
    "lint": "eslint --ext .ts,tsx ./src --fix"
  }
}
```
