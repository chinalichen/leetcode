const rotate = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: [5, 6, 7, 1, 2, 3, 4], input: { n: [1, 2, 3, 4, 5, 6, 7], k: 3 } },
  { expect: [3, 99, -1, -100], input: { n: [-1, -100, 3, 99], k: 2 } },
];

dataTable.forEach(({ expect, input }, i) => {
  rotate(input.n, input.k)
  assert.deepEqual(expect, input.n, `rotate ${i}:`);
});
