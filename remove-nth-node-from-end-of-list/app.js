/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let count = 0;
  let fast = head;
  let slow = { next: head };
  const dummyHead = slow;

  let enough = false;
  while (fast && (count < n)) {
    count++;
    fast = fast.next;
  }

  if (count != n) {
    return null;
  }

  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = (slow && slow.next) ? slow.next.next : null;

  return dummyHead.next;
};

module.exports = removeNthFromEnd;