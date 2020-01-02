/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function (A) {
  const l = A.length;
  let head = 0;
  let hasHead = false;
  while (A[head] < A[head + 1] && head + 1 < l) {
    head++;
    hasHead = true;
  }

  let tail = l - 1;
  let hasTail = false;
  while (A[tail] < A[tail - 1] && tail - 1 >= 0) {
    tail--;
    hasTail = true;
  }

  if (tail === head && hasHead && hasTail) {
    return true;
  }
  return false;
};

module.exports = validMountainArray;
