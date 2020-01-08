const wordPattern = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: true, input: { s: 'abba', t: 'dog cat cat dog' } },
  { expect: false, input: { s: "abba", t: "dog cat cat fish" } },
  { expect: false, input: { s: "aaaa", t: "dog cat cat dog" } },
  { expect: false, input: { s: "abba", t: "dog dog dog dog" } },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, wordPattern(input.s, input.t), `wordPattern ${i}:`);
});
