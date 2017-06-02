# capital-c

Magically composable functions!

```JS
const C = require('capital-c');

let f1 = x => x + 1;
let f2 = x => x * 2;

({f1, f2} = C({f1, f2}));

const y = f1.f2.f1.f2.f2.f1;

console.log(y);
console.log(y(2));
// Profit
```

# install
with [npm](https://npmjs.org) do:

```
npm install capital-c
```

# license

MIT
