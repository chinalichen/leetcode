const findWords = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: ["Alaska", "Dad"], input: ["Hello", "Alaska", "Dad", "Peace"] },
  { expect: ["P"], input: ["OKM", "OkM", "okm", "P"] },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, findWords(input), `findWords ${i}:`);
});
