const twoSum = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: 3, input: [3, 2, 3] },
  { expect: 2, input: [2, 2, 1, 1, 1, 2, 2] },
];

dataTable.forEach((cases, i) => {
  assert.deepEqual(cases.expect, twoSum(cases.input), `twoSum ${i}:`);
});
