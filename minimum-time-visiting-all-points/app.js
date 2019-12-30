/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function (points) {
  if (points.length < 2) {
    return 0;
  }
  let paths = 0;
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const deltaX = Math.abs(prev[0] - curr[0]);
    const deltaY = Math.abs(prev[1] - curr[1]);
    paths += Math.max(deltaX, deltaY);
  }
  return paths;
};
module.exports = minTimeToVisitAllPoints;