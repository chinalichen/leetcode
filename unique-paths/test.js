const uniquePaths = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: 3, input: { m: 3, n: 2 } },
  { expect: 28, input: { m: 7, n: 3 } },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, uniquePaths(input.m, input.n), `uniquePaths ${i}`);
});
