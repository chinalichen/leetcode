/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head) {
    return false;
  }
  let slow = head;
  let fast = head.next;

  while (slow != fast) {
    if (slow == null || fast == null) {
      return false;
    }

    slow = slow.next;
    if (fast.next == null) {
      return false;
    }
    fast = fast.next.next;
  }
  return true;
};

module.exports = hasCycle;