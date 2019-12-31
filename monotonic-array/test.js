const isMonotonic = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: true, input: [1, 2, 2, 3] },
  { expect: true, input: [6, 5, 4, 4] },
  { expect: false, input: [1, 3, 2] },
  { expect: true, input: [1, 2, 4, 5] },
  { expect: true, input: [1, 1, 1] },
  { expect: true, input: [1, 1, 1, 2] },
  { expect: true, input: [1, 1, 1, 2, 3] },
  { expect: true, input: [1, 1, 1, 2, 2] },
  { expect: false, input: [1, 1, 1, 2, 2, 1] },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, isMonotonic(input), `isMonotonic ${i}:`);
});
