const shortestCompletingWord = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: "steps", input: { licensePlate: "1s3 PSt", words: ["step", "steps", "stripe", "stepple"] } },
  { expect: "pest", input: { licensePlate: "1s3 456", words: ["looks", "pest", "stew", "show"] } },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, shortestCompletingWord(input.licensePlate, input.words), `shortestCompletingWord ${i}:`);
});
