const canPlaceFlowers = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: true, input: { v: [1, 0, 0, 0, 1], n: 1 } },
  { expect: false, input: { v: [1, 0, 0, 0, 1], n: 2 } },
  { expect: true, input: { v: [1], n: 0 } },
  { expect: true, input: { v: [0, 0], n: 1 } },
  { expect: true, input: { v: [0, 0, 0], n: 2 } },
  { expect: false, input: { v: [0, 0, 0, 1], n: 2 } },
  { expect: false, input: { v: [1, 0, 0, 0, 0, 1], n: 2 } },
];

dataTable.forEach((cases, i) => {
  assert.deepEqual(cases.expect, canPlaceFlowers(cases.input.v, cases.input.n), `canPlaceFlowers ${i}:1`);
});
