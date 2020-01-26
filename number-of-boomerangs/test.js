const numberOfBoomerangs = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: 2, input: [[0, 0], [1, 0], [2, 0]] },
  { expect: 20, input: [[0, 0], [1, 0], [-1, 0], [0, 1], [0, -1]] },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, numberOfBoomerangs(input), `numberOfBoomerangs ${i}:`);
});
