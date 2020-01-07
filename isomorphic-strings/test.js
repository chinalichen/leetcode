const isIsomorphic = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: true, input: { s: 'egg', t: 'add' } },
  { expect: false, input: { s: "foo", t: "bar" } },
  { expect: true, input: { s: "paper", t: "title" } },
  { expect: false, input: { s: "abba", t: "abab" } },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, isIsomorphic(input.s, input.t), `isIsomorphic ${i}:`);
});
