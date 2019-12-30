const dominantIndex = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: 1, input: [3, 6, 1, 0] },
  { expect: -1, input: [1, 2, 3, 4] },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, dominantIndex(input), `dominantIndex ${i}:`);
});
