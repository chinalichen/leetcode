const repeatedNTimes = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: 3, input: [1, 2, 3, 3] },
  { expect: 2, input: [2, 1, 2, 5, 3, 2] },
  { expect: 5, input: [5, 1, 5, 2, 5, 3, 5, 4] },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, repeatedNTimes(input), `repeatedNTimes ${i}:`);
});
