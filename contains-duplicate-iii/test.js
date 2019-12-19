const containsNearbyDuplicate = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: true, input: { n: [1, 2, 3, 1], k: 3, t: 0 } },
  { expect: true, input: { n: [1, 0, 1, 1], k: 1, t: 2 } },
  { expect: false, input: { n: [1, 5, 9, 1, 5, 9], k: 2, t: 3 } },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, containsNearbyDuplicate(input.n, input.k, input.t), `containsNearbyDuplicate ${i}:`);
});
