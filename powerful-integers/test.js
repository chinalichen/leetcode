const powerfulIntegers = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: [2, 3, 4, 5, 7, 9, 10], input: { x: 2, y: 3, bound: 10 } },
  { expect: [2, 4, 6, 8, 10, 14], input: { x: 3, y: 5, bound: 15 } },
  { expect: [2], input: { x: 1, y: 1, bound: 15 } },
  { expect: [], input: { x: 1, y: 1, bound: 0 } },
  { expect: [2, 3, 5, 9], input: { x: 1, y: 2, bound: 15 } },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, powerfulIntegers(input.x, input.y, input.bound), `powerfulIntegers ${i}:`);
});
