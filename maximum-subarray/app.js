/**
 * @param {number[]} nums
 * @return {number}
 */

function sub(array) {
  const num = array[array.length - 1];
  if (array.length === 1) {
    return { max: num, tailSum: Math.max(num, 0) };
  }
  const res = sub(array.slice(0, -1));
  const sum = res.tailSum + num;
  const max = Math.max(res.max, sum);
  return { max, tailSum: Math.max(0, sum) };
}

var maxSubArray = function (nums) {
  return sub(nums).max;
};

module.exports = maxSubArray;