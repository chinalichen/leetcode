const oddCells = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: 6, input: { indices: [[0, 1], [1, 1]], n: 2, m: 3 } },
  { expect: 0, input: { indices: [[1, 1], [0, 0]], n: 2, m: 2 } },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, oddCells(input.n, input.m, input.indices), `oddCells ${i}:1`);
});
