const numSmallerByFrequency = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: [1], input: { words: ["zaaaz"], queries: ["cbd"] } },
  { expect: [1, 2], input: { words: ["a", "aa", "aaa", "aaaa"], queries: ["bbb", "cc"] } },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, numSmallerByFrequency(input.queries, input.words), `numSmallerByFrequency ${i}:`);
});
