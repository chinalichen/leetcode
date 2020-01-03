const commonChars = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: ["e", "l", "l"], input: ["bella", "label", "roller"] },
  { expect: ["c", "o"], input: ["cool", "lock", "cook"] },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, commonChars(input), `commonChars ${i}:`);
});
