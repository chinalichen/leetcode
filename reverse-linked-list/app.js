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
let newHead = null;
var reverseList = function (head) {
  if (head == null || head.next == null) {
    return head;
  }

  const last = reverse(head);
  last.next = null;

  return newHead;
};

function reverse(head) {
  if (head.next == null) {
    newHead = head;
    return head;
  }
  const last = reverse(head.next);
  last.next = head;
  return head;
}

module.exports = reverseList;