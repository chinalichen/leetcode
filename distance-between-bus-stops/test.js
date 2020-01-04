const distanceBetweenBusStops = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: 0, input: { dist: [1, 2, 3, 4], start: 0, dest: 0 } },
  { expect: 1, input: { dist: [1, 2, 3, 4], start: 0, dest: 1 } },
  { expect: 3, input: { dist: [1, 2, 3, 4], start: 0, dest: 2 } },
  { expect: 4, input: { dist: [1, 2, 3, 4], start: 0, dest: 3 } },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, distanceBetweenBusStops(input.dist, input.start, input.dest), `distanceBetweenBusStops ${i}:`);
});
