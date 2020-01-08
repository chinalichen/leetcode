const getHint = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: "1A3B", input: { secret: "1807", guess: "7810" } },
  { expect: "1A1B", input: { secret: "1123", guess: "0111" } },
  { expect: "1A0B", input: { secret: "11", guess: "10" } },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, getHint(input.secret, input.guess), `getHint ${i}:`);
});
