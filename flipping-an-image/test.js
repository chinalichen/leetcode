const flipAndInvertImage = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: [[1, 0, 0], [0, 1, 0], [1, 1, 1]], input: [[1, 1, 0], [1, 0, 1], [0, 0, 0]] },
  { expect: [[1, 1, 0, 0], [0, 1, 1, 0], [0, 0, 0, 1], [1, 0, 1, 0]], input: [[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]] },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, flipAndInvertImage(input), `flipAndInvertImage ${i}:1`);
});
