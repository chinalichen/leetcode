const numMagicSquaresInside = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  {
    expect: 1, input: [
      [4, 3, 8, 4],
      [9, 5, 1, 9],
      [2, 7, 6, 2],
    ],
  },
  { expect: 1, input: [[8, 1, 6], [3, 5, 7], [4, 9, 2]] },
  { expect: 0, input: [[1, 10, 4, 9, 2], [8, 6, 8, 1, 8], [6, 0, 5, 10, 3], [3, 9, 2, 4, 10], [7, 8, 1, 9, 2]] },
  { expect: 1, input: [[3, 10, 2, 3, 4], [4, 5, 6, 8, 1], [8, 8, 1, 6, 8], [1, 3, 5, 7, 1], [9, 4, 9, 2, 9]] },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, numMagicSquaresInside(input), `numMagicSquaresInside ${i}:`);
});
