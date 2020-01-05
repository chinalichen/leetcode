const pivotIndex = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: 3, input: [1, 7, 3, 6, 5, 6] },
  { expect: -1, input: [1, 2, 3] },
  { expect: 0, input: [1] },
  { expect: -1, input: [] },
  { expect: 1, input: [2, 3, 2] },
  { expect: 2, input: [-1, -1, -1, -1, -1, 0] },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, pivotIndex(input), `pivotIndex ${i}:`);
});
