const findNumbers = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: 2, input: [12, 345, 2, 6, 7896] },
  { expect: 1, input: [555, 901, 482, 1771] },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, findNumbers(input), `findNumbers ${i}:1`);
});
