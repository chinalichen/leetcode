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
  let slow = null;

  let enough = false;
  while (fast) {
    count++;
    fast = fast.next;
    if (count === n) {
      enough = true;
      break;
    }
  }

  if (!enough) {
    return null;
  }

  let isHead = true;
  slow = { next: head };
  while (fast) {
    fast = fast.next;
    slow = slow.next;
    isHead = false;
  }
  slow.next = (slow && slow.next) ? slow.next.next : null;

  return isHead ? head.next : head;
};

module.exports = removeNthFromEnd;