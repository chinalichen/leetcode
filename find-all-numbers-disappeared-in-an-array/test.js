const findDisappearedNumbers = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: [5, 6], input: [4, 3, 2, 7, 8, 2, 3, 1] },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, findDisappearedNumbers(input), `findDisappearedNumbers ${i}:1`);
});
