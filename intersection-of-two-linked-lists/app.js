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
  let pos = headA;
  while(pos!=null) {
    pos.visited = true;
    pos = pos.next;
  }
  pos = headB;
  while(pos!=null && !pos.visited) {
    pos = pos.next;
  }
  result = pos;
  pos = headA;
  while(pos!=null) {
    delete pos.visited;
    pos = pos.next;
  }
  return result;
};

module.exports = getIntersectionNode;