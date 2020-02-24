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
var isPalindrome = function (head) {
  let step1 = head;
  let step2 = head;

  while (step2 && step2.next && step2.next.next) {
    step1 = step1.next;
    step2 = step2.next.next;
  }

  let firstTail = null;
  let secondHead = null;
  if (!step2) {
    return true;
  } else if (!step2.next) { // odd
    firstTail = step1;
    secondHead = step1.next;
  } else if (!step2.next.next) { // even
    secondHead = step1.next;
  }

  const r = reverseList(secondHead);

  let pos1 = head;
  let pos2 = r;

  let same = true;
  while (pos2) {
    if (pos2.val !== pos1.val) {
      same = false;
      break;
    }
    pos2 = pos2.next;
    pos1 = pos1.next;
  }

  return same;
};

var reverseList = function (head) {
  if (head == null || head.next == null) {
    return head;
  }

  let next = null;

  let pos = head;
  while (pos != null) {
    const t = pos.next;
    pos.next = next;
    next = pos;
    pos = t;
  }

  return next;
};

module.exports = isPalindrome;