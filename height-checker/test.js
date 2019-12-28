const heightChecker = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: 3, input: [1, 1, 4, 2, 1, 3] },
  { expect: 0, input: [1, 1, 1, 1, 1, 3] },
  { expect: 95, input: [23, 52, 46, 7, 50, 87, 20, 32, 85, 65, 62, 34, 8, 86, 15, 66, 66, 30, 11, 96, 18, 26, 24, 10, 57, 13, 37, 69, 85, 6, 8, 17, 40, 88, 14, 72, 85, 51, 40, 38, 54, 65, 65, 27, 18, 59, 77, 12, 25, 46, 10, 19, 10, 28, 64, 79, 5, 88, 2, 1, 14, 50, 91, 34, 58, 32, 90, 67, 28, 81, 84, 76, 88, 45, 42, 54, 59, 56, 20, 6, 56, 51, 72, 69, 6, 48, 67, 68, 6, 10, 93, 69, 4, 29, 28] },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, heightChecker(input), `heightChecker ${i}:1`);
});
