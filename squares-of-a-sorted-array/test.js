const sortedSquares = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: [0, 1, 9, 16, 100], input: [-4, -1, 0, 3, 10] },
  { expect: [4, 9, 9, 49, 121], input: [-7, -3, 2, 3, 11] },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, sortedSquares(input), `sortedSquares ${i}:1`);
});
