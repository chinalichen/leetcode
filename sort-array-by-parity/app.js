/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
  let slow = 0;
  for (let i = 0; i < A.length; i++) {
    const v = A[i];
    if (v % 2 === 0) {
      A[i] = A[slow];
      A[slow] = v;
      slow++;
    }
  }
  return A;
};

module.exports = sortArrayByParity;