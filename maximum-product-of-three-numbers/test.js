const maximumProduct = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: 24, input: [1, 2, 3, 4] },
  { expect: 6, input: [1, 2, 3] },
  { expect: 60, input: [1, 2, 3, -4, -5] },
  { expect: 10, input: [-2, -1, 0, 4, 5] },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, maximumProduct(input), `maximumProduct ${i}:1`);
});
