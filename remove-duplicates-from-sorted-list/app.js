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
var deleteDuplicates = function (head) {
  if (!head) {
    return head;
  }
  let slow = head;
  let fast = head.next;
  while (fast) {
    if (slow.val === fast.val) {
      fast = fast.next;
      slow.next = fast;
      continue;
    }
    slow.next = fast;
    fast = fast.next;
    slow = slow.next;
  }
  return head;
};

module.exports = deleteDuplicates;