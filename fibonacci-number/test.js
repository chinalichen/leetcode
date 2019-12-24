const fib = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: 1, input: 2 },
  { expect: 2, input: 3 },
  { expect: 3, input: 4 },
  { expect: 832040, input: 30 },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, fib(input), `fib ${i}:1`);
});
