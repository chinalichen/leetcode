/**
 * @param {number[]} nums
 * @return {number}
 */

var thirdMax = function (nums) {
  const visited = {};
  let top = [];
  nums.forEach(n => {
    if (visited[n]) {
      return;
    }
    visited[n] = true;
    const maxLength = Math.min(top.length, 4);
    let i;
    for (i = 0; i < maxLength; i++) {
      if (n > top[i]) {
        let index = maxLength;
        while (index > i) {
          top[index] = top[index - 1];
          index--;
        }
        top[i] = n;
        return;
      }
    }
    if (i === maxLength) {
      top.push(n);
    }
  });
  return top.length > 2 ? top[2] : top[0];
};

module.exports = thirdMax;