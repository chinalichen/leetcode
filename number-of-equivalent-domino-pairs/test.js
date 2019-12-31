const numEquivDominoPairs = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: 1, input: [[1, 2], [2, 1], [3, 4], [5, 6]] },
  { expect: 2, input: [[1, 2], [2, 1], [3, 4], [5, 6], [3, 4]] },
  { expect: 3, input: [[1, 2], [1, 2], [1, 1], [1, 2], [2, 2]] },
];

dataTable.forEach(({ expect, input }, i) => {
  numEquivDominoPairs(input)
  assert.deepEqual(expect, numEquivDominoPairs(input), `numEquivDominoPairs ${i}:`);
});
