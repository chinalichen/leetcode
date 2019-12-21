const thirdMax = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: 1, input: [3, 2, 1] },
  { expect: 2, input: [1, 2] },
  { expect: 1, input: [2, 2, 3, 1] },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, thirdMax(input), `thirdMax ${i}:`);
});
