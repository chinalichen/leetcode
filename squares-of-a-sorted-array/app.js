/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
  let min = 0;
  let max = A.length - 1;
  const result = [];
  while (max >= min) {
    const maxAbs = Math.abs(A[max]);
    const minAbs = Math.abs(A[min]);
    if (minAbs > maxAbs) {
      min++;
      result.push(minAbs * minAbs);
    } else {
      max--;
      result.push(maxAbs * maxAbs);
    }
  }
  return result.reverse();
};

module.exports = sortedSquares;