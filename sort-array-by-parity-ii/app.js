/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
  let odd = 1;
  let even = 0;
  const result = [];
  for (let i = 0; i < A.length; i++) {
    const v = A[i];
    if (v % 2 === 0) {
      result[even] = v;
      even += 2;
    } else {
      result[odd] = v;
      odd += 2;
    }
  }
  return result;
};

module.exports = sortArrayByParityII;