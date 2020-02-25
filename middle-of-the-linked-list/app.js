/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let step1 = head;
  let step2 = head;

  while (step2 != null && (step2.next != null)) {
    step1 = step1.next;
    step2 = step2.next.next;
  }

  return step1;
};

module.exports = middleNode;