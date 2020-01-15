/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function (A) {
  const m = {};
  for (let i = 0; i < A.length; i++) {
    const v = A[i];
    if (m[v] != null) {
      return v;
    }
    m[v] = true;
  }
};

module.exports = repeatedNTimes;
