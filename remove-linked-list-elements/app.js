/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  if (head == null) {
    return null;
  }
  const next = removeElements(head.next, val);
  if (head.val === val) {
    return next;
  } else {
    head.next = next;
    return head;
  }
};

module.exports = removeElements;