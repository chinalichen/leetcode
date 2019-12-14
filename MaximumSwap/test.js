const maximumSwap = require('./app.js');
const assert = require('../utils/assert');

assert.deepEqual(7236, maximumSwap(2736), 'maximumSwap 1');
assert.deepEqual(9973, maximumSwap(9973), 'maximumSwap 2');
assert.deepEqual(0, maximumSwap(0), 'maximumSwap 3');
assert.deepEqual(7762, maximumSwap(2767), 'maximumSwap 4');
assert.deepEqual(7762, maximumSwap(7267), 'maximumSwap 5');
assert.deepEqual(98863, maximumSwap(98368), 'maximumSwap 6');