/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  let degree = 0;
  let min = 100000;
  const buckets = [];
  for (let i = 0; i < nums.length; i++) {
    const v = nums[i];
    buckets[v] = buckets[v] ? buckets[v].concat(i) : [i];
    const indices = buckets[v];
    if (indices.length >= degree) {
      const delta = indices[indices.length - 1] - indices[0] + 1;
      min = indices.length === degree ? Math.min(delta, min) : delta;
      degree = indices.length;
    }
  }
  return min;
};

module.exports = findShortestSubArray;