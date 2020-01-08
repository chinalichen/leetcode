const islandPerimeter = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  {
    expect: 16,
    input: [
      [0, 1, 0, 0],
      [1, 1, 1, 0],
      [0, 1, 0, 0],
      [1, 1, 0, 0],
    ],
  }, {
    expect: 0,
    input: [
      [0, 1],
    ],
  },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, islandPerimeter(input), `islandPerimeter ${i}:`);
});
