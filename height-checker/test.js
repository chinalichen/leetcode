const heightChecker = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: 3, input: [1, 1, 4, 2, 1, 3] },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, heightChecker(input), `heightChecker ${i}:1`);
});
