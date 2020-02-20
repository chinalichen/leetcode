const hasCycle = require("./app");
const assert = require("../utils/assert");

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function generateList(arr, tailNextIndex = -1) {
  const nodes = arr.map(a => new ListNode(a));
  for (let i = 0; i < nodes.length - 1; i++) {
    const curr = nodes[i];
    const next = nodes[i + 1];
    curr.next = next;
  }
  if (tailNextIndex != -1) {
    nodes[nodes.length - 1].next = nodes[tailNextIndex];
  }
  return nodes[0];
}

const dataTable = [
  { expect: true, input: generateList([3, 2, 0, -4], 1) },
  { expect: true, input: generateList([1, 2], 0) },
  { expect: false, input: generateList([1, 1], -1) },
  { expect: true, input: generateList([1, 1, 1], 2) },
  { expect: true, input: generateList([1, 1, 2], 1) },
  { expect: true, input: generateList([1, 1, 2, 3, 3], 4) },
];

dataTable.forEach((cases, i) => {
  const { expect, input } = cases;
  assert.deepEqual(expect, hasCycle(input), `${i}:`);
});