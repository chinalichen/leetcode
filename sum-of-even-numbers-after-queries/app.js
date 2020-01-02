/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function (A, queries) {
  const answer = [];
  let base = A.reduce((s, n) => n % 2 === 0 ? s + n : s, 0);
  for (let i = 0; i < queries.length; i++) {
    const [add, idx] = queries[i];
    const before = A[idx];
    const after = before + add;
    if (before % 2 === 0) {
      base -= before;
    }
    if (after % 2 === 0) {
      base += after;
    }
    A[idx] = after;
    answer[i] = base;
  }
  return answer;
};

module.exports = sumEvenAfterQueries;
