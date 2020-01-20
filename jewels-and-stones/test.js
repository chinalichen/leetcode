const numJewelsInStones = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: 3, input: { J: "aA", S: "aAAbbbb" } },
  { expect: 0, input: { J: "z", S: "ZZ" } },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, numJewelsInStones(input.J, input.S), `numJewelsInStones ${i}:`);
});
