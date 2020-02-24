const isPalindrome = require("./app");
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
  { expect: false, input: generateList([1, 2]) },
  { expect: true, input: generateList([1, 2, 3, 2, 1]) },
  { expect: true, input: generateList([1, 2, 2, 1]) },
  { expect: true, input: generateList([5]) },
  { expect: true, input: generateList([5, 5]) },
  { expect: true, input: null },
];

dataTable.forEach((cases, i) => {
  const { expect, input } = cases;
  assert.deepEqual(expect, isPalindrome(input), `${i}:`);
});