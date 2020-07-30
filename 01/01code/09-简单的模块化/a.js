var foo = 'aaa'
console.log('a start');

require('./b.js');

console.log('a end');

console.log(foo);