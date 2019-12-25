const findMaxAverage = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: 12.75, input: { nums: [1, 12, -5, -6, 50, 3], k: 4 } },
  { expect: 1, input: { nums: [1], k: 1 } },
  { expect: 1.5, input: { nums: [1, 2], k: 2 } },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, findMaxAverage(input.nums, input.k), `findMaxAverage ${i}:1`);
});
