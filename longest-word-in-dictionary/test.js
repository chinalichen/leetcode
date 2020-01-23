const longestWord = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: "world", input: ["w", "wo", "wor", "worl", "world"] },
  { expect: "apple", input: ["a", "banana", "app", "appl", "ap", "apply", "apple"] },
  { expect: "yodn", input: ["yo", "ew", "fc", "zrc", "yodn", "fcm", "qm", "qmo", "fcmz", "z", "ewq", "yod", "ewqz", "y"] },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, longestWord(input), `longestWord ${i}:`);
});
