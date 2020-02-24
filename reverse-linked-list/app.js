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
var reverseList = function (head) {
  if (head == null || head.next == null) {
    return head;
  }

  let next = null;

  let pos = head;
  while (pos != null) {
    const t = pos.next;
    pos.next = next;
    next = pos;
    pos = t;
  }

  return next;
};

module.exports = reverseList;