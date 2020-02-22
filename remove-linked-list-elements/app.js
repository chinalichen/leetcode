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
  if (head.val === val) {
    return removeElements(head.next, val);
  }
  head.next = removeElements(head.next, val);
  return head;
};

module.exports = removeElements;