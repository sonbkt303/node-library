
<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [1. Config jest](#1-config-jest)
  - [Installed jest library](#installed-jest-library)
  - [Add code test to tests folder](#add-code-test-to-tests-folder)
  - [Create jest config file](#create-jest-config-file)
  - [Config package.json file](#config-packagejson-file)
- [2. Config rest-stare reporter](#2-config-rest-stare-reporter)
  - [Install rest-stare reporter](#install-rest-stare-reporter)
  - [Update reporter on jest.config.js file](#update-reporter-on-jestconfigjs-file)
    - [Example config reporter](#example-config-reporter)
    - [Result of reporter](#result-of-reporter)
- [3. Setup extension transform, jet-extended to jest](#3-setup-extension-transform-jet-extended-to-jest)
  - [Add transform to jest.config.json file instead package.json to transform es module to common module](#add-transform-to-jestconfigjson-file-instead-packagejson-to-transform-es-module-to-common-module)
  - [Setup jest-extended to using more matchers than default](#setup-jest-extended-to-using-more-matchers-than-default)

<!-- /code_chunk_output -->

# 1. Config jest
## Installed jest library 
```bash
npm install jest --save-dev
```

## Add code test to tests folder

```javascript
# sum.js

function sum(a, b) {
    return a + b;
}

module.exports = sum;
```
<!-- line break -->


```javascript
# sum.spec.js
import sum from './sum';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```
## Create jest config file

- **Create jest config file**
```bash
npm create jest
```
- **Config jest** 
  
![alt text](images/integrated-test/create-jest.png)

- **Jest config file result**

![alt text](images/integrated-test/create-jest-config-file.png)

## Config package.json file

```json
  // 
  "scripts": {
    "test": "jest --config jest.config.js"
  },
```


# 2. Config rest-stare reporter 

## Install rest-stare reporter 
```bash
  npm install jest-stare --save-dev
```

## Update reporter on jest.config.js file
```javascript
  "reporters": [
    "default",
    [
      "jest-stare",
      {
        "resultDir": "results/jest-stare",
        "reportTitle": "jest-stare!",
        "additionalResultsProcessors": [
          "jest-junit"
        ],
        "coverageLink": "../../coverage/lcov-report/index.html",
        "jestStareConfigJson": "jest-stare.json",
        "jestGlobalConfigJson": "globalStuff.json"
      }
    ]
  ]
```

### Example config reporter

![alt text](images/integrated-test/jest-config-file-report-example.png)

### Result of reporter

![alt text](images/integrated-test/jest-report-result.png)


# 3. Setup extension transform, jet-extended to jest


## Add transform to jest.config.json file instead package.json to transform es module to common module
[Installation babel-jest with jest ](https://babeljs.io/setup#installation)
```json
  // jest.config.json
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest"
  }
```

## Setup jest-extended to using more matchers than default

[Installation and setup jest-extended ](https://jest-extended.jestcommunity.dev/docs/getting-started/setup)

```json
// jest.config.js
setupFilesAfterEnv: ["./jest.extend.setup.js"],
```