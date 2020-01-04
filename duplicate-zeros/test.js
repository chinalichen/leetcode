const duplicateZeros = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: [1, 0, 0, 2, 3, 0, 0, 4], input: [1, 0, 2, 3, 0, 4, 5, 0] },
  { expect: [1, 2, 3], input: [1, 2, 3] },
];

dataTable.forEach(({ expect, input }, i) => {
  duplicateZeros(input)
  assert.deepEqual(expect, input, `duplicateZeros ${i}:`);
});
