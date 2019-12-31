const isToeplitzMatrix = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  {
    expect: true, input: [
      [1, 2, 3, 4],
      [5, 1, 2, 3],
      [9, 5, 1, 2]
    ]
  },
  {
    expect: false, input: [
      [1, 2],
      [2, 2]
    ]
  },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, isToeplitzMatrix(input), `isToeplitzMatrix ${i}:`);
});
