const getIntersectionNode = require("./app");
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
  return { head: nodes[0], all: nodes };
}

function build(arr1, arr2, isIntersect, intersectStartIndexInArr1) {
  const l1 = generateList(arr1);
  const l2 = generateList(arr2);
  if (isIntersect) {
    l2.all[l2.all.length - 1].next = l1.all[intersectStartIndexInArr1];
  }
  return { l1: l1.head, l2: l2.head };
}

const dataTable = [
  { expect: generateList([8, 4, 5]).head, input: build([4, 1, 8, 4, 5], [5, 0, 1], true, 2) },
  { expect: generateList([2, 4]).head, input: build([0, 9, 1, 2, 4], [3], true, 3) },
  { expect: null, input: build([2, 6, 4], [1, 5], false, 0) },
];

dataTable.forEach((cases, i) => {
  const { expect, input } = cases;
  assert.deepEqual(expect, getIntersectionNode(input.l1, input.l2), `${i}:`);
});