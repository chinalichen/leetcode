/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const move = (from, k, l) => (from + k) % l;

var rotate = function (nums, k) {
  const l = nums.length;
  let count = l;
  let from = 0;

  for (let i = 0; i < l; i++) {
    let fromTemp = nums[from];
    while (count > 0) {
      count--;
      let to = move(from, k, l);
      let toTemp = nums[to];
      nums[to] = fromTemp;
      fromTemp = toTemp;
      from = to;
      if (to === i) {
        from = i + 1;
        break;
      }
    }
  }
};

module.exports = rotate;