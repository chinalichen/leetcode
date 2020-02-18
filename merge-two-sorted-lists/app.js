/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (l1 == null || l2 == null) {
    return l1 || l2;
  }
  let head = null;
  let pos = null;
  let pos1 = l1;
  let pos2 = l2;
  while (true) {
    let node = null;
    if (pos1.val < pos2.val) {
      node = pos1;
      pos1 = pos1.next;
    } else {
      node = pos2;
      pos2 = pos2.next;
    }

    if (!head) {
      head = node;
      pos = head;
    } else {
      pos.next = node;
      pos = pos.next;
    }

    if (pos1 == null) {
      node.next = pos2;
      break;
    }
    if (pos2 == null) {
      node.next = pos1;
      break;
    }
  }
  return head;
};

module.exports = mergeTwoLists;