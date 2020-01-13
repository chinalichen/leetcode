const findOcurrences = require('./app');
const assert = require('../utils/assert');

const dataTable = [{
  expect: ["girl", "student"],
  input: {
    text: "alice is a good girl she is a good student",
    first: "a",
    second: "good",
  }
}, {
  expect: ["we", "rock"],
  input: {
    text: "we will we will rock you",
    first: "we",
    second: "will",
  }
}, {
  expect: ["a", "a"],
  input: {
    text: "a a a a",
    first: "a",
    second: "a",
  }
}];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, findOcurrences(input.text, input.first, input.second), `findOcurrences ${i}:`);
});
