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
var swapPairs = function (head) {
  if (head != null && head.next != null) {
    const t = head.next.next;
    const th = head.next;
    head.next.next = head;
    head.next = swapPairs(t);
    return th;
  }
  return head;
};

module.exports = swapPairs;