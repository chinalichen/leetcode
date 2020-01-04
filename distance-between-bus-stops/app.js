/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function (distance, start, destination) {
  if (start > destination) return distanceBetweenBusStops(distance, destination, start);

  const distTotal = distance.reduce((s, n) => s + n);
  const distBetween = distance.slice(start, destination).reduce((s, n) => s + n, 0);
  return Math.min(distBetween, distTotal - distBetween);
};

module.exports = distanceBetweenBusStops;