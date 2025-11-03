# Day 1

## Modules

## Default export

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
// export default isOdd;
// export default isEven;
```