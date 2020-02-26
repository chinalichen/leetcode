const getDecimalValue = require("./app");
const assert = require("../utils/assert");

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function generateList(arr) {
  const nodes = arr.map(a => new ListNode(a));
  for (let i = 0; i < nodes.length - 1; i++) {
    const curr = nodes[i];
    const next = nodes[i + 1];
    curr.next = next;
  }
  return nodes[0];
}

const dataTable = [
  { expect: 5, input: generateList([1, 0, 1]) },
  { expect: 2, input: generateList([1, 0]) },
  { expect: 1, input: generateList([0, 1]) },
  { expect: 1, input: generateList([0, 0, 1]) },
  { expect: 0, input: generateList([0]) },
  { expect: 1, input: generateList([1]) },
  { expect: 18880, input: generateList([1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0]) },
  { expect: 0, input: generateList([0, 0]) },
];

dataTable.forEach((cases, i) => {
  const { expect, input } = cases;
  assert.deepEqual(expect, getDecimalValue(input), `${i}:`);
});