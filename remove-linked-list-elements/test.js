const removeElements = require("./app");
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
  { expect: generateList([1, 2, 3, 4, 5]), input: { list: generateList([1, 2, 6, 3, 4, 5, 6]), val: 6 } },
  { expect: generateList([2, 3, 4, 5, 6]), input: { list: generateList([1, 2, 3, 4, 5, 6]), val: 1 } },
  { expect: null, input: { list: generateList([1, 1, 1, 1, 1, 1]), val: 1 } },
  { expect: null, input: { list: generateList([]), val: 1 } },
];

dataTable.forEach((cases, i) => {
  const { expect, input } = cases;
  assert.deepEqual(expect, removeElements(input.list, input.val), `${i}:`);
});