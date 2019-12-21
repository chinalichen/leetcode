/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var store = (resultMap, i, j) => {
  const key1 = `${i},${j}`;
  const key2 = `${j},${i}`;
  if (resultMap[key1] != null) {
    return;
  }
  if (resultMap[key2] != null) {
    return;
  }
  resultMap[key1] = [i, j];
};

var findPairs = function (nums, k) {
  if (k < 0) {
    return 0;
  }

  const map = [];
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    const v = map[n] || 0;
    map[n] = v + 1;
  }

  if (k === 0) {
    return Object.keys(map).filter(n => map[n] > 1).length;
  }
  const result = {};
  nums.forEach(n => {
    if (map[n + k] != null) {
      store(result, n, n + k);
    }
    if (map[n - k] != null) {
      store(result, n, n - k);
    }
  });
  return Object.keys(result).length;
};

module.exports = findPairs;