/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  const sorted = arr.sort((a, b) => a - b);

  let min = 999999999;
  const result = [];
  for (let i = 1; i < sorted.length; i++) {
    const v = sorted[i];
    const prev = sorted[i - 1];
    const delta = Math.abs(prev - v);
    if (delta > min) {
      continue;
    }
    if (delta < min) {
      min = delta;
      result.length = 0;
    }
    result.push([prev, v]);
  }
  return result;
};

module.exports = minimumAbsDifference;