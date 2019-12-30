/**
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function (S) {
  const res = [];
  let start = 0;
  let prevChar = S[start];
  for (let i = 1; i < S.length; i++) {
    while (S[i] === prevChar) {
      i++;
    }
    const len = i - start;
    if (len >= 3) {
      res.push([start, i - 1]);
    }
    start = i;
    prevChar = S[i];
  }
  return res;
};

module.exports = largeGroupPositions;