const isAnagram = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: true, input: { s: 'anagram', t: 'nagaram' } },
  { expect: false, input: { s: "rat", t: "car" } },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, isAnagram(input.s, input.t), `isAnagram ${i}:`);
});
