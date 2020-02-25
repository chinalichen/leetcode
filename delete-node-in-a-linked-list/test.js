const deleteNode = require("./app");
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
  return nodes;
}

const dataTable = [
  { expect: generateList([2])[0], input: { all: generateList([1, 2]), idx: 0 } },
  { expect: generateList([1, 2, 3, 1])[0], input: { all: generateList([1, 2, 3, 2, 1]), idx: 3 } },
  { expect: generateList([1, 2, 1])[0], input: { all: generateList([1, 2, 2, 1]), idx: 1 } },
];

dataTable.forEach((cases, i) => {
  const { expect, input } = cases;
  deleteNode(input.all[input.idx])
  assert.deepEqual(expect, input.all[0], `${i}:`);
});