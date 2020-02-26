/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
  let str = '';
  while (head != null) {
    str = `${str}${head.val}`;
    head = head.next;
  }
  return parseInt(str, 2);
};

module.exports = getDecimalValue;