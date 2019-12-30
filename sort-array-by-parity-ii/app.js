/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
  let odd = 1;
  let even = 0;
  let len = A.length;
  for (let i = 0; i < len; i++) {
    while (A[odd] % 2 === 1) {
      odd += 2;
    }
    while (A[even] % 2 === 0) {
      even += 2;
    }
    if (odd < len && even < len) {
      const v = A[odd];
      A[odd] = A[even];
      A[even] = v;
    }
  }
  return A;
};

module.exports = sortArrayByParityII;