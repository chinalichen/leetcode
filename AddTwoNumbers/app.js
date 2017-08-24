var addTwoNumbers = function (l1, l2) {
  var sum = l1, remainder, carry = 0;
  do {
    var l2v = 0;
    if (l2) {
      l2v = l2.val;
      l2 = l2.next;
    }
    remainder = (l1.val + l2v + carry) % 10;
    carry = Math.floor((l1.val + l2v + carry) / 10);

    l1.val = remainder;

    l1 = l1.next;
  } while (l1 != null);

  l1 = sum;
  while (l1.next != null) l1 = l1.next;

  if (l2 != null) {
    if (carry === 0) {
      l1.next = l2;
      return sum;
    } else {
      l1.next = l2;
      do {
        remainder = (l2.val + carry) % 10;
        carry = Math.floor((l2.val + carry) / 10);
        l2.val = remainder;
        l2 = l2.next;
      } while (l2 != null);
    }
  }

  if (carry === 0) {
    return sum;
  }

  l1 = sum;
  while (l1.next != null) l1 = l1.next;
  l1.next = { val: carry, next: null };

  return sum;
};

module.exports = addTwoNumbers;