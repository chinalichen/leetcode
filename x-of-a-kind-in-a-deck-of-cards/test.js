const hasGroupsSizeX = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: true, input: [1, 2, 3, 4, 4, 3, 2, 1] },
  { expect: false, input: [1, 1, 1, 2, 2, 2, 3, 3] },
  { expect: false, input: [1] },
  { expect: true, input: [1, 1] },
  { expect: true, input: [1, 1, 2, 2, 2, 2] },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, hasGroupsSizeX(input), `hasGroupsSizeX ${i}:`);
});
