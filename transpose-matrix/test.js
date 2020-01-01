const transpose = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: [[1, 4, 7], [2, 5, 8], [3, 6, 9]], input: [[1, 2, 3], [4, 5, 6], [7, 8, 9]] },
  { expect: [[1, 4], [2, 5], [3, 6]], input: [[1, 2, 3], [4, 5, 6]] },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, transpose(input), `transpose ${i}:`);
});
