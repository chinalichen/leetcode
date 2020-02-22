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
  let start = head;
  while (start != null && start.val === val) start = start.next;
Î
  if (start == null) {
    return null;
  }

  let fast = start.next;
  let slow = start;
  slow.next = null;

  while (fast != null) {
    if (fast.val === val) {
      fast = fast.next;
      continue;
    }
    slow.next = fast;
    slow = slow.next;
    fast = fast.next;
    slow.next = null;
  }

  return start;
};

module.exports = removeElements;