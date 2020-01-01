/**
 * @param {number[]} cost
 * @return {number}
 */

var minCostClimbingStairs = function (cost) {
  cost = cost.concat(0);
  let cs = cost.slice(0);
  let i = 2;
  while (i < cost.length) {
    cs[i] = Math.min(cs[i - 2], cs[i - 1]) + cost[i];
    i++;
  }
  return cs[i - 1];
};

module.exports = minCostClimbingStairs;
