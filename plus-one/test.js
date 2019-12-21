const plusOne = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: [1, 2, 4], input: [1, 2, 3] },
  { expect: [4, 3, 2, 2], input: [4, 3, 2, 1] },
  { expect: [1, 0], input: [9] },
  { expect: [1, 0, 0, 0, 0], input: [9, 9, 9, 9] },
];

dataTable.forEach((cases, i) => {
  assert.deepEqual(cases.expect, plusOne(cases.input), `plusOne ${i}:1`);
});
