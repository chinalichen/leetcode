/**
 * @param {number[]} seats
 * @return {number}
 */

var maxDistToClosest = function (seats) {
  const left = [];
  const right = [];
  for (let i = 0; i < seats.length; i++) {
    if (seats[i] === 0) {
      if (i === 0) {
        left[i] = 99999999;
        continue;
      }
      left[i] = left[i - 1] == null ? 1 : left[i - 1] + 1;
    }
  }
  for (let i = seats.length - 1; i >= 0; i--) {
    if (seats[i] === 0) {
      if (i === seats.length - 1) {
        right[i] = 99999999;
        continue;
      }
      right[i] = right[i + 1] == null ? 1 : right[i + 1] + 1;
    }
  }

  let max = -1;
  for (let i = 0; i < seats.length; i++) {
    const d = Math.min(left[i], right[i]);
    if (max < d) {
      max = d;
    }
  }
  return max;
};

module.exports = maxDistToClosest;