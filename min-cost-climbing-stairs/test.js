const minCostClimbingStairs = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: 15, input: [10, 15, 20] },
  { expect: 6, input: [1, 100, 1, 1, 1, 100, 1, 1, 100, 1] },
  { expect: 0, input: [0, 0, 0, 1] },
  { expect: 0, input: [1, 0, 0, 1] },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, minCostClimbingStairs(input), `minCostClimbingStairs ${i}:`);
});
