const countCharacters = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: 6, input: { words: ["cat", "bt", "hat", "tree"], chars: "atach" } },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, countCharacters(input.words, input.chars), `countCharacters ${i}:`);
});
