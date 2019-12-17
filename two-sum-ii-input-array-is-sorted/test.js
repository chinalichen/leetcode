const twoSum = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: [1, 2], input: { n: [2, 7, 11, 15], t: 9 } },
  { expect: [1, 4], input: { n: [7, 1, 5, 3, 6], t: 10 } },
];

dataTable.forEach((cases, i) => {
  assert.deepEqual(cases.expect, twoSum(cases.input.n, cases.input.t), `twoSum ${i}:`);
});
