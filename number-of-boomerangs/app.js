/**
 * @param {number[][]} points
 * @return {number}
 */

const key = (i, j) => `${i},${j}`;
const factorial = (n) => {
  return n * (n - 1);
};
var numberOfBoomerangs = function (points) {
  let count = 0;
  const m = {};
  for (let i = 0; i < points.length; i++) {
    const [x1, y1] = points[i];
    for (let j = 0; j < points.length; j++) {
      if (i === j) {
        continue;
      }
      const k = key(i, j);
      // if (m[k] != null) {
      //   continue;
      // }
      const [x2, y2] = points[j];
      m[k] = (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
    }
  }
  for (let i = 0; i < points.length; i++) {
    const vm = {};
    for (let j = 0; j < points.length; j++) {
      if (i === j) {
        continue;
      }
      const k = key(i, j);
      const v = m[k];
      vm[v] = vm[v] == null ? 1 : vm[v] + 1;
    }
    for (let v in vm) {
      if (vm[v] > 1) {
        count += factorial(vm[v])
      }
    }
  }
  return count;
};

module.exports = numberOfBoomerangs;