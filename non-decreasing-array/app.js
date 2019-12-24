/**
 * @param {number[]} nums
 * @return {boolean}
 */

var biSearch = (arr1, val) => {
  let left = 0;
  let right = arr1.length - 1;
  while (left <= right) {
    let pos = Math.floor((right + left) / 2);
    if (arr1[pos] === val) {
      return pos;
    } else if (arr1[pos] > val) {
      right = pos - 1;
    } else {
      left = pos + 1;
    }
  }
  return -1;
};

var sameExceptOne = (arr1, except1, arr2, except2) => {
  let bias1 = 0;
  let bias2 = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (i + bias1 === except1) {
      bias1 = 1;
    }
    if (i + bias2 === except2) {
      bias2 = 1;
    }
    if (arr1[i + bias1] !== arr2[i + bias2]) {
      return false;
    }
  }
  return true;
};

var checkPossibility = function (nums) {
  const ruler = nums.slice(0).sort((a, b) => a - b);
  for (let j = 0; j < nums.length; j++) {
    const index = biSearch(ruler, nums[j]);
    if (sameExceptOne(nums, j, ruler, index)) {
      return true;
    }
  }
  return false;
};

module.exports = checkPossibility;