const shiftGrid = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: [[9, 1, 2], [3, 4, 5], [6, 7, 8]], input: { grid: [[1, 2, 3], [4, 5, 6], [7, 8, 9]], k: 1 } },
  { expect: [[12, 0, 21, 13], [3, 8, 1, 9], [19, 7, 2, 5], [4, 6, 11, 10]], input: { grid: [[3, 8, 1, 9], [19, 7, 2, 5], [4, 6, 11, 10], [12, 0, 21, 13]], k: 4 } },
  { expect: [[1, 2, 3], [4, 5, 6], [7, 8, 9]], input: { grid: [[1, 2, 3], [4, 5, 6], [7, 8, 9]], k: 9 } },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, shiftGrid(input.grid, input.k), `shiftGrid ${i}:1`);
});
