const containsNearbyDuplicate = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: true, input: { n: [1, 2, 3, 1], k: 3 } },
  { expect: true, input: { n: [1, 0, 1, 1], k: 1 } },
  { expect: false, input: { n: [1, 2, 3, 1, 2, 3], k: 2 } },
  { expect: true, input: { n: [99, 99], k: 2 } },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, containsNearbyDuplicate(input.n, input.k), `containsNearbyDuplicate ${i}:`);
});
