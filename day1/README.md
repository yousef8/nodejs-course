# Day 1

## ES6 Modules

- You need to set `"type": "module"` in package.json, to start using es6 modules;
- Module is just a unit of code, and in js it's just a file with the `export` keyword inside it.

## Default Import

- You can only export 1 default
- You can import default export with any name you want

```js
// index.js
import utils from "utils.js";

console.log(utils.isOdd(3));

// utils.js
const isOdd = (num) => num % 2 !== 0
const isEven = (num) => !isOdd(num);

export default {isOdd, isEvent}
// OR export default isOdd;

// XXX you can't do that
// export default isOdd, isEven;
```

## Named Import

- You can export named imports as much as you can

- You can export in 2 different formats:

  - `export` inline

    ```js
    // util.js
    export const isOdd = (num) => num % 2 !== 0
    export const isEven = (num) => !isOdd(num);
    ```

  - `export` at the end of the file

    ```js
    const isOdd = (num) => num % 2 !== 0
    const isEven = (num) => !isOdd(num);

    export {
        isOdd,
        isEven,
    }
    ```

## Renaming Named Imports

You can rename named imports using the `as` keyword:

```js
// index.js
import { isOdd as checkIfOdd, isEven as checkIfEven } from "./utils.js";

console.log(checkIfOdd(3));   // true
console.log(checkIfEven(4));  // true
```

## Mixing Default and Named Imports

You can use both default and named imports from the same module:

```js
// utils.js
export default function greet(name) {
  return `Hello, ${name}!`;
}

export const isOdd = (num) => num % 2 !== 0;
export const isEven = (num) => !isOdd(num);
```

```js
// index.js
import greet, { isOdd, isEven } from "./utils.js";

console.log(greet("John"));     // Hello, John!
console.log(isOdd(3));          // true
console.log(isEven(4));         // true
```
