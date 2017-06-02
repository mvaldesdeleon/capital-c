const C = require('./index.js');

let f1 = x => x + 1;
let f2 = x => x * 2;

({f1, f2} = C({f1, f2}));

var y = f1.f2.f1.f2.f2.f1;

console.log(y);
console.log(y(2));
