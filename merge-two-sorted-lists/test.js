const mergeTwoLists = require("./app");
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
  {
    expect: generateList([1, 1, 2, 3, 4, 4]),
    input: {
      l1: generateList([1, 2, 4]),
      l2: generateList([1, 3, 4]),
    }
  }, {
    expect: generateList([]),
    input: {
      l1: generateList([]),
      l2: generateList([]),
    }
  }, {
    expect: generateList([1, 2, 3]),
    input: {
      l1: generateList([1, 2, 3]),
      l2: generateList([]),
    }
  }, {
    expect: generateList([1, 2]),
    input: {
      l1: generateList([1]),
      l2: generateList([2]),
    }
  },
];

dataTable.forEach((cases, i) => {
  const {
    expect,
    input
  } = cases;
  assert.deepEqual(expect, mergeTwoLists(input.l1, input.l2), `${i}:`);
});