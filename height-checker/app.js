/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  const buckets = [];
  for (let i = 0; i <= 100; i++) {
    buckets[i] = 0;
  }
  for (let i = 0; i < heights.length; i++) {
    buckets[heights[i]] += 1;
  }
  let count = 0;
  let pos = 0;
  for (let i = 0; i <= 100; i++) {
    if (buckets[i] === 0) {
      continue;
    }
    for (let j = 0; j < buckets[i]; j++) {
      if (heights[pos] !== i) {
        count++;
      }
      pos++;
    }
  }
  return count;
};
module.exports = heightChecker;