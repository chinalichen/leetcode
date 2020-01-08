const intersect = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: [2, 2], input: { n1: [1, 2, 2, 1], n2: [2, 2] } },
  { expect: [9, 4], input: { n1: [4, 9, 5], n2: [9, 4, 9, 8, 4] } },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, intersect(input.n1, input.n2), `intersect ${i}:`);
});
