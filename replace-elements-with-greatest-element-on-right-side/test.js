const replaceElements = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: [18, 6, 6, 6, 1, -1], input: [17, 18, 5, 4, 6, 1] },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, replaceElements(input), `replaceElements ${i}:`);
});
