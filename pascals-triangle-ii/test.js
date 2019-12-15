const getRow = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: [1], input: 0 },
  { expect: [1, 1], input: 1 },
  { expect: [1, 2, 1], input: 2 },
  { expect: [1, 3, 3, 1], input: 3 },
  { expect: [1, 4, 6, 4, 1], input: 4 },
];

dataTable.forEach((cases, i) => {
  assert.deepEqual(cases.expect, getRow(cases.input), `getRow ${i}:1`);
});
