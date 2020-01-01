/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function (A, B) {
  const sa = A.reduce((s, n) => s + n);
  const sb = B.reduce((s, n) => s + n);
  const avg = (sa + sb) / 2;
  const mb = {};
  for (let i = 0; i < B.length; i++) {
    mb[B[i]] = B[i];
  }
  for (let i = 0; i < A.length; i++) {
    const b = Math.abs(avg - sa + A[i]);
    if (mb[b] != null) {
      const a = A[i];
      if (sa - a + b === sb - b + a) {
        return [a, b];
      }
    }
  }
};

module.exports = fairCandySwap;