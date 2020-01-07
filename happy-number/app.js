/**
 * @param {number} n
 * @return {boolean}
 */
const sum = n => ('' + n).split('').map(n => 0 + n).map(n => n * n).reduce((s, n) => s + n);

var isHappy = function (n) {
  let slow = n;
  let fast = sum(n);
  while (slow !== fast) {
    slow = sum(slow);
    fast = sum(fast);
    fast = sum(fast);
  }
  return slow === 1;
};

module.exports = isHappy;