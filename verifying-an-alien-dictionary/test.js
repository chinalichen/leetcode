const isAlienSorted = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: true, input: { words: ["hello", "leetcode"], order: "hlabcdefgijkmnopqrstuvwxyz" } },
  { expect: false, input: { words: ["word", "world", "row"], order: "worldabcefghijkmnpqstuvxyz" } },
  { expect: false, input: { words: ["apple", "app"], order: "abcdefghijklmnopqrstuvwxyz" } },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, isAlienSorted(input.words, input.order), `isAlienSorted ${i}:`);
});
