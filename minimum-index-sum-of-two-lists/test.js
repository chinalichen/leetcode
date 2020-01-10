const findRestaurant = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: ["Shogun"], input: { n: ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"], k: ["Shogun", "Tapioca Express", "Burger King", "KFC"] } },
  { expect: ["Shogun"], input: { n: ["KFC", "Shogun", "Burger King"], k: ["Shogun", "Tapioca Express", "Burger King", "KFC"] } },
  { expect: ["Shogun", "KFC"], input: { n: ["KFC", "Shogun", "Burger King"], k: ["Shogun", "KFC", "Tapioca Express", "Burger King"] } },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, findRestaurant(input.n, input.k), `findRestaurant ${i}:`);
});
