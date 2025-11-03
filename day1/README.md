# Day 1

## Modules

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

    - `export` at the begin of any expression
        ```js
        // util.js
        export const isOdd = (num) => num % 2 !== 0
        export const isEven = (num) => !isOdd(num);
        ```
    - `export` at the end all what you need
        ```js
        const isOdd = (num) => num % 2 !== 0
        const isEven = (num) => !isOdd(num);

        export {
            isOdd,
            isEven,
        }
        ```
