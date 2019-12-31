/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function (A) {
  if (A.length < 3) {
    return true;
  }
  let i = 1;
  while (A[i] - A[i - 1] === 0) {
    i++;
  }
  if (i === A.length) {
    return true;
  }

  let delta = A[i] - A[i - 1];
  for (let j = i + 1; j < A.length; j++) {
    const newDelta = A[j] - A[j - 1];
    if (newDelta * delta < 0) {
      return false;
    }
  }
  return true;
};

module.exports = isMonotonic;
