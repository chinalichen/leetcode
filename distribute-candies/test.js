const distributeCandies = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: 3, input: [1, 1, 2, 2, 3, 3] },
  { expect: 2, input: [1, 1, 2, 3] },
  { expect: 2, input: [1, 1, 1, 3] },
  { expect: 1, input: [1, 1, 1, 1] },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, distributeCandies(input), `distributeCandies ${i}:`);
});
