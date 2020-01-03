const minCostToMoveChips = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: 1, input: [1, 2, 3] },
  { expect: 2, input: [2, 2, 2, 3, 3] },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, minCostToMoveChips(input), `minCostToMoveChips ${i}:`);
});
