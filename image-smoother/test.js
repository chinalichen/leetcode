const imageSmoother = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  {
    expect: [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ],
    input: [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1]
    ],
  },
  { expect: [[1]], input: [[1]] },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, imageSmoother(input), `imageSmoother ${i}:1`);
});
