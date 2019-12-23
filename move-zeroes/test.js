const moveZeroes = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: [1, 3, 12, 0, 0], input: [0, 1, 0, 3, 12] },
];

dataTable.forEach(({ expect, input }, i) => {
  moveZeroes(input)
  assert.deepEqual(expect, input, `moveZeroes ${i}:1`);
});
