/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  /* bucket sort start */
  const posBuckets = [];
  const negBuckets = [];
  for (let i = 0; i < arr.length; i++) {
    const v = arr[i];
    if (v < 0) {
      negBuckets[-v] = v;
    } else {
      posBuckets[v] = v;
    }
  }

  const sorted = [];
  let index = 0;
  for (let i = negBuckets.length - 1; i >= 0; i--) {
    const v = negBuckets[i];
    if (v == null) {
      continue;
    }
    sorted[index++] = negBuckets[i];
  }
  for (let i = 0; i < posBuckets.length; i++) {
    const v = posBuckets[i];
    if (v == null) {
      continue;
    }
    sorted[index++] = posBuckets[i];
  }
  /* bucket sort end */

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