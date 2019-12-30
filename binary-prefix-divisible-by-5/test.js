const prefixesDivBy5 = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: [true, false, false], input: [0, 1, 1] },
  { expect: [false, false, false], input: [1, 1, 1] },
  { expect: [true, false, false, false, true, false], input: [0, 1, 1, 1, 1, 1] },
  { expect: [false, false, false, false, false], input: [1, 1, 1, 0, 1] },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, prefixesDivBy5(input), `prefixesDivBy5 ${i}:`);
});
