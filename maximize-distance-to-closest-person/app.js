/**
 * @param {number[]} seats
 * @return {number}
 */
const minDist = (arr, find) => {
  if (arr.length === 1) {
    return Math.abs(find - arr[0]);
  }
  let head = 0;
  let tail = arr.length - 1;
  let delta = 9999999;
  while (head <= tail) {
    const pos = Math.floor((head + tail) / 2);
    const v = arr[pos];
    if (Math.abs(find - v) > delta) {
      return delta;
    }
    if (v > find) {
      tail = pos - 1;
    } else if (v < find) {
      head = pos + 1;
    } else {
      return 0;
    }
  }
  const v1 = arr[head] == null ? 99999999 : arr[head];
  const v2 = arr[tail] == null ? 99999999 : arr[tail];
  return Math.min(Math.abs(find - v1), Math.abs(find - v2));
};

var maxDistToClosest = function (seats) {
  const map = [];
  for (let i = 0; i < seats.length; i++) {
    if (seats[i] === 1) {
      map.push(i);
    }
  }

  let max = -1;
  for (let i = 0; i < seats.length; i++) {
    if (seats[i] === 0) {
      const min = minDist(map, i);
      if (max < min) {
        max = min;
      }
    }
  }
  return max;
};

module.exports = maxDistToClosest;