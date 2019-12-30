/**
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function (A) {
  const result = [];
  let remainder = 0;
  for (let i = 0; i < A.length; i++) {
    const n = A[i];
    remainder = (remainder * 2 + n) % 5;
    result[i] = remainder === 0;
  }
  return result;
};

module.exports = prefixesDivBy5;