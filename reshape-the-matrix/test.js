const matrixReshape = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: [[1, 2, 3, 4]], input: { nums: [[1, 2], [3, 4]], r: 1, c: 4 } },
  { expect: [[1, 2], [3, 4]], input: { nums: [[1, 2], [3, 4]], r: 2, c: 4 } },
  { expect: [[1, 2], [3, 4]], input: { nums: [[1], [2], [3], [4]], r: 2, c: 2 } },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, matrixReshape(input.nums, input.r, input.c), `matrixReshape ${i}:1`);
});
