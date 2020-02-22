/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let posA = headA;
  let posB = headB;
  while (posA != null && posB != null) {
    posA = posA.next;
    posB = posB.next;
  }
  let pos = posA == null ? posB : posA;
  let long = posA == null ? headB : headA;
  let short = posA == null ? headA : headB;
  while (pos != null) {
    long = long.next;
    pos = pos.next;
  }

  while (long !== short) {
    long = long.next;
    short = short.next;
  }

  return long;
};

module.exports = getIntersectionNode;