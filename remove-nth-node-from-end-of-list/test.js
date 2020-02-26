const removeNthFromEnd = require("./app");
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
  { expect: generateList([1, 2, 3, 4, 6]), input: { list: generateList([1, 2, 3, 4, 5, 6]), n: 2 } },
  { expect: generateList([2, 3, 4, 5, 6]), input: { list: generateList([1, 2, 3, 4, 5, 6]), n: 6 } },
  { expect: generateList([1, 2, 3]), input: { list: generateList([1, 2, 3, 1]), n: 1 } },
  { expect: generateList([2]), input: { list: generateList([1, 2]), n: 2 } },
  { expect: null, input: { list: generateList([2]), n: 1 } },
];

dataTable.forEach((cases, i) => {
  const { expect, input } = cases;
  assert.deepEqual(expect, removeNthFromEnd(input.list, input.n), `${i}:`);
});