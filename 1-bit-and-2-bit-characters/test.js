const isOneBitCharacter = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: false, input: [1, 0] },
  { expect: true, input: [1, 0, 0] },
  { expect: false, input: [1, 1, 1, 0] },
  { expect: true, input: [1, 1, 1, 0, 0] },
  { expect: true, input: [1, 1, 1, 0, 0, 0] },
  { expect: true, input: [1, 1, 0, 1, 0, 0] },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, isOneBitCharacter(input), `isOneBitCharacter ${i}:`);
});
