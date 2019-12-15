/**
 * @param {number[]} nums
 * @return {number}
 */
var floatEqual = function (n1, n2) {
  return Math.abs(n1 - n2) < 0.00001;
}
var checkStraightLine = function (points) {
  if (points.length < 2) {
    return false;
  }
  let deltaX = points[1][0] - points[0][0];
  let deltaY = points[1][1] - points[0][1];
  if (deltaX === 0) {
    // check if x is equal.
    for (let i = 0; i < points.length; i++) {
      if (points[i][0] !== points[0][0]) {
        return false;
      }
    }
    return true;
  }
  let k = deltaY / deltaX;
  for (let i = 1; i < points.length - 1; i++) {
    deltaX = points[i + 1][0] - points[i][0];
    deltaY = points[i + 1][1] - points[i][1];
    if (!floatEqual(k, deltaY / deltaX)) {
      return false;
    }
  }
  return true;
};

module.exports = checkStraightLine;