const findUnsortedSubarray = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: 5, input: [2, 6, 4, 8, 10, 9, 15] },
  { expect: 0, input: [1, 2, 3, 4] },
  { expect: 4, input: [4, 3, 2, 1] },
  { expect: 0, input: [1] },
];

dataTable.forEach((cases, i) => {
  assert.deepEqual(cases.expect, findUnsortedSubarray(cases.input), `findUnsortedSubarray ${i}:1`);
});
