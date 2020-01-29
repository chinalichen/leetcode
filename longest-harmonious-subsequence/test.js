const findLHS = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: 5, input: [1, 3, 2, 2, 5, 2, 3, 7] },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, findLHS(input), `findLHS ${i}:`);
});
